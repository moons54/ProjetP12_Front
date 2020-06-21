import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {CreditService} from '../../../../services/credit.service';
import {Router} from '@angular/router';
import {HttpEventType, HttpResponse} from '@angular/common/http';
import {reject, resolve} from 'q';
import {promise} from 'selenium-webdriver';

@Component({
  selector: 'app-stepperreccap',
  templateUrl: './stepperreccap.component.html',
  styleUrls: ['./stepperreccap.component.css']
})
export class StepperreccapComponent implements OnInit {

  @Input() creditform: FormGroup;
  formSubmitted: boolean = false;
  fileUploading = false;
  fileUploaded = false;
  private selectedFiles;
  private progress: number;
  private currentFileUpload: any;
  private currentSiret;
  private coutGlobal;
  private nature: string= '';
  private siret: string='';
  private objet: string='';
  private refdossier = (Math.floor(Math.random()*(1000-100)+100));

  constructor(private formbuilder: FormBuilder,
              private creditService: CreditService,
              private router: Router) {
  }

  ngOnInit() {
  }

  submit() {
    this.formSubmitted = true;
    const newCredit = {
      id:null,
      nature: this.creditform.get('details').get('nature').value,
      montant: this.creditform.get('details').get('duree').value,
      objet: this.creditform.get('details').get('objet').value,
      duree: this.creditform.get('details').get('montant').value,
      assurance: this.creditform.get('assurance').get('assurance').value,
      siretClient: this.creditform.get('assurance').get('siretClient').value,
      status: this.creditform.get('reccapitulatif').get('status').value,
      referenceDossier: this.attributionRefDossier(),
      taux: this.creditform.get('reccapitulatif').get('taux').value,
      echeanceEmprunt: this.creditform.get('reccapitulatif').get('echeanceEmprunt').value,
      coutGlobal: this.coutGlobal.toString(),
      decision: null,
    };
    this.creditService.createCredit(newCredit);
    this.creditService.workOcr(newCredit.referenceDossier);
    this.router.navigate(['/credits']);
  };

  onSelectedFile(event) {
    this.fileUploading = true;
    this.selectedFiles = event.target.files;
    this.currentSiret = this.creditform.get('assurance').get('siretClient').value;
  }

  calculCout() {
    let echeance = this.creditform.get('reccapitulatif').get('echeanceEmprunt').value;
    let global = echeance * this.creditform.get('details').get('duree').value;
    this.coutGlobal = global - this.creditform.get('details').get('montant').value;
    return this.coutGlobal;
  }

  attributionRefDossier() {
    this.nature =  this.creditform.get('details').get('nature').value;
    this.siret = this.creditform.get('assurance').get('siretClient').value;
    this.objet =this.creditform.get('details').get('objet').value;
    let nombrefinal = this.nature.substr(5,3)+this.siret.substr(0,3)+this.refdossier+this.objet.substr(0,2);
    return nombrefinal;
  }

  uploadFile() {
    this.progress = 0;
    this.currentFileUpload = this.selectedFiles.item(0);
    this.creditService.uploadJustificatif(this.currentFileUpload,this.attributionRefDossier()).subscribe(
      event => {
        if (event.type === HttpEventType.UploadProgress) {
          this.progress = Math.round(100 * event.loaded / event.total);
        }
        else if (event instanceof HttpResponse) {
          console.log("Données chargées")
          this.fileUploaded= true;
        }
      },
      error1 => {
        console.log("Problème de chargement " + error1);
      }
    );
  }
}

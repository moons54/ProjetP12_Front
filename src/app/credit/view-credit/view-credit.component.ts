import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {CreditService} from '../../services/credit.service';
import {Router} from '@angular/router';
import {Credit} from '../../models/credit.model';
import {MenuItem} from 'primeng';

@Component({
  selector: 'app-view-credit',
  templateUrl: './view-credit.component.html',
  styleUrls: ['./view-credit.component.css']
})
export class ViewCreditComponent implements OnInit {

  creditform: FormGroup;
  creditform2: FormGroup;
  creditform3: FormGroup;
  isLinear = false;
  credit: Credit;

  @Input() registrationForm: FormGroup;

  private objet = [{value: 'Rachat', viewValue: 'Rachat'},
    {value: 'Trésorerie', viewValue: 'Trésorerie'},
    {value: 'Création', viewValue: 'Création'}
  ];


  constructor(private formbuilder: FormBuilder,
              private creditService: CreditService,
              private router: Router) {
  }

  ngOnInit() {
  }


  initForm() {
    this.registrationForm = new FormGroup({
      'details': new FormGroup({
        'nature': new FormControl(null, Validators.required),
        'montant': new FormControl(null,Validators.required),
        'objet': new FormControl(null, Validators.required),
        'duree': new FormControl(null, Validators.required),
      }),
      'assurance': new FormGroup( {
        'assurance': new FormControl(null, Validators.required),
        'siretClient': new FormControl('', Validators.required),
      }),
      'reccapitulatif': new FormGroup({
        'status': new FormControl(null, Validators.required),
        'echeanceEmprunt': new FormControl(null,Validators.required),
        'coutGlobal': new FormControl(null,Validators.required),
      })
    });
  };

  onSaveCredit() {
    const nature = this.creditform.get('nature').value;
    const objet = this.creditform.controls['objet'].value;
    const echeanceEmprunt = this.creditform3.get('echeanceEmprunt').value;
    const taux = this.creditform2.get('taux').value;
    const duree = this.creditform.get('duree').value;
    const assurance = this.creditform2.get('assurance').value;
    const status = this.creditform3.get('status').value;
    const montant = this.creditform.get('montant').value;
    const referenceDossier = this.creditform3.get('referenceDossier').value;
    const siretClient = this.creditform2.get('siretClient').value;
    const coutGlobal = this.creditform3.get('coutGlobal').value;

    const newCredit = {
      id:null,
      nature: this.credit.nature,
      objet: this.credit.objet,
      duree: this.credit.duree,
      echeanceEmprunt: this.credit.echeanceEmprunt,
      referenceDossier: this.credit.referenceDossier,
      taux: this.credit.taux,
      assurance: this.credit.assurance,
      status: this.credit.status,
      siretClient: this.credit.siretClient,
      montant: this.credit.montant,
      coutGlobal: this.credit.coutGlobal,
      decision: null,
    };

    this.creditService.createCredit(newCredit);
    this.router.navigate(['/credits']);
  }

}



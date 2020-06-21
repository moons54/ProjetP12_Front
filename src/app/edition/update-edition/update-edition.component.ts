import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {Edition} from '../../models/edition.model';
import {DecisionService} from '../../services/decision.service';
import {ActivatedRoute, Router} from '@angular/router';
import {EditionsService} from '../../services/editions.service';
import {Credit} from '../../models/credit.model';
import {Decision} from '../../models/decision.model';

@Component({
  selector: 'app-update-edition',
  templateUrl: './update-edition.component.html',
  styleUrls: ['./update-edition.component.css']
})
export class UpdateEditionComponent implements OnInit {

  @Input() editionForm: FormGroup;
  editionId: any;

  @Input() edition: Edition;
  @Input() decision: Decision;
  @Input() credit: Credit;

  private statuts = [{value: 'en attente', viewValue: 'en attente'},
    {value: 'dossier édité', viewValue: 'dossier édité'},
    {value: 'dossier débloqué', viewValue: 'dossier debloqué'},
    {value: 'attente signature clients', viewValue: 'attente signature client'}
  ];

  constructor(private decisionService: DecisionService,
              private editionService: EditionsService,
              private router: Router,
              private formbuilder: FormBuilder,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.edition = new Edition('','','','','');
    const id = this.route.snapshot.paramMap.get('refedition');
    this.editionService.getEditionbyId(+id).then(
      (edition: Edition) => {
        this.edition = edition;
      }
    );
  };

  private createForm () {
    this.editionForm = this.formbuilder.group(
      {
        'dateEdition': new FormControl(null,Validators.required),
        'statuts': new FormControl(null,Validators.required),
        'commentaire': new FormControl(null,Validators.required),
        'dateDeblocage': new FormControl(null, Validators.required),
      });
  };

  onSubmit() {
    const updateEdition = {
      id:this.editionId,
      dateEdition: this.editionForm.get('dateEdition').value,
      statuts: this.editionForm.get('statuts').value,
      commentaire: this.editionForm.get('commentaire').value,
      dateDeblocage: this.editionForm.get('dateDeblocage').value
    };
  }
}

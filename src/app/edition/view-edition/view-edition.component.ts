import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {Edition} from '../../models/edition.model';
import {Decision} from '../../models/decision.model';
import {Credit} from '../../models/credit.model';
import {DecisionService} from '../../services/decision.service';
import {EditionsService} from '../../services/editions.service';
import {CreditService} from '../../services/credit.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-view-edition',
  templateUrl: './view-edition.component.html',
  styleUrls: ['./view-edition.component.css']
})
export class ViewEditionComponent implements OnInit {

  editionForm: FormGroup;
  editionId: any;
  edition: Edition;
  refdossier: any;
  decisionId: any;
  decision: Decision;
  creditId: any;
  credit: Credit;


  constructor(private decisionService: DecisionService,
              private editionService: EditionsService,
              private creditService: CreditService,
              private router: Router,
              private formBuilder: FormBuilder,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.credit = new Credit('','','','',
      '','','','','','',
      '',null);
    this.decision = new Decision('','','','',
      null);
    this.edition = new Edition('','','','','');
    this.creditId = this.route.snapshot.paramMap.get('id');
    this.creditService.getCreditbyId(this.creditId).then(
      (credit: Credit) => {
        this.credit = credit;
        this.decisionService.getDecisionbyId(+this.credit.decision.id).then(
          (decision: Decision) => {
            this.decision = decision;

            const id = this.decision.edition.id;
            this.editionService.getEditionbyId(+this.decision.edition.id).then(
              (edition: Edition) => {
                this.edition = edition;

              }
            );
          }
        );
      }
    );
    this.createForm();
  }

  private createForm  () {
    this.editionForm = this.formBuilder.group(
      {
        'dateEdition': new FormControl(null,Validators.required),
        'statuts': new FormControl(null,Validators.required),
        'commentaire': new FormControl(null,Validators.required),
        'dateDeblocage': new FormControl(null, Validators.required),
      });
  }
}

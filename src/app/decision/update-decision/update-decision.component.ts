import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {Decision} from '../../models/decision.model';
import {DecisionService} from '../../services/decision.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-update-decision',
  templateUrl: './update-decision.component.html',
  styleUrls: ['./update-decision.component.css']
})
export class UpdateDecisionComponent implements OnInit {

  @Input() decisionForm: FormGroup;
  decisionId: any;
  decision: Decision;

  private statuts = [{value: 'accepté', viewValue: 'accepté'},
    {value: 'ajourné', viewValue: 'ajourné'},
    {value: 'en attente', viewValue: 'en attente'}
  ];


  constructor(private decisionService: DecisionService,
              private router: Router,
              private formbuilder: FormBuilder,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.decision = new Decision('','', '', '',null);
    this.decisionId = this.route.snapshot.paramMap.get('id');
    this.decisionService.getDecisionbyId(this.decisionId).then(
      (decision: Decision) => {
        this.decision = decision;
        console.log(this.decision)
      }
    );
    this.createForm();
  };

  private createForm  () {
    this.decisionForm = this.formbuilder.group(
      {
        'dateDecision' :new FormControl(null,Validators.required),
        'commentaire' :new FormControl(null,Validators.required),
        'statuts' :new FormControl(null,Validators.required),
      }
    );
  }

  onSubmit() {
    const updateDecision = {
      id:this.decisionId,
      commentaire: this.decisionForm.get('commentaire').value,
      dateDecision: this.decisionForm.get('dateDecision').value,
      statuts: this.decisionForm.get('statuts').value,
      edition: null,
    };
    this.decisionService.updateDecision(updateDecision);
    this.router.navigate(['/decisions'])
  }
}

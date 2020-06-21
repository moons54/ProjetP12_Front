import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {Decision} from '../../models/decision.model';
import {DecisionService} from '../../services/decision.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Bilan} from '../../models/bilan.model';
import {BilanService} from '../../services/bilan.service';
import {Resultat} from '../../models/resultat.model';
import {ResultatService} from '../../services/resultat.service';
import {Sig} from '../../models/sig.model';
import {Ratios} from '../../models/Ratios.model';

@Component({
  selector: 'app-view-collaborateur',
  templateUrl: './view-collaborateur.component.html',
  styleUrls: ['./view-collaborateur.component.css']
})
export class ViewCollaborateurComponent implements OnInit {

  decisionForm: FormGroup;
  decisionId: any;
  decision: Decision;
  refdossier: any;
  bilan: Bilan;
  resultat: Resultat;
  resultatid: any;
  sig: Sig;
  rid: any;
  ratios: Ratios;


  private statuts = [{value: 'accepté', viewValue: 'accepté'},
    {value: 'ajourné', viewValue: 'ajourné'},
    {value: 'en attente', viewValue: 'en attente'}
  ];


  constructor(private decisionService: DecisionService,
              private bilanService: BilanService,
              private resultatService: ResultatService,
              private router: Router,
              private formbuilder: FormBuilder,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.decision = new Decision('','','', '', null);
    this.decisionId = this.route.snapshot.paramMap.get('id');
    this.decisionService.getDecisionbyId(this.decisionId).then(
      (decision: Decision) => {
        this.decision = decision;
        console.log(this.decision)
      }
    );
    this.bilan= new Bilan('','','','','','','',''
    ,'','','','','','','','','',
      '',null);


     this.resultatid = this.route.snapshot.paramMap.get("refdossier");

    this.bilanService.getBilanbyId(this.resultatid).then(
      (bilan: Bilan) => {
        this.bilan = bilan;
        console.log(this.bilan)
        this.ratios = new Ratios('','','','',
          '','','','');
        this.bilanService.getRatiosBilanbyId(this.bilan.id).then(
          (ratios: Ratios) => {
            this.ratios = ratios;
            console.log(this.ratios)

          }
        );
      }
    );

    this.resultat = new Resultat('','','','',''
    ,'','','','','',
      '','','','','','',
      '','','','','','',null);


this.bilanService.getResultatBilanbyId(this.resultatid).then(
  (resultat: Resultat) => {
    this.resultat = resultat;
    console.log(this.resultat)
    this.rid = this.resultat.id;
    this.sig = new Sig('','','','','','',''
      ,'','','','')
    this.resultatService.getSingleSigByResultat(this.rid).then(
      (sig: Sig) => {
        this.sig = sig;
        console.log(this.sig);
      }
    )

  }
  );





    //)
    this.createForm();
  };

  private createForm  () {
    this.decisionForm = this.formbuilder.group(
      {
        'dateDecision' :new FormControl(null,Validators.required),
        'commentaire' :new FormControl(null,Validators.required),
        'statuts' :new FormControl(null,Validators.required),
      });
  }
}

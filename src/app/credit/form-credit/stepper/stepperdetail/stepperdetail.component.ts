import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {CreditService} from '../../../../services/credit.service';
import {Router} from '@angular/router';
import {Credit} from '../../../../models/credit.model';

@Component({
  selector: 'app-stepperdetail',
  templateUrl: './stepperdetail.component.html',
  styleUrls: ['./stepperdetail.component.css']
})
export class StepperdetailComponent implements OnInit {


  @Input() creditform: FormGroup;
  @Input() isOn: Boolean;


  private objets = [{value: 'rachat', viewValue: 'Rachat'},
    {value: 'tresorerie', viewValue: 'Trésorerie'},
    {value: 'creation', viewValue: 'Création'}
  ];
  duree: number;
  montant: number;
  taux: number;


  private natures = [{value: 'immobilier', viewValue: 'Pret Immobilier'},
    {value: 'professionnel',viewValue: 'Pret Professionnel'}
  ];


  formatLabel(value: number) {
    if (value >= 1000) {
      return Math.round(value / 1000) + 'k';
    }
    return value;
  }

  calculTaux(){
    if(this.creditform.get('details').get('duree').value<60) {
      return this.creditform.get('reccapitulatif').get('taux').setValue('1.6')
    }
    return this.creditform.get('reccapitulatif').get('taux').setValue('1.9')
  }

  calculEcheances(){
    if (this.creditform.get('details').get('duree').value >3) {
      this.duree = this.creditform.get('details').get('duree').value;
      this.montant = this.creditform.get('details').get('montant').value;
      this.taux = ( ( this.creditform.get('reccapitulatif').get('taux').value / 100 ) / 12 );
      let cal1 = ( 1 + (this.taux));
      let cal2 =  1 - Math.pow(cal1,-this.duree);
      let cal3 = this.montant * (this.taux) ;
      let resultat = cal3 / cal2;
      return this.creditform.get('reccapitulatif').get('echeanceEmprunt').setValue(resultat)
    }
  }


    constructor(){}

    ngOnInit() {}


    step1Submitted() {
      this.isOn =false;
      this.calculTaux();
      this.calculEcheances();

    }
  }

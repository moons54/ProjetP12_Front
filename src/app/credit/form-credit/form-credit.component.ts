import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {Credit} from '../../models/credit.model';
import {CreditService} from '../../services/credit.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-form-credit',
  templateUrl: './form-credit.component.html',
  styleUrls: ['./form-credit.component.css']
})
export class FormCreditComponent implements OnInit {

  registrationForm: FormGroup;
  credit: Credit;
  isOn: Boolean = true;


  constructor(private formbuilder: FormBuilder,
              private creditService: CreditService,
              private router: Router) {
  };

  ngOnInit() {
    this.credit = new Credit('','','','','',''
      ,'','','','','',null);
    this.initForm();
    this.isOn;
  };


  private initForm() {
    this.registrationForm = new FormGroup({
      'details': new FormGroup({
        'nature': new FormControl(null, Validators.required),
        'montant': new FormControl(null,Validators.required),
        'objet': new FormControl(null, Validators.required),
        'duree': new FormControl(null, Validators.required),
      }),
      'assurance': new FormGroup( {
        'assurance': new FormControl('', Validators.required),
        'siretClient': new FormControl('', Validators.required),
      }),
      'reccapitulatif': new FormGroup({
        'echeanceEmprunt': new FormControl(null, Validators.required),
        'taux': new FormControl(null, Validators.required),
        'status': new FormControl(null, Validators.required),
      }),
    });
  };


}

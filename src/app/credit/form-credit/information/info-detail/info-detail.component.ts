import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {Credit} from '../../../../models/credit.model';
import {CreditService} from '../../../../services/credit.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-info-detail',
  templateUrl: './info-detail.component.html',
  styleUrls: ['./info-detail.component.css']
})
export class InfoDetailComponent implements OnInit {

  registrationForm: FormGroup;
  credit: Credit;

  constructor(private formbuilder: FormBuilder,
              private creditService: CreditService,
              private router: Router) {
  }

  ngOnInit() {
    this.credit = new Credit('', '', '', '', '', ''
      , '', '', '', '', '',null);
    this.initForm();
  }


  private initForm() {
    this.registrationForm = new FormGroup({
      'details': new FormGroup({
        'nature': new FormControl(null, Validators.required),
        'montant': new FormControl(null, Validators.required),
        'objet': new FormControl(null, Validators.required),
        'duree': new FormControl(null, Validators.required),
      }),
      'assurance': new FormGroup({
        'assurance': new FormControl(null, Validators.required),
        'siretClient': new FormControl('', Validators.required),
      }),
      'reccapitulatif': new FormGroup({
        'echeanceEmprunt': new FormControl(null, Validators.required),
        'taux': new FormControl(null, Validators.required),
        'status': new FormControl(null, Validators.required),
      }),
    });
  }
}

import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {AuthentificationService} from '../services/authentification.service';
import {Router} from '@angular/router';
import {User} from '../models/user.model';
import {MustMatch} from './must-Match';
import {ErrorStateMatcher} from '@angular/material';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit,ErrorStateMatcher {


  signInForm: FormGroup;
  errorMessage: string;
  user: User;
  submitted = false;
  matcher: any;
 // matcher = new SigninComponent();

  constructor(private formBuilder: FormBuilder,
              private authService: AuthentificationService,
              private router: Router) {}



  ngOnInit() {
    this.initForm()
  }

  initForm() {
    this.signInForm = this.formBuilder.group({
      username: ['',Validators.required],
      password: ['',[Validators.required, Validators.minLength(6)]],
      confirmPassword: ['',Validators.required],
      email: ['',[Validators.required,Validators.email]],
      societe: ['',Validators.required],
      siretClient: ['',Validators.required],
      telephone: ['',Validators.required],
      adresse: ['',Validators.required],
      codePostal: ['',Validators.required],
      ville: ['',Validators.required]
    },
      //{ validator: MustMatch('password','confirmPassword')},
      { validator: this.checkPasswords })
  }

  onSubmit() {
    this.submitted = true;

    if (this.signInForm.invalid) {
      console.log(this.signInForm)
      return;
    } else {

      const newUser = {
        username: this.signInForm.get('username').value,
        password: this.signInForm.get('password').value,
        confirmedpassword: this.signInForm.get('confirmPassword').value,
        email: this.signInForm.get('email').value,
        societe: this.signInForm.get('societe').value,
        siretClient: this.signInForm.get('siretClient').value,
        telephone: this.signInForm.get('telephone').value,
        adresse: this.signInForm.get('adresse').value,
        codePostal: this.signInForm.get('codePostal').value,
        ville: this.signInForm.get('ville').value
      }

      console.log(newUser);


      this.authService.signIn(newUser).then(
        () => {
          this.router.navigate(['accueil']);
        },
        (error) => {
          this.errorMessage = error;
        }
      );
    }
  }


  get f() {
    return this.signInForm.controls;
  }

  getcolor() {
    return 'red'
  }

  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const invalidCtrl = !!(control && control.invalid && control.parent.dirty);
    const invalidParent = !!(control && control.parent && control.parent.invalid && control.parent.dirty);

    return (invalidCtrl || invalidParent);
  }

  checkPasswords(group: FormGroup) { // here we have the 'passwords' group
    let pass = group.controls.password.value;
    let confirmPass = group.controls.confirmPassword.value;

    return pass === confirmPass ? null : { notSame: true }
  }
}

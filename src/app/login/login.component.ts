import { Component, OnInit } from '@angular/core';
import {AuthentificationService} from '../services/authentification.service';
import {Router} from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  authStatus: boolean;

  constructor(private authservice: AuthentificationService, private router: Router) {
  }

  ngOnInit() {
    this.authStatus =this.authservice.isAuth;
  }

  onLogin(data) {
    this.authservice.login(data)
      .subscribe(resp => {
        this.authStatus = this.authservice.isAuth;
        console.log(this.authservice.isAuth)
          let jwt = resp.headers.get('Authorization');
          this.authservice.saveToken(jwt);
          this.router.navigateByUrl("/");
        }, err => {
          console.log(err)

      }
      )
  }
}

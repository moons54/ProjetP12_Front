import { Component, OnInit } from '@angular/core';
import {AuthentificationService} from '../services/authentification.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
  authStatus: boolean;


  constructor( private authService: AuthentificationService,
               private router: Router) { }

  ngOnInit() {
    this.authStatus = this.authService.isAuth;
  }

  onSignIn(data){
    this.authService.login(data).toPromise().then(
      () => {
        this.authStatus = this.authService.isAuth;
        this.router.navigate(['/credits/'])
      }
    )
  }

  onSignOff() {
    this.authService.logOut();
  //  this.authService = this.authService.isAuthenticated()
  }


}

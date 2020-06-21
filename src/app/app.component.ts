import {Component, OnInit} from '@angular/core';
import {$} from 'protractor';
import {AuthentificationService} from './services/authentification.service';
import {Router} from '@angular/router';
import {BilanService} from './services/bilan.service';
import {BilanComponent} from './bilan/bilan.component';
import {registerLocaleData} from '@angular/common';
import localeFr from '@angular/common/locales/fr';
import localeFrExtra from '@angular/common/locales/extra/fr';
registerLocaleData(localeFr, 'fr-FR', localeFrExtra);


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'creditdigital';


    constructor(private authService:AuthentificationService,
                private bilanService:BilanService,
                private router:Router){

  }
  ngOnInit(): void {
      this.authService.loadToken();
      this.router.navigate(['/accueil']);
  }

  isAdmin(){
    return this.authService.isAdmin();
  }

  isUser(){
    return this.authService.isUser();
  }

  isAuthenticated(){
      return this.authService.isAuthenticated();
  }

  logOut(){
      this.router.navigate(['/'])
      return this.authService.logOut();
  }

  getbilanbysiret(c){
    this.router.navigateByUrl("/result/"+c.numeroKbis)
    }



}

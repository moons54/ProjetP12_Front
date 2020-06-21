import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {JwtHelperService} from '@auth0/angular-jwt';
import {User} from '../models/user.model';
import {error} from 'selenium-webdriver';

@Injectable({
  providedIn: 'root'
})
export class AuthentificationService {

  host2:string="http://localhost:8080"
  jwt:string;
  username:string;
  roles:Array<string>
  isAuth = false;
  private role= [];
  //user= new User('','','','','','',
    //'','','','','');

  constructor(private http:HttpClient) {

  }
  login(data){
    this.isAuth = true;
    return this.http.post(this.host2+"/login",data,{observe:'response'})
  }


  saveToken(jwt: string) {
    localStorage.setItem('token',jwt);
    this.jwt=jwt;
    this.parseJWT();
  }

  private parseJWT() {
    let jwthelper=new JwtHelperService();
    let objJWT=jwthelper.decodeToken(this.jwt);
    this.username=objJWT.sub;
    this.roles=objJWT.role;
  }

  //Est authentifié admin
  isAdmin(){
    //if (this.roles.indexOf('Admin')==0){
    return this.roles
    // console.log(this.roles)

    //return this.roles;
  }

  //Est authentifié utilisateur
  isUser(){
    return this.roles.indexOf('User')>= 0;
  }

  //Est authentifié
  isAuthenticated(){
    return this.roles && (this.isAdmin() || this.isUser());
  }


  loadToken() {
    this.jwt=localStorage.getItem("token");
    this.parseJWT();
  }

  logOut() {
    localStorage.removeItem("token");
    this.initParams();
  }

  initParams(){
    //réinitialisation des paramêtres
    this.jwt=undefined;
    this.username=undefined;
    this.roles=undefined;
    this.isAuth = false;
  }


  getRole(id: number) {
    this.roles[id]
    console.log(this.roles)
  }

  signIn(user){
    return new Promise(
      (resolve, reject) => {
        this.http.post(this.host2+'/register',user,{observe: 'response'}).toPromise().then(
          () => {
            (resolve);
          },
          (error) => {
            reject(error);
          }
        );
      }
    );
  }
}

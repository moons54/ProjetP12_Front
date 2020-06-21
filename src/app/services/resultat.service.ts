import { Injectable } from '@angular/core';
import { Resultat } from '../models/resultat.model';
import {Subject} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {AuthentificationService} from './authentification.service';

@Injectable({
  providedIn: 'root'
})

@Injectable()
export class ResultatService {

  resultats: Resultat[] = [];
  resultatSubject = new Subject<Resultat[]>();
  public host: string = 'http://localhost:8087';


  constructor(private httpclient: HttpClient,
              private authentificationService: AuthentificationService) {
  }

  emitResultats() {
    this.resultatSubject.next(this.resultats);
  }

  getResultats() {
    let headers = new HttpHeaders({'Authorization': 'Bearer ' + this.authentificationService.jwt});
    this.httpclient.get(this.host + '/resultats', {headers: headers})
      .subscribe( (data) => {
          this.resultats = (<Resultat[]> data) ? (<Resultat[]> data) : [];
          this.emitResultats();
        },
        error1 => {
          console.log('probleme de chargement' +error1)
        }
      );
  }

  getSingleResultatBy(id: string) {
    let headers = new HttpHeaders({'Authorization': 'Bearer ' + this.authentificationService.jwt});
    return new Promise(
      (((resolve, reject) => {
            this.httpclient.get(this.host + '/resultats/' + id, {headers: headers}).toPromise().then(
              (data) => {
                resolve(data);
              },
              (error) => {
                reject(error);
              }
            );
          }
        )
      )
    )
  };

  getSingleSigByResultat(id: string) {
    let headers = new HttpHeaders({'Authorization': 'Bearer ' + this.authentificationService.jwt});
    return new Promise(
      (((resolve, reject) => {
            this.httpclient.get(this.host + '/resultats/' + id+'/soldeIntermediaireGestion/', {headers: headers}).toPromise().then(
              (data) => {
                resolve(data);
              },
              (error) => {
                reject(error);
              }
            );
          }
        )
      )
    )
  };
  //soldeIntermediaireGestion

  getSingleResultat(id: string){
    let headers = new HttpHeaders({'Authorization': 'Bearer ' + this.authentificationService.jwt});
    return new Promise(
      (((resolve, reject) => {
            this.httpclient.get(this.host + '/resultats/' + id, {headers: headers}).toPromise().then(
              (data) => {
                resolve(data);
              },
              (error) => {
                reject(error);
              }
            );
          }
        )
      )
    )
  }

}

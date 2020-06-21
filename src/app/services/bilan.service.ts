import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthentificationService } from './authentification.service';
import { Observable, Subject } from 'rxjs';
import { Bilan } from '../models/bilan.model';
import {reject, resolve} from 'q';


@Injectable({
  providedIn: 'root'
})

@Injectable()
export class BilanService {

  bilans: Bilan[] = [];
  bilanSubject = new Subject<Bilan[]>();

  public host: string = 'http://localhost:8087';

  emitBilans() {
    this.bilanSubject.next(this.bilans);
  };


  constructor(private httpclient: HttpClient, private authentificationService: AuthentificationService) {
  };


  getBilans() {
    let headers = new HttpHeaders({'Authorization': 'Bearer ' + this.authentificationService.jwt});
    this.httpclient.get(this.host + '/bilans', {headers: headers})
      .subscribe((data) => {
          this.bilans = (<Bilan[]> data) ? (<Bilan[]> data) : [];
          this.emitBilans();
        },
        (error1) => {
          console.log('probleme de chargement' + error1)
        }
        );
  };

  getBilanbyId(refdossier: string) {
    let headers = new HttpHeaders({'Authorization': 'Bearer ' + this.authentificationService.jwt});
    return new Promise(
      ((resolve, reject) => {
          this.httpclient.get(this.host + '/bilans/' + refdossier, {headers: headers}).toPromise().then(
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
  };


  getResultatBilanbyId(refdossier: string) {
    let headers = new HttpHeaders({'Authorization': 'Bearer ' + this.authentificationService.jwt});
    return new Promise(
      ((resolve, reject) => {
          this.httpclient.get(this.host + '/bilans/' + refdossier+ '/resultat/',{headers: headers}).toPromise().then(
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
  };


  getSigBilanbyId(refdossier: string) {
    let headers = new HttpHeaders({'Authorization': 'Bearer ' + this.authentificationService.jwt});
    return new Promise(
      ((resolve, reject) => {
          this.httpclient.get(this.host + '/bilans/' + refdossier+ '/resultat/',{headers: headers}).toPromise().then(
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
  };

  getRatiosBilanbyId(refdossier: string) {
    let headers = new HttpHeaders({'Authorization': 'Bearer ' + this.authentificationService.jwt});
    return new Promise(
      ((resolve, reject) => {
          this.httpclient.get(this.host + '/bilans/' + refdossier+ '/ratios/',{headers: headers}).toPromise().then(
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
  };
}

import { Injectable } from '@angular/core';
import {Edition} from '../models/edition.model';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {AuthentificationService} from './authentification.service';
import {Subject} from 'rxjs';
import {Decision} from '../models/decision.model';

@Injectable({
  providedIn: 'root'
})
export class EditionsService {

  editions : Edition[] = [];
  editionSubject = new Subject<Edition[]>()

  public host:string="http://localhost:8086";

  constructor(private httpClient: HttpClient,
              private authentificationService: AuthentificationService) {};

  emitEditions() {
    this.editionSubject.next(this.editions);
  };

  getEditions() {
    let headers = new HttpHeaders({'Authorization': 'Bearer ' + this.authentificationService.jwt});
    this.httpClient.get(this.host + '/editions/', {headers: headers})
      .subscribe( (data) => {
          this.editions = (<Edition[]> data) ? (<Edition[]> data) : [];
          this.emitEditions();
        },
        (error1 => {
            console.log('probleme de chargement '+error1);
          }
        )
      )
  }

  getEditionbyId(id: number) {
    let headers = new HttpHeaders({'Authorization': 'Bearer ' + this.authentificationService.jwt});
    return new Promise(
      ((resolve, reject) => {
          this.httpClient.get(this.host + '/editions/' + id).toPromise().then(
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

  saveEdition ( se: Edition) {
    let headers = new HttpHeaders({'Authorization': 'Bearer ' + this.authentificationService.jwt});
    this.editions.push(se);
    this.httpClient.post(this.host + '/edition/new/', se ,{ headers: headers })
      .subscribe(
        () => {
          console.log('donnée enregistrée')
        },
        (error1) => {
          console.log('erreur lors de sauvegarde' + error1)
        }
      );
  };

  createNewEdition ( newEdition: Edition){
    this.editions.push(newEdition);
    this.saveEdition(newEdition);
    this.emitEditions();
  };


}

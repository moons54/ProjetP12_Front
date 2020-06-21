import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {AuthentificationService} from './authentification.service';
import {Decision} from '../models/decision.model';
import {Subject} from 'rxjs';
import {promise} from 'selenium-webdriver';
import {reject, resolve} from 'q';



@Injectable({
  providedIn: 'root'
})
export class DecisionService {

  decisions : Decision[] = [];
  decisionSubject = new Subject<Decision[]>();


  public host:string="http://localhost:8086";

  constructor(private httpClient: HttpClient,
              private authentificationService: AuthentificationService) { };

  emitDecisions() {
    this.decisionSubject.next(this.decisions);
  }

  getDecisions(){
    let headers = new HttpHeaders({'Authorization': 'Bearer ' + this.authentificationService.jwt});
    this.httpClient.get(this.host + '/decisions/', {headers: headers})
      .subscribe( (data) => {
          this.decisions = (<Decision[]> data) ? (<Decision[]> data) : [];
          this.emitDecisions();
        },
        (error1 => {
            console.log('probleme de chargement '+error1);
          }
        )
      )
  }

  getDecisionbyId(id: number) {
    let headers = new HttpHeaders({'Authorization': 'Bearer ' + this.authentificationService.jwt});
    return new Promise(
      ((resolve, reject) => {
          this.httpClient.get(this.host + '/decisions/' + id).toPromise().then(
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
  }

  getAllDecisions() {
    let headers = new HttpHeaders({'Authorization': 'Bearer ' + this.authentificationService.jwt});
    return new Promise(
      ((resolve, reject) => {
          this.httpClient.get(this.host + '/decisions/').toPromise().then(
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

  saveDecision ( sd: Decision) {
    let headers = new HttpHeaders({'Authorization': 'Bearer ' + this.authentificationService.jwt});
    this.decisions.push(sd);
    this.httpClient.post(this.host + '/decision/new/', sd ,{ headers: headers })
      .subscribe(
        () => {
          console.log('donnée enregistrée')
        },
        (error1) => {
          console.log('erreur lors de sauvegarde' + error1)
        }
      );
  };

  updateDecision (decision: Decision) {
    let headers = new HttpHeaders({'Authorization': 'Bearer ' + this.authentificationService.jwt});
    this.decisions.push(decision);
    let h = new HttpHeaders({'Access-Control-Allow-Origin': '*'})

    this.httpClient.put(this.host+'/decision/update/',decision,{ headers: headers})
      .subscribe(
        () => {
          console.log("modification effectuée")
        },
        (error1) => {
          console.log('erreur lors de la modification'+error1)
        }
      );
  };



  createNewDecision ( newDecision: Decision){
    this.decisions.push(newDecision);
    this.saveDecision(newDecision);
    this.emitDecisions();
  };


}

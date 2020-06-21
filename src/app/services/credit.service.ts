import { Injectable } from '@angular/core';
import {HttpClient, HttpEvent, HttpHeaders, HttpRequest, HttpResponse} from '@angular/common/http';
import {Credit} from '../models/credit.model';
import { Observable, Subject} from 'rxjs';
import {AuthentificationService} from './authentification.service';
import * as Http from 'http';
import {reject, resolve} from 'q';
import {map} from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
@Injectable()
export class CreditService {

  credits : Credit[] = [];
  creditSubject = new Subject<Credit[]>();


  public host:string="http://localhost:8086";
  public host2: string= 'http://localhost:8087';

  constructor(private httpClient: HttpClient,
              private  authentificationService: AuthentificationService) { };

  emitCredits() {
    this.creditSubject.next(this.credits);
  };

  getCredits() {
    let headers = new HttpHeaders({'Authorization': 'Bearer ' + this.authentificationService.jwt});
    this.httpClient.get(this.host + '/credits/', {headers: headers})
      .subscribe((data) => {
          this.credits = (<Credit[]> data) ? (<Credit[]> data) : [];
          this.emitCredits();
        },
        (error1 => {
            console.log('probleme de chargement'+error1);
          }
        )
      )
  };

  getlistcredits() {

    let headers = new HttpHeaders({'Authorization': 'Bearer ' + this.authentificationService.jwt});
    return this.httpClient.get(this.host + '/credits', {headers: headers})
      .toPromise().then(
        (data) => {
          resolve(data)
        },
        (error) => {
          reject(error);
        }
      );
  };

  getCreditbyId(id: number) {
    let headers = new HttpHeaders({'Authorization': 'Bearer ' + this.authentificationService.jwt});
    return new Promise(
      ((resolve, reject) => {
          this.httpClient.get(this.host + '/credits/' + id).toPromise().then(
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

  getCreditByref(ref: string){
    let headers = new HttpHeaders({'Authorization': 'Bearer ' + this.authentificationService.jwt});
    return new Promise(
      ((resolve, reject) => {
          this.httpClient.get(this.host + '/credits/' + ref).toPromise().then(
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

  getAllCredits(): Observable<Credit[]> {
    return this.httpClient.get<Credit[]>(this.host+"/credits");
  };

  createCredit(cr: Credit) {
    let headers = new HttpHeaders({'Authorization': 'Bearer ' + this.authentificationService.jwt});
    let h = new HttpHeaders({'Access-Control-Allow-Origin': '*'})

    console.log(cr)
    this.httpClient.post<Credit[]>(this.host+'/credit/new/',cr,{ headers: headers }).subscribe(
      () => {
        console.log('ok')
      },
      (error1) => {
        console.log('ko'+error1);
      }
    );
  };

  getRessources(url){
    return this.httpClient.get(url);
  };

  saveCredit( cr: Credit) {
    let headers = new HttpHeaders({'Authorization': 'Bearer ' + this.authentificationService.jwt});

    this.credits.push(cr);
    let h = new HttpHeaders({'Access-Control-Allow-Origin': '*'})
    this.httpClient.post(this.host + '/credit/new/', cr ,{ headers: headers })
      .subscribe(
        () => {
          console.log('donnée enregistrée')
        },
        (error1) => {
          console.log('erreur lors de sauvegarde' + error1)
        }
      );
  };

  createNewCredit( newCredit: Credit) {
    this.credits.push(newCredit);
    this.saveCredit(newCredit);
    this.emitCredits();
  };

  removeCredit(credit: Credit) {
    const creditIndexToRemove = this.credits.findIndex(
      (creditEl) => {
        if (creditEl === credit) {
          return true;
        }
      }
    );
    this.credits.splice(creditIndexToRemove,1);
    this.emitCredits();
  }

  deletCreditSingle(id: any) {
    let headers = new HttpHeaders({'Authorization': 'Bearer ' + this.authentificationService.jwt});
    console.log(id)
    return this.httpClient.delete(this.host+'/credit/'+id);
  }

  deleteCredits(ids :any[]) {
    const allids = ids.join(',');
    return this.httpClient.delete(this.host+'/credit/'+ids)
  }

  uploadJustificatif(file : File, referenceDossier): Observable<HttpEvent<{}>> {
    let formdata : FormData = new FormData();
    formdata.append('file',file);
    const req = new HttpRequest('POST',this.host2+'/upload/'+referenceDossier,formdata, {
      reportProgress: true,
      responseType: 'text',
      headers: new HttpHeaders({'Authorization': 'Bearer ' + this.authentificationService.jwt})
    });
    return this.httpClient.request(req);
  }

  workOcr(referenceDossier): Observable<HttpEvent<{}>> {
    const req = new HttpRequest('GET',this.host2+'/analysedoc/'+referenceDossier,{
      headers: new HttpHeaders({'Authorization': 'Bearer ' + this.authentificationService.jwt})
    });
    return this.httpClient.request(req);
  }
}

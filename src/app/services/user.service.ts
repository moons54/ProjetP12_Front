import {Injectable} from '@angular/core';
import {User} from '../models/user.model';
import {Subject} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {AuthentificationService} from './authentification.service';


@Injectable({
  providedIn: 'root'
})


@Injectable()
export class UserService {

  users: User[] = [];
  userSubject = new Subject<User[]>();
  public host: string = 'http://localhost:8080';

  constructor(private httpclient: HttpClient,
              private authentificationService: AuthentificationService) {
  }

  emitUsuers() {
    this.userSubject.next(this.users);
  }

  getUsers() {
    let headers = new HttpHeaders({'Authorization': 'Bearer ' + this.authentificationService.jwt});
    this.httpclient.get(this.host + '/users', {headers: headers})
      .subscribe( (data) => {
          this.users = (<User[]> data) ? (<User[]> data) : [];
          this.emitUsuers();
        },
        error1 => {
          console.log('problème de chargement' +error1)
        }
      );
  }

  getSingleUserBy(id: string) {
    let headers = new HttpHeaders({'Authorization': 'Bearer ' + this.authentificationService.jwt});
    return new Promise(
      (((resolve, reject) => {
            this.httpclient.get(this.host + '/users/' + id, {headers: headers}).toPromise().then(
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

  getUserByiD(id: number){
     const user = this.users.find(
      (s) => {
        return s.id == id;
      }
    );
     return user
  }


}


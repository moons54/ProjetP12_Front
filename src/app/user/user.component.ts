import {Component, OnDestroy, OnInit} from '@angular/core';
import {User} from '../models/user.model';
import {Subscription} from 'rxjs';
import {CreditService} from '../services/credit.service';
import {Router} from '@angular/router';
import {UserService} from '../services/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit, OnDestroy {

  users: User[] = [];
  userSubscription: Subscription;

  constructor(private userService: UserService,
              private router: Router) { }

  ngOnInit() {

    this.userSubscription = this.userService.userSubject
      .subscribe(
        (users : User[]) => {
          this.users = users;
        }
      )
    this.userService.getUsers();
    this.userService.emitUsuers();
  }

  ngOnDestroy() {
    this.userSubscription.unsubscribe();
  }


  onViewUser(id: any) {
    this.router.navigate(["user/",id]);
  }
}

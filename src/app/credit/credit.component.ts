import {Component, OnDestroy, OnInit} from '@angular/core';
import {CreditService} from '../services/credit.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Credit} from '../models/credit.model';
import {Observable, Subscription} from 'rxjs';
import {Decision} from '../models/decision.model';

@Component({
  selector: 'app-credit',
  templateUrl: './credit.component.html',
  styleUrls: ['./credit.component.css']
})
export class CreditComponent implements OnInit, OnDestroy {

  credits: Credit[] = [];
  decisions: Decision[]= [];
  allcredits: Credit[];
  creditSubscription: Subscription;

  constructor(private credService: CreditService,
              private router: Router) { }


  ngOnInit() {

    this.creditSubscription = this.credService.creditSubject
      .subscribe(
        (credits : Credit[]) => {
          this.credits = credits;
        }
      );
    this.credService.getCredits();
  this.credService.emitCredits()



  }

  onViewCredit(id: Number) {
    this.router.navigate(['credits/',id]);
  }

  ngOnDestroy() {
  //  this.creditSubscription.unsubscribe();
  }

  onNewCredit() {
    this.router.navigate(['credit/', 'new']);
  }


  onDeletecredit(credit: Credit) {
    this.credService.removeCredit(credit);
    this.router.navigate(['/credits']);
  }

  deleteCredit(selectedOptions) {
    const ids = selectedOptions.map(data => data.value);
    if (ids.length === 1) {
      this.credService
        .deletCreditSingle(ids[0])
        .subscribe(
          data => console.log(data),
          error1 => console.log(error1)
        );
    } else {
      return this.credService.deleteCredits(ids).subscribe(
        data => console.log(data),
        error1 => console.log(error1))
    }
  };

  onUpdateDecision(id: number,refdossier: string) {
    this.router.navigate(['collaborateur',id,refdossier]);
  }
}

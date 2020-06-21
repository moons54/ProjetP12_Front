import {Component, OnDestroy, OnInit} from '@angular/core';
import {Edition} from '../models/edition.model';
import {Subscription} from 'rxjs';
import {EditionsService} from '../services/editions.service';
import {Router} from '@angular/router';
import {Credit} from '../models/credit.model';
import {Decision} from '../models/decision.model';
import {CreditService} from '../services/credit.service';
import {DecisionService} from '../services/decision.service';

@Component({
  selector: 'app-edition',
  templateUrl: './edition.component.html',
  styleUrls: ['./edition.component.css']
})
export class EditionComponent implements OnInit, OnDestroy {

  editions: Edition[];
  editionSubscription: Subscription;

  credits: Credit[] = [];
  decisions: Decision[] = [];
  decisionSubscription: Subscription;

  allcredits: Credit[];
  creditSubscription: Subscription;


  constructor(private editionService: EditionsService,
              private creditService: CreditService,
              private decisionService: DecisionService,
              private router: Router) { }

  ngOnInit() {
    this.creditSubscription = this.creditService.creditSubject
      .subscribe(
        (credits : Credit[]) => {
          this.credits = credits;
          this.decisionSubscription = this.decisionService.decisionSubject
            .subscribe(
              (decisions: Decision[]) => {
                this.decisions = decisions;
                this.editionSubscription = this.editionService.editionSubject
                  .subscribe(
                    (editions: Edition[]) => {
                      this.editions = editions;
                    }
                  )
              }
            )
        }
      );
    this.creditService.getCredits();
    this.creditService.emitCredits()

    this.decisionService.getDecisions();
    this.decisionService.emitDecisions();

    this.editionService.getEditions();
    this.editionService.emitEditions();
  };

  onViewEdition(id: number, refedition: any) {
    this.router.navigate(['edition/',id,refedition]);
  };

  ngOnDestroy() {
    this.editionSubscription.unsubscribe();
    this.creditSubscription.unsubscribe();
    this.decisionSubscription.unsubscribe();
  };

  onNewEdition() {
    this.router.navigate(['editions/new'])
  };

}

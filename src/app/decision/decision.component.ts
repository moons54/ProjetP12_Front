import {Component, OnDestroy, OnInit} from '@angular/core';
import {Decision} from '../models/decision.model';
import {Subscription} from 'rxjs';
import {DecisionService} from '../services/decision.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-decision',
  templateUrl: './decision.component.html',
  styleUrls: ['./decision.component.css']
})
export class DecisionComponent implements OnInit, OnDestroy {

  decisions: Decision[];
  decisionSubscription: Subscription;

  constructor(private decisionService: DecisionService,
              private router: Router) { }

  ngOnInit() {
    this.decisionSubscription = this.decisionService.decisionSubject
      .subscribe(
        (decisions : Decision[]) => {
          this.decisions = decisions;
        }
      );
    this.decisionService.getDecisions();
    this.decisionService.emitDecisions();

  };

  onViewDecision(id: number) {
    this.router.navigate(["decisions/",id]);
  };

  ngOnDestroy() {
    this.decisionSubscription.unsubscribe();
  };

  onNewDecision() {
    this.router.navigate(['decision/new'])
  };
}

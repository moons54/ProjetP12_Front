import { Component, OnInit } from '@angular/core';
import {Decision} from '../../models/decision.model';
import {DecisionService} from '../../services/decision.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-single-decision',
  templateUrl: './single-decision.component.html',
  styleUrls: ['./single-decision.component.css']
})
export class SingleDecisionComponent implements OnInit {

  decision$: Decision;

  constructor(private decisionService: DecisionService,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.decision$ = new Decision('', '', '','',null);
    const id = this.route.snapshot.paramMap.get('id');
    this.decisionService.getDecisionbyId(+id).then(
      (decision: Decision) => {
        this.decision$ = decision;
      }
    );
  };

  onBack() {
    this.router.navigate(['decisions'])
  }


}

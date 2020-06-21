import { Component, OnInit } from '@angular/core';
import {Credit} from '../../models/credit.model';
import {CreditService} from '../../services/credit.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Decision} from '../../models/decision.model';

@Component({
  selector: 'app-single-credit',
  templateUrl: './single-credit.component.html',
  styleUrls: ['./single-credit.component.css']
})
export class SingleCreditComponent implements OnInit {

  credit$: Credit;
  decision: Decision;


  constructor(private creditService: CreditService,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.credit$ = new Credit(null,'','','','','','','','','','',null);
    const id = this.route.snapshot.paramMap.get('id');
    this.creditService.getCreditbyId(+id).then(
      (credit: Credit) => {
        this.credit$ = credit;

      }
    );
  };

  onBack() {
    this.router.navigate(['credits']);
  }
}

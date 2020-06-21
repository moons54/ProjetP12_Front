import { Component, OnInit } from '@angular/core';
import {Credit} from '../../models/credit.model';
import {CreditService} from '../../services/credit.service';
import {Router} from '@angular/router';
import {Decision} from '../../models/decision.model';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-pie-credit',
  templateUrl: './pie-credit.component.html',
  styleUrls: ['./pie-credit.component.css']
})
export class PieCreditComponent implements OnInit {

  credits: Credit[] = [];
  decisions: Decision[]= [];
  allcredits: Credit[]= [];
  creditSubscription: Subscription;
  data: any;
  dossier: any;
  totalDossier: number= undefined;

  constructor(private credService: CreditService,
              private router: Router) {
  }


  ngOnInit() {
    this.creditSubscription = this.credService.creditSubject
      .subscribe(
        (credits : Credit[]) => {
          this.credits = credits;
         this.dossier = this.getDossier('accepté').length
          const pretpro = this.getDossier('en attente').length
          console.log(this.dossier),
            console.log(pretpro),
          this.data = {
            labels: ['Dossier Accepte','Dossier en cours ','Dossier refusé'],
            datasets: [
              {
                data: [this.dossier, pretpro, 1],
                backgroundColor: [
                  "#FF6384",
                  "#36A2EB",
                  "#FFCE56"
                ],
                hoverBackgroundColor: [
                  "#FF6384",
                  "#36A2EB",
                  "#FFCE56"
                ]
              }]
          };
        }
      );
    this.credService.getCredits();
    this.credService.emitCredits()
  }


  getDossier(nature: string) {
    console.log(this.credits)
    this.allcredits = this.credits.filter(
      (s) => {
        return s.decision.statuts == nature;
      }
    );
    return this.allcredits;
  }
}

import {Component, OnDestroy, OnInit} from '@angular/core';
import {BilanService} from '../services/bilan.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Observable, Subscription} from 'rxjs';
import {Bilan} from '../models/bilan.model';


@Component({
  selector: 'app-collaborateur-bilan',
  templateUrl: './collaborateur-bilan.component.html',
  styleUrls: ['./collaborateur-bilan.component.css']
})
export class CollaborateurBilanComponent implements OnInit, OnDestroy {

  bilans: Bilan[] = [];
  bilanSubscription: Subscription;
  constructor(private bilanService: BilanService,
              private router: Router) { }

  ngOnInit() {
    this.bilanSubscription = this.bilanService.bilanSubject.subscribe(
      (bilans: Bilan[]) => {
        this.bilans = bilans;
      }
    );
    this.bilanService.getBilans();
    this.bilanService.emitBilans();
  }
  ngOnDestroy() {
    this.bilanSubscription.unsubscribe();
  }

  onViewBilan(id: string) {
    this.router.navigate(['/bilans/', id]);
  }

}

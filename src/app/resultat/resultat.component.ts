import {Component, OnDestroy, OnInit} from '@angular/core';
import {Resultat} from '../models/resultat.model';
import {Subscription} from 'rxjs';
import {ResultatService} from '../services/resultat.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-resultat',
  templateUrl: './resultat.component.html',
  styleUrls: ['./resultat.component.css']
})
export class ResultatComponent implements OnInit, OnDestroy {

  resultats: Resultat[] =[];
  resultatSubscription: Subscription;

  constructor(private resultatService: ResultatService,
              private router: Router) { }

  ngOnInit() {
    this.resultatSubscription = this.resultatService.resultatSubject.subscribe(
      (resultats: Resultat[]) => {
        this.resultats =resultats;
      }
    );
    this.resultatService.getResultats();
    this.resultatService.emitResultats();
  }

  ngOnDestroy() {
    this.resultatSubscription.unsubscribe();
  }

  onViewResultat(id: string) {
    this.router.navigate(['resultats/',id]);
  }

}

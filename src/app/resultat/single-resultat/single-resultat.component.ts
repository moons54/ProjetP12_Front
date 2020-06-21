import {Component, Input, OnInit} from '@angular/core';
import {Resultat} from '../../models/resultat.model';
import {ResultatService} from '../../services/resultat.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Bilan} from '../../models/bilan.model';

@Component({
  selector: 'app-single-resultat',
  templateUrl: './single-resultat.component.html',
  styleUrls: ['./single-resultat.component.css']
})
export class SingleResultatComponent implements OnInit {

  //resultat$: Resultat;
  @Input() resultatid;
  @Input() resultat$: Resultat;


  constructor(private resultatService: ResultatService,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit() {

    this.resultat$ = new Resultat(
      '','','','',
      '','','','',
      '','','','',
      '','','','','',
      '','','','','',null
    );
   // const id = this.route.snapshot.paramMap.get('resultatid');

    console.log(this.resultat$);

   /* this.resultatService.getSingleResultat(this.resultatid).then(
      (resultat: Resultat) => {
        this.resultat$ = resultat;
      }
    );*/
  };

  onBack() {
    this.router.navigate(['/resultats']);
  }
}


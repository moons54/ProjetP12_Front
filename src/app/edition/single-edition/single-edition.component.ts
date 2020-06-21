import { Component, OnInit } from '@angular/core';
import {Edition} from '../../models/edition.model';
import {EditionsService} from '../../services/editions.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-single-edition',
  templateUrl: './single-edition.component.html',
  styleUrls: ['./single-edition.component.css']
})
export class SingleEditionComponent implements OnInit {

  edition$: Edition;

  constructor(private editionService: EditionsService,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.edition$ = new Edition('','','','','');
    const id = this.route.snapshot.paramMap.get('refedition');
    this.editionService.getEditionbyId(+id).then(
      (edition : Edition) => {
        this.edition$ = edition;
      }
    );
  };

  onBack() {
    this.router.navigate(['editions'])
  }
}

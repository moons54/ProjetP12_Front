import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BilanService } from '../services/bilan.service';
import { ActivatedRoute, Router } from '@angular/router';
import {Bilan} from '../models/bilan.model';

@Component({
  selector: 'app-bilan',
  templateUrl: './bilan.component.html',
  styleUrls: ['./bilan.component.css']
})
export class BilanComponent implements OnInit {


  bilan: Bilan;



  constructor(private bilanService: BilanService,
              private router: Router,
              private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.bilan = new Bilan('',
      '',
      '',
      '',
      '',
      '',
      '',
      '','',
      '',
      '',
      '',
      '',
      '',
      '','','','',null);
    const id = this.route.snapshot.paramMap.get('refdossier');
    this.bilanService.getBilanbyId(id).then(
      (bilan: Bilan) => {
        this.bilan = bilan;
        console.log(this.bilan)
      }
    );
  }

  onBack() {
    this.router.navigate(['/bilans']);
  }

}

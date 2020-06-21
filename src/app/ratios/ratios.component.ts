import {Component, Input, OnInit} from '@angular/core';
import { Ratios } from '../models/Ratios.model'
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-ratios',
  templateUrl: './ratios.component.html',
  styleUrls: ['./ratios.component.css']
})
export class RatiosComponent implements OnInit {

  @Input() ratios: Ratios;

  constructor() { }

  ngOnInit() {
    this.ratios = new Ratios('', ''
      , '', '',
      '', '',
      '', '')
  }


}

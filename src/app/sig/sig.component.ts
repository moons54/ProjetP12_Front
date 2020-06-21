import {Component, Input, OnInit} from '@angular/core';
import {Sig} from '../models/sig.model';

@Component({
  selector: 'app-sig',
  templateUrl: './sig.component.html',
  styleUrls: ['./sig.component.css']
})
export class SigComponent implements OnInit {

  @Input() sig: Sig;

  constructor() { }

  ngOnInit() {
    this.sig = new Sig('',
      '','',
      '','',
      '','',
      '','',
      '','')
  }

}

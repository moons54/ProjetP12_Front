import {Component, Input, OnInit} from '@angular/core';
import {FormGroup} from '@angular/forms';

@Component({
  selector: 'app-info-credit',
  templateUrl: './info-credit.component.html',
  styleUrls: ['./info-credit.component.css']
})
export class InfoCreditComponent implements OnInit {

  @Input() creditForm: FormGroup;
  @Input() isOn: boolean;

  constructor() { }

  ngOnInit() {

  }

}

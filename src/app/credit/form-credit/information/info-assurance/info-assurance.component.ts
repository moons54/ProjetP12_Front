import {Component, Input, OnInit} from '@angular/core';
import {FormGroup} from '@angular/forms';

@Component({
  selector: 'app-info-assurance',
  templateUrl: './info-assurance.component.html',
  styleUrls: ['./info-assurance.component.css']
})
export class InfoAssuranceComponent implements OnInit {

  @Input() creditForm: FormGroup;

  constructor() { }

  ngOnInit() {
  }

}

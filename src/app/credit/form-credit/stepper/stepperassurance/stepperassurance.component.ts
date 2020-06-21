import {Component, Input, OnInit} from '@angular/core';
import {FormGroup} from '@angular/forms';

@Component({
  selector: 'app-stepperassurance',
  templateUrl: './stepperassurance.component.html',
  styleUrls: ['./stepperassurance.component.css']
})
export class StepperassuranceComponent implements OnInit {

  @Input() creditform: FormGroup;
  @Input() isOn: Boolean;

  constructor() { }
  private assurances = [{value: 'deces', viewValue: 'Couverture Décés'},
    {value: 'dcptia',viewValue: 'Couverture Décés et invalidité'},
    {value: 'dcptiait',viewValue: 'Couverture Décés et invalidité et interuption de travail'},
    {value: 'non',viewValue: 'sans assurance'},
  ];

  ngOnInit() {
  }

  step2Submitted(){
  }

}

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StepperdetailComponent } from './stepperdetail.component';

describe('StepperdetailComponent', () => {
  let component: StepperdetailComponent;
  let fixture: ComponentFixture<StepperdetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StepperdetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StepperdetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

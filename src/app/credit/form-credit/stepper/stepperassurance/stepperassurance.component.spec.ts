import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StepperassuranceComponent } from './stepperassurance.component';

describe('StepperassuranceComponent', () => {
  let component: StepperassuranceComponent;
  let fixture: ComponentFixture<StepperassuranceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StepperassuranceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StepperassuranceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StepperreccapComponent } from './stepperreccap.component';

describe('StepperreccapComponent', () => {
  let component: StepperreccapComponent;
  let fixture: ComponentFixture<StepperreccapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StepperreccapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StepperreccapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleCreditComponent } from './single-credit.component';

describe('SingleCreditComponent', () => {
  let component: SingleCreditComponent;
  let fixture: ComponentFixture<SingleCreditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SingleCreditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleCreditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

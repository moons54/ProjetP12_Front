import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormCreditComponent } from './form-credit.component';

describe('FormCreditComponent', () => {
  let component: FormCreditComponent;
  let fixture: ComponentFixture<FormCreditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormCreditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormCreditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

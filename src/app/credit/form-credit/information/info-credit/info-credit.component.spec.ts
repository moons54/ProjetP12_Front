import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoCreditComponent } from './info-credit.component';

describe('InfoCreditComponent', () => {
  let component: InfoCreditComponent;
  let fixture: ComponentFixture<InfoCreditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfoCreditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoCreditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

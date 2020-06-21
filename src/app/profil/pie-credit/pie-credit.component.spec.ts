import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PieCreditComponent } from './pie-credit.component';

describe('PieCreditComponent', () => {
  let component: PieCreditComponent;
  let fixture: ComponentFixture<PieCreditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PieCreditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PieCreditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

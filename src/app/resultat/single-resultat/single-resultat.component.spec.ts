import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleResultatComponent } from './single-resultat.component';

describe('SingleResultatComponent', () => {
  let component: SingleResultatComponent;
  let fixture: ComponentFixture<SingleResultatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SingleResultatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleResultatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

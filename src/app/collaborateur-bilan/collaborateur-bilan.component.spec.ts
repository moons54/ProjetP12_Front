import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CollaborateurBilanComponent } from './collaborateur-bilan.component';

describe('CollaborateurBilanComponent', () => {
  let component: CollaborateurBilanComponent;
  let fixture: ComponentFixture<CollaborateurBilanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CollaborateurBilanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CollaborateurBilanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

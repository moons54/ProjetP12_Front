import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoAssuranceComponent } from './info-assurance.component';

describe('InfoAssuranceComponent', () => {
  let component: InfoAssuranceComponent;
  let fixture: ComponentFixture<InfoAssuranceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfoAssuranceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoAssuranceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

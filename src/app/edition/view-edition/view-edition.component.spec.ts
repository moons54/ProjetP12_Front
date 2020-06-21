import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewEditionComponent } from './view-edition.component';

describe('ViewEditionComponent', () => {
  let component: ViewEditionComponent;
  let fixture: ComponentFixture<ViewEditionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewEditionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewEditionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleEditionComponent } from './single-edition.component';

describe('SingleEditionComponent', () => {
  let component: SingleEditionComponent;
  let fixture: ComponentFixture<SingleEditionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SingleEditionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleEditionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

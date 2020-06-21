import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateEditionComponent } from './update-edition.component';

describe('UpdateEditionComponent', () => {
  let component: UpdateEditionComponent;
  let fixture: ComponentFixture<UpdateEditionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateEditionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateEditionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

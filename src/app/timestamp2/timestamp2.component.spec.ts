import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Timestamp2Component } from './timestamp2.component';

describe('Timestamp2Component', () => {
  let component: Timestamp2Component;
  let fixture: ComponentFixture<Timestamp2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Timestamp2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Timestamp2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

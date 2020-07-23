import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Timestamp1Component } from './timestamp1.component';

describe('Timestamp1Component', () => {
  let component: Timestamp1Component;
  let fixture: ComponentFixture<Timestamp1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Timestamp1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Timestamp1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

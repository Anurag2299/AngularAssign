import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Countdown2Component } from './countdown2.component';

describe('Countdown2Component', () => {
  let component: Countdown2Component;
  let fixture: ComponentFixture<Countdown2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Countdown2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Countdown2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

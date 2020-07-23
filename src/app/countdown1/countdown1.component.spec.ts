import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Countdown1Component } from './countdown1.component';

describe('Countdown1Component', () => {
  let component: Countdown1Component;
  let fixture: ComponentFixture<Countdown1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Countdown1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Countdown1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

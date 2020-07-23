import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Inputlimit2Component } from './inputlimit2.component';

describe('Inputlimit2Component', () => {
  let component: Inputlimit2Component;
  let fixture: ComponentFixture<Inputlimit2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Inputlimit2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Inputlimit2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

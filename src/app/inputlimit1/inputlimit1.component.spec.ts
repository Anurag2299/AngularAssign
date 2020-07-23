import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Inputlimit1Component } from './inputlimit1.component';

describe('Inputlimit1Component', () => {
  let component: Inputlimit1Component;
  let fixture: ComponentFixture<Inputlimit1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Inputlimit1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Inputlimit1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

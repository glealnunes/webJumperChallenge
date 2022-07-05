/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CalcasComponent } from './calcas.component';

describe('CalcasComponent', () => {
  let component: CalcasComponent;
  let fixture: ComponentFixture<CalcasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalcasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalcasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

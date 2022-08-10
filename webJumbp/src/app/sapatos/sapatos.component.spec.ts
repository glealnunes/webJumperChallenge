/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SapatosComponent } from './sapatos.component';

describe('SapatosComponent', () => {
  let component: SapatosComponent;
  let fixture: ComponentFixture<SapatosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SapatosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SapatosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

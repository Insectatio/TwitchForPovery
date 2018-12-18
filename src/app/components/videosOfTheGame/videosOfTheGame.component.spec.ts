/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { VideosOfTheGameComponent } from './videosOfTheGame.component';

describe('VideosOfTheGameComponent', () => {
  let component: VideosOfTheGameComponent;
  let fixture: ComponentFixture<VideosOfTheGameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VideosOfTheGameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VideosOfTheGameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BarsComponent } from './bars.component';

describe('BarsComponent', () => {

  let component: BarsComponent;
  let fixture: ComponentFixture<BarsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      declarations: [BarsComponent]
    });
    fixture = TestBed.createComponent(BarsComponent);
    component = fixture.componentInstance;
  });

  it('can load instance', () => {
    expect(component).toBeTruthy();
  });
});

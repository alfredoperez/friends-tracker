import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GradientComponent } from './gradient.component';

describe('GradientComponent', () => {

  let component: GradientComponent;
  let fixture: ComponentFixture<GradientComponent>;

  beforeEach(() => {

    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      declarations: [GradientComponent]
    });
    fixture = TestBed.createComponent(GradientComponent);
    component = fixture.componentInstance;
  });

  it('should load instance', () => {
    expect(component).toBeTruthy();
  });

  describe('ngOnChanges', () => {

    it('should make expected calls', () => {
      jest.spyOn(component, 'updateColorStops').mockImplementation();
      component.ngOnChanges();
      expect(component.updateColorStops).toHaveBeenCalled();
    });
  });
});

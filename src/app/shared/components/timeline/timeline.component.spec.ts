import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TimelineComponent } from './timeline.component';

describe('TimelineComponent', () => {

  let component: TimelineComponent;
  let fixture: ComponentFixture<TimelineComponent>;

  beforeEach(() => {

    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      declarations: [TimelineComponent],
      providers: []
    });
    fixture = TestBed.createComponent(TimelineComponent);
    component = fixture.componentInstance;
  });

  it('should load instance', () => {
    expect(component).toBeTruthy();
  });

  it(`should assign default values to gradientColors`, () => {
    expect(component.gradientColors).toEqual([`rgb(226, 222, 243)`, `#f8f9fa`]);
  });

  describe('ngOnChanges', () => {
    it('should make expected calls', () => {
      jest.spyOn(component, 'updateScales').mockReturnValue();
      component.ngOnChanges();
      expect(component.updateScales).toHaveBeenCalled();
    });
  });

  describe('windowResize', () => {
    it('should make expected calls', () => {
      jest.spyOn(component, 'updateDimensions').mockReturnValue();
      component.windowResize();
      expect(component.updateDimensions).toHaveBeenCalled();
    });
  });
  describe('updateDimensions', () => {
    it('should make expected calls', () => {
      jest.spyOn(component, 'updateScales').mockReturnValue();
      component.updateDimensions();
      expect(component.updateScales).toHaveBeenCalled();
    });
  });
  describe('ngAfterContentInit', () => {
    it('should make expected calls', () => {
      jest.spyOn(component, 'updateDimensions').mockReturnValue();
      component.ngAfterContentInit();
      expect(component.updateDimensions).toHaveBeenCalled();
    });
  });
});

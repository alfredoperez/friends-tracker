import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LineComponent } from './line.component';

describe('LineComponent', () => {

  let component: LineComponent;
  let fixture: ComponentFixture<LineComponent>;

  beforeEach(() => {

    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      declarations: [LineComponent],
    });
    fixture = TestBed.createComponent(LineComponent);
    component = fixture.componentInstance;
  });

  it('should load instance', () => {
    expect(component).toBeTruthy();
  });

  it(`should have a default value for type `, () => {
    expect(component.type).toEqual(`line`);
  });

  describe('ngOnChanges', () => {
    it('should make expected calls', () => {
      jest.spyOn(component, 'updateLineString').mockImplementation();
      component.ngOnChanges();
      expect(component.updateLineString).toHaveBeenCalled();
    });
  });
});

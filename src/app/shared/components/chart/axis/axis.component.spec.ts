import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AxisComponent } from './axis.component';

describe('AxisComponent', () => {

  let component: AxisComponent;
  let fixture: ComponentFixture<AxisComponent>;

  beforeEach(() => {

    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      declarations: [AxisComponent]
    });
    fixture = TestBed.createComponent(AxisComponent);
    component = fixture.componentInstance;
  });

  it('should load instance', () => {
    expect(component).toBeTruthy();
  });

  it(`dimension has default value`, () => {
    expect(component.dimension).toEqual(`x`);
  });

  describe('ngOnChanges', () => {
    it('should make expected calls', () => {

      jest.spyOn(component, 'updateTicks').mockImplementation();
      component.ngOnChanges();
      expect(component.updateTicks).toHaveBeenCalled();
    });
  });
});

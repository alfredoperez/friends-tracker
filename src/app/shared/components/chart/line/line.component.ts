import { Component, Input, OnChanges } from '@angular/core';
import * as d3 from 'd3';
import { AccessorType } from '../chart.models';

@Component({
  selector: '[appLine]',
  template: `
    <svg:path
      [ngClass]="type"
      [attr.d]="lineString"
      [style.fill]="fill"
    ></svg:path>
  `,
  styleUrls: ['./line.component.scss'],
})
export class LineComponent implements OnChanges {
  @Input() type: 'area' | 'line' = 'line';
  @Input() data: object[];
  @Input() xAccessor: AccessorType;
  @Input() yAccessor: AccessorType;
  @Input() y0Accessor?: AccessorType;
  @Input() interpolation?: Function = d3.curveMonotoneX;
  @Input() fill?: string;

  public lineString: '';

  updateLineString(): void {
    const lineGenerator = d3[this.type]()
      .x(this.xAccessor)
      .y(this.yAccessor)
      .curve(this.interpolation);

    if (this.type === 'area') {
      lineGenerator.y0(this.y0Accessor).y1(this.yAccessor);
    }

    this.lineString = lineGenerator(this.data);
  }

  ngOnChanges(): void {
    this.updateLineString();
  }
}

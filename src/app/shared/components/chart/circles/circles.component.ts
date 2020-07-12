import { Component, Input } from '@angular/core';
import { AccessorType } from '../chart.models';

@Component({
  selector: '[appCircles]',
  template: `
    <svg:circle
      *ngFor="let circle of data; trackBy: keyAccessor"
      [attr.cx]="xAccessor(circle, $index)"
      [attr.cy]="yAccessor(circle, $index)"
      [attr.r]="radius"
    ></svg:circle>
  `,
  styleUrls: ['./circles.component.scss'],
})
export class CirclesComponent {
  @Input() data: object[];
  @Input() keyAccessor: AccessorType;
  @Input() xAccessor: AccessorType;
  @Input() yAccessor: AccessorType;
  @Input() radius = 5;
}

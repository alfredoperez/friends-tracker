import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AxisComponent } from './axis/axis.component';
import { BarsComponent } from './bars/bars.component';
import { ChartComponent } from './chart.component';
import { CirclesComponent } from './circles/circles.component';
import { GradientComponent } from './gradient/gradient.component';
import { LineComponent } from './line/line.component';

const COMPONENTS = [
  ChartComponent,
  AxisComponent,
  BarsComponent,
  CirclesComponent,
  GradientComponent,
  LineComponent
];

@NgModule({
  declarations: [...COMPONENTS],
  exports: [...COMPONENTS],
  imports: [
    CommonModule
  ]
})
export class ChartModule {
}

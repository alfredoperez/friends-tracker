import { Component, Input } from '@angular/core';
import { DimensionsType } from './chart.models';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})
export class ChartComponent {
  @Input() dimensions: DimensionsType;
}

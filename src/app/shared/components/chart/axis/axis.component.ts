import { Component, Input, OnChanges } from '@angular/core';
import * as d3 from 'd3';
import { DimensionsType, ScaleType } from '../chart.models';

@Component({
  selector: '[appAxis]',
  templateUrl: './axis.component.html',
  styleUrls: ['./axis.component.scss']
})
export class AxisComponent implements OnChanges {
  @Input() dimensions: DimensionsType;
  @Input() dimension: 'x' | 'y' = 'x';
  @Input() scale: ScaleType;
  @Input() label: string;
  @Input() formatTick: (value: any) => (string | number) = d3.format(',');

  private ticks: Function[];

  updateTicks(): void {
    if (!this.dimensions || !this.scale) {
      return;
    }

    const numberOfTicks = this.dimension === 'x'
      ? this.dimensions.boundedWidth < 600
        ? this.dimensions.boundedWidth / 100
        : this.dimensions.boundedWidth / 250
      : this.dimensions.boundedHeight / 70;

    this.ticks = this.scale.ticks(numberOfTicks);
  }

  ngOnChanges(): void {
    this.updateTicks();
  }
}

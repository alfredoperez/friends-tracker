import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ChartModule } from '../chart';
import { TimelineComponent } from './timeline.component';

@NgModule({
  declarations: [TimelineComponent],
  imports: [
    CommonModule,
    ChartModule
  ],
  exports: [TimelineComponent]
})
export class TimelineModule {
}

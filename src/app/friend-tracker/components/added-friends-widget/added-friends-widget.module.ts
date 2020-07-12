import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { TimelineModule } from '../../../shared/components/timeline/timeline.module';
import { AddedFriendsWidgetComponent } from './added-friends-widget.component';

@NgModule({
  declarations: [AddedFriendsWidgetComponent],
  exports: [
    AddedFriendsWidgetComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    FlexLayoutModule,
    MatIconModule,
    TimelineModule
  ]
})
export class AddedFriendsWidgetModule {
}

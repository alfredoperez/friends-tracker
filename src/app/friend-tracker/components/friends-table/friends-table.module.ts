import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule, FlexModule } from '@angular/flex-layout';
import { MaterialModule } from '../../../material.module';
import { FriendsNamesPipeModule } from '../../../shared/pipes/friends-names/friends-names-pipe.module';
import { FriendsTableComponent } from './friends-table.component';

@NgModule({
  declarations: [FriendsTableComponent],
  exports: [
    FriendsTableComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FlexModule,
    FriendsNamesPipeModule,
    FlexLayoutModule
  ]
})
export class FriendsTableModule {
}

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '../material.module';
import { FriendsTableModule } from './components/friends-table/friends-table.module';
import { FriendTrackerPageComponent } from './containers/friend-tracker-page/friend-tracker-page.component';

@NgModule({
  declarations: [FriendTrackerPageComponent],
  imports: [
    CommonModule,
    FlexLayoutModule,
    RouterModule.forChild(
      [{path: '', component: FriendTrackerPageComponent}]
    ),
    FriendsTableModule,
    MaterialModule
  ]
})
export class FriendTrackerModule {
}

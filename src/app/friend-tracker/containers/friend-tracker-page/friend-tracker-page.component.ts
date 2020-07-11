import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Friend } from '../../../shared/models/friends.model';
import { FriendsApiService } from '../../../shared/services/friends-api.service';

@Component({
  templateUrl: './friend-tracker-page.component.html',
  styleUrls: ['./friend-tracker-page.component.scss']
})
export class FriendTrackerPageComponent implements OnInit {

  /**
   * The table data source of friends
   */
  public friendsDataSource: Observable<MatTableDataSource<Friend>>;

  constructor(private friendsService: FriendsApiService) {
  }

  ngOnInit(): void {
    this.friendsDataSource = this.friendsService.list()
      .pipe(
        map(friends => {
          const dataSource = new MatTableDataSource<Friend>();
          dataSource.data = friends;
          return dataSource;
        })
      );
  }

  /**
   * Opens a modal to add a new friend
   */
  public addFriend(): void {

  }
}

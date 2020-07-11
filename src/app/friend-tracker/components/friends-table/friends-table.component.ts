import { AfterViewInit, ChangeDetectionStrategy, Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { fadeInUp400ms } from '../../../shared/animations/fade-in-up.animations';
import { stagger40ms } from '../../../shared/animations/stagger.animation';
import { Friend } from '../../../shared/models/friends.model';

@Component({
  selector: 'app-friends-table',
  templateUrl: './friends-table.component.html',
  styleUrls: ['./friends-table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [stagger40ms, fadeInUp400ms]
})
export class FriendsTableComponent implements OnInit, AfterViewInit {

  /**
   * The data source of friends used in the table
   */
  @Input() public friendsDataSource: MatTableDataSource<Friend>;

  /**
   * List of visible columns on the table
   */
  public visibleColumns: Array<string>;

  /**
   * Reference to the MatPaginator component
   */
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  /**
   * Reference to the MatSort component
   */
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  constructor() {
  }

  ngOnInit(): void {
    this.visibleColumns = ['name', 'added', 'age', 'weight', 'friends'];
  }

  ngAfterViewInit(): void {
    this.friendsDataSource.paginator = this.paginator;
    this.friendsDataSource.sort = this.sort;
  }
}

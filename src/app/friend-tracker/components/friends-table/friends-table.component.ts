import { AfterViewInit, ChangeDetectionStrategy, Component, HostListener, Input, OnInit, ViewChild } from '@angular/core';
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
   * The list of friends to display
   */
  @Input() public friends: Array<Friend>;

  /**
   * The data source of friends used in the table
   */
  public friendsDataSource: MatTableDataSource<Friend>;

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

  private innerWidth: any;

  constructor() {
  }

  ngOnInit(): void {
    this.friendsDataSource = new MatTableDataSource<Friend>();
    this.friendsDataSource.data = this.friends;

    this.innerWidth = window.innerWidth;
    this.setVisibleColumns();
  }

  ngAfterViewInit(): void {
    this.friendsDataSource.paginator = this.paginator;
    this.friendsDataSource.sort = this.sort;
    this.friendsDataSource.sortingDataAccessor = (item, property) => {
      switch (property) {
        case 'created':
          return new Date(item.created);
        default:
          return item[property];
      }
    };
  }

  private setVisibleColumns(): void {
    if (innerWidth < 500) {

    }
    this.visibleColumns = innerWidth < 800
      ? ['name', 'age', 'weight']
      : ['name', 'created', 'age', 'weight', 'friends'];
  }

  @HostListener('window:resize', ['$event'])
  private onResize(event): void {
    this.innerWidth = window.innerWidth;
    this.setVisibleColumns();
  }
}

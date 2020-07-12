import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { fadeInUp400ms } from '../../../shared/animations/fade-in-up.animations';
import { AccessorType } from '../../../shared/components/chart';
import { TimelineDataPoint } from '../../../shared/components/timeline';

@Component({
  selector: 'app-added-friends-widget',
  templateUrl: './added-friends-widget.component.html',
  styleUrls: ['./added-friends-widget.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [fadeInUp400ms]
})
export class AddedFriendsWidgetComponent implements OnInit {

  /**
   * The total friends added this month
   */
  @Input() totalFriendsCurrentMonth: number;

  /**
   * The percentage difference between current and previous month
   */
  @Input() percentageDifference: number;

  /**
   * The data to be shown in the timeline. This is the number of friends
   * added per day of the current mont
   */
  @Input() timelineData: Array<TimelineDataPoint>;

  dateAccessor: AccessorType;

  countAccessor: AccessorType;

  constructor() {
  }

  ngOnInit(): void {
    this.dateAccessor = (item: TimelineDataPoint) => item.date;
    this.countAccessor = (item: TimelineDataPoint) => item.count;
  }

}

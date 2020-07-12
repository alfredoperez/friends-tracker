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

  @Input() totalFriendsCurrentMonth: number;

  @Input() percentageDifference: number;

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

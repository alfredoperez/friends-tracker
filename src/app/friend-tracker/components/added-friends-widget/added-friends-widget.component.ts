import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { fadeInUp400ms } from '../../../shared/animations/fade-in-up.animations';

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


  constructor() {
  }

  ngOnInit(): void {
  }

}

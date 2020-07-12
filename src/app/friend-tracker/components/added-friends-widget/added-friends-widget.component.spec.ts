import { NO_ERRORS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { TimelineModule } from '../../../shared/components/timeline';
import { AddedFriendsWidgetComponent } from './added-friends-widget.component';

jest.mock('d3');

describe('AddedFriendsWidgetComponent', () => {
  let component: AddedFriendsWidgetComponent;
  let fixture: ComponentFixture<AddedFriendsWidgetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      imports: [
        MatCardModule,
        FlexLayoutModule,
        MatIconModule,
        TimelineModule
      ],
      declarations: [AddedFriendsWidgetComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddedFriendsWidgetComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

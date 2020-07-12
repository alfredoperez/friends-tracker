import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddedFriendsWidgetComponent } from './added-friends-widget.component';

describe('AddedFriendsWidgetComponent', () => {
  let component: AddedFriendsWidgetComponent;
  let fixture: ComponentFixture<AddedFriendsWidgetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddedFriendsWidgetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddedFriendsWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

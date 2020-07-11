import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FlexLayoutModule, FlexModule } from '@angular/flex-layout';
import { MaterialModule } from '../../../material.module';
import { FriendsNamesPipeModule } from '../../../shared/pipes/friends-names/friends-names-pipe.module';
import { FriendsNamesPipe } from '../../../shared/pipes/friends-names/friends-names.pipe';
import { FriendsTableComponent } from './friends-table.component';

describe('FriendsTableComponent', () => {

  let component: FriendsTableComponent;
  let fixture: ComponentFixture<FriendsTableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      declarations: [FriendsTableComponent],
      imports: [FriendsNamesPipeModule,
        MaterialModule,
        FlexModule,
        FriendsNamesPipeModule,
        FlexLayoutModule
      ],
      providers: [FriendsNamesPipe]
    });
    fixture = TestBed.createComponent(FriendsTableComponent);
    component = fixture.componentInstance;
  });

  it('can load instance', () => {
    expect(component).toBeTruthy();
  });

  describe('ngOnInit', () => {
    it('should set the visible columns', () => {
      component.visibleColumns = [];
      component.ngOnInit();
      expect(component.visibleColumns).toEqual(['name', 'added', 'age', 'weight', 'friends']);
    });

  });

});

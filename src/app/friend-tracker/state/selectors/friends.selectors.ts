import { createSelector } from '@ngrx/store';
import { getError, LoadingState } from '../../../shared/models/entity-state.model';
import { FriendsReducers } from '../reducers';
import { selectFriendsTrackerState } from './friends-tracker.selectors';

/**
 * Selector for the slice of state of 'Friends'
 */
export const selectFriendsState = createSelector(
  selectFriendsTrackerState,
  (state) => state[FriendsReducers.featureKey]
);

/**
 * Selectors from the entity
 */
export const {
  selectAll: selectAllFriends,
} = FriendsReducers.adapter.getSelectors(selectFriendsState);

/**
 * Selector for a flag that indicates if there is an API request in progress
 */
export const selectIsLoading = createSelector(
  selectFriendsState,
  (state) => state.callState === LoadingState.LOADING
);

/**
 * Selector for a flag that indicates if data has been loaded
 */
export const selectIsLoaded = createSelector(
  selectFriendsState,
  (state) => state.callState === LoadingState.LOADED
);

/**
 * Selector for a the error message
 */
export const selectError = createSelector(
  selectFriendsState,
  (state) => getError(state.callState)
);


export const selectTotalFriendsCurrentMonth = createSelector(
  selectAllFriends,
  (friends) => {
    return friends.filter(friend => {
      const currentMonth = new Date().getMonth();
      return friend.created.getMonth() === currentMonth;
    }).length;
  }
);


export const selectTotalFriendsPreviousMonth = createSelector(
  selectAllFriends,
  (friends) => {
    return friends.filter(friend => {
      const previousMonth = new Date().getMonth() - 1;
      return friend.created.getMonth() === previousMonth;
    }).length;
  }
);

export const selectFriendAcquisitionDifference = createSelector(
  selectTotalFriendsCurrentMonth,
  selectTotalFriendsPreviousMonth,
  (totalCurrentMonth, totalPreviousMonth) => {
    return (totalCurrentMonth * 100) / totalPreviousMonth;
  }
);

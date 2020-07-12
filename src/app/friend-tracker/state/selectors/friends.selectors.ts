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



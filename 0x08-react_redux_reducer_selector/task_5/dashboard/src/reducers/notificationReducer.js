import * as notiActions from '../actions/notificationActionTypes';
import { Map, setIn, set, updateIn } from 'immutable';
import { notificationsNormalizer } from '../schema/notifications';

const defaultState = Map({
  notifications: [],
  filter: 'DEFAULT'
});

export function notificationReducer(state = defaultState, action = { type: null }) {
  switch (action.type) {
    case notiActions.FETCH_NOTIFICATIONS_SUCCESS:
      const normalizedData = notificationsNormalizer(action.data);
      return state.merge({ notifications: normalizedData });

    case notiActions.MARK_AS_READ:
      return state.updateIn(['notifications', action.index], notification => notification.merge({ isRead: true }));

    case notiActions.SET_TYPE_FILTER:
      return state.set('filter', action.filter);

    default:
      return state;
  }
}

export default notificationReducer;
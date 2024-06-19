import * as actions from '../actions/uiActionTypes';
import { Map, fromJS } from 'immutable';


export const initialState = Map({
  isNotificationDrawerVisible: false,
  isUserLoggedIn: false,
  user: null,
});

export  function uiReducer(state = initialState, action = { type: null }) {
  switch (action.type) {
    case actions.DISPLAY_NOTIFICATION_DRAWER:
      return state.set('isNotificationDrawerVisible', true);

    case actions.HIDE_NOTIFICATION_DRAWER:
      return state.set('isNotificationDrawerVisible', false);

    case actions.LOGIN_SUCCESS:
      return state
        .set('isUserLoggedIn', true)
        .set('user', fromJS(action.user));

    case actions.LOGIN_FAILURE:
      return state.set('isUserLoggedIn', false);

    case actions.LOGOUT:
      return state
        .set('isUserLoggedIn', false)
        .set('user', null);

    default:
      return state;
  }
}

export default uiReducer;
import * as uiActionTypes from './uiActionTypes';
import { connect } from 'react-redux';

export function login(email, password) {
    return {
        type: uiActionTypes.LOGIN,
        user: {email, password}
    };
}

export function logout() {
    return {
        type: uiActionTypes.LOGOUT
    };
}

export function displayNotificationDrawer() {
    return {
        type: uiActionTypes.DISPLAY_NOTIFICATION_DRAWER
    };
}

export function hideNotificationDrawer() {
    return {
        type: uiActionTypes.HIDE_NOTIFICATION_DRAWER
    };
}

const mapDispatchToProps = dispatch => {
    return {
      boundLogin: (email, password) => dispatch(login(email, password)),
      boundLogout: () => dispatch(logout()),
      boundDisplayNotificationDrawer: () => dispatch(displayNotificationDrawer()),
      boundHideNotificationDrawer: () => dispatch(hideNotificationDrawer()),
    };
  };
  
  export default connect(null, mapDispatchToProps);
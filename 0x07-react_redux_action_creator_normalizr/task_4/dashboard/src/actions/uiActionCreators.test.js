import * as uiActionCreators from './uiActionCreators';
import * as uiActionTypes from './uiActionTypes';

describe('Test uiActionCreators', () => {
    it('should create an action to login', () => {
        const email = 'test@example.com';
        const password = 'password123';
        const expectedAction = {
          type: uiActionTypes.LOGIN,
          user: { email, password }
        };
        expect(uiActionCreators.login(email, password)).toEqual(expectedAction);
      });

      it('should create an action to logout', () => {
        const expectedAction = {
            type: uiActionTypes.LOGOUT
        };
        expect(uiActionCreators.logout()).toEqual(expectedAction);
      });

      it('should create an action to display notification drawer', () => {
        const expectedAction = {
          type: uiActionTypes.DISPLAY_NOTIFICATION_DRAWER
        };
        expect(uiActionCreators.displayNotificationDrawer()).toEqual(expectedAction);
      });
    
      it('should create an action to hide notification drawer', () => {
        const expectedAction = {
          type: uiActionTypes.HIDE_NOTIFICATION_DRAWER
        };
        expect(uiActionCreators.hideNotificationDrawer()).toEqual(expectedAction);
      });
});
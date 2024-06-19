import * as uiActionCreators from './uiActionCreators';
import * as uiActionTypes from './uiActionTypes';
import fetchMock from 'fetch-mock';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

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


const middlewares = [thunk];
const mockStore = createStore(() => {}, applyMiddleware(...middlewares));

describe('loginRequest action creator', () => {
  it('dispatches LOGIN and LOGIN_SUCCESS actions on success', async () => {
    fetchMock.getOnce('/login-success.json', { body: {} });
    const store = mockStore({});
    await store.dispatch(uiActionCreators.loginRequest('email', 'password'));
    const actions = store.getActions();
    expect(actions[0].type).toBe(uiActionTypes.LOGIN);
    expect(actions[1].type).toBe(uiActionTypes.LOGIN_SUCCESS);
  });

  it('dispatches LOGIN and LOGIN_FAILURE actions on failure', async () => {
    fetchMock.getOnce('/login-success.json', { status: 500 });
    const store = mockStore({});
    await store.dispatch(uiActionCreators.loginRequest('email', 'password'));
    const actions = store.getActions();
    expect(actions[0].type).toBe(uiActionTypes.LOGIN);
    expect(actions[1].type).toBe(uiActionTypes.LOGIN_FAILURE);
  });
});
});
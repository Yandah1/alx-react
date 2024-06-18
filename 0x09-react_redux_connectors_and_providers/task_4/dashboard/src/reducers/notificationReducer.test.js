import { notificationReducer } from "./notificationReducer";
import { Map } from 'immutable';
import * as notiActions from '../actions/notificationActionTypes';
import { defaultState } from "./courseReducer";

describe('Testing notificationReducer', () => {
  it('Test that the default state returns the correct object', () => {
    const result = notificationReducer();
    expect(result.toJS()).toStrictEqual(defaultState.toJS());
  });

  it('Test that FETCH_NOTIFICATIONS_SUCCESS returns the data passed', () => {
    const action = {
      type: notiActions.FETCH_NOTIFICATIONS_SUCCESS,
      data: [
        {
          id: 1,
          type: "default",
          value: "New course available"
        },
        {
          id: 2,
          type: "urgent",
          value: "New resume available"
        },
        {
          id: 3,
          type: "urgent",
          value: "New data available"
        }
      ]
    };
    const expected = {
      notifications: {
        '1': {
          id: 1,
          type: 'default',
          value: 'New course available',
          isRead: false
        },
        '2': {
          id: 2,
          type: 'urgent',
          value: 'New resume available',
          isRead: false
        },
        '3': {
          id: 3,
          type: 'urgent',
          value: 'New data available',
          isRead: false
        }
      },
      filter: 'DEFAULT'
    };
    const result = notificationReducer(undefined, action);
    expect(result.toJS()).toStrictEqual(expected);
  });

  it('Test that MARK_AS_READ returns the correct data', () => {
    const action = {
      type: notiActions.MARK_AS_READ,
      index: 1
    };
    const state= Map({
      notifications: {
        '1': {
          id: 1,
          type: 'default',
          value: 'New course available',
          isRead: false
        },
        '2': {
          id: 2,
          type: 'urgent',
          value: 'New resume available',
          isRead: false
        },
        '3': {
          id: 3,
          type: 'urgent',
          value: 'New data available',
          isRead: false
        }
      },
      filter: 'DEFAULT'
    });
    const expected = {
      notifications: {
        '1': {
          id: 1,
          type: 'default',
          value: 'New course available',
          isRead: true
        },
        '2': {
          id: 2,
          type: 'urgent',
          value: 'New resume available',
          isRead: false
        },
        '3': {
          id: 3,
          type: 'urgent',
          value: 'New data available',
          isRead: false
        }
      },
      filter: 'DEFAULT'
    };
    const result = notificationReducer(state, action);
    expect(result.toJS()).toStrictEqual(expected);
  });

  it('Test that SET_TYPE_FILTER returns the correct data', () => {
    const action = {
      type: notiActions.SET_TYPE_FILTER,
      filter: 'URGENT'
    };
    const state= Map({
      filter: "DEFAULT",
      notifications: {
        '1': {
          id: 1,
          type: 'default',
          value: 'New course available',
          isRead: false
        },
        '2': {
          id: 2,
          type: 'urgent',
          value: 'New resume available',
          isRead: false
        },
        '3': {
          id: 3,
          type: 'urgent',
          value: 'New data available',
          isRead: false
        }
      }
    });
    const expected = {
      notifications: {
        '1': {
          id: 1,
          type: 'default',
          value: 'New course available',
          isRead: false
        },
        '2': {
          id: 2,
          type: 'urgent',
          value: 'New resume available',
          isRead: false
        },
        '3': {
          id: 3,
          type: 'urgent',
          value: 'New data available',
          isRead: false
        }
      },
      filter: 'URGENT'
    };
    const result = notificationReducer(state, action);
    expect(result.toJS()).toStrictEqual(expected);
  });
});
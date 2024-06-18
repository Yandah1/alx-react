import { notificationsReducer } from '../reducers/notificationsReducer';
import { filterTypeSelected, getNotifications, getUnreadNotifications } from './notificationSelector';

describe('Notification Selectors', () => {
  let state;

  beforeEach(() => {
    state = notificationsReducer(undefined, {});
  });

  it('filterTypeSelected returns the correct filter type', () => {
    expect(filterTypeSelected(state)).toBeNull();
  });

  it('getNotifications returns the list of notifications', () => {
    const messages = [
      { id: 1, text: 'Notification 1', read: false },
      { id: 2, text: 'Notification 2', read: true },
    ];
    state = notificationsReducer(state, { type: 'SET_MESSAGES', messages });
    expect(getNotifications(state)).toEqual(messages);
  });

  it('getUnreadNotifications returns the list of unread notifications', () => {
    const messages = [
      { id: 1, text: 'Notification 1', read: false },
      { id: 2, text: 'Notification 2', read: true },
    ];
    state = notificationsReducer(state, { type: 'SET_MESSAGES', messages });
    expect(getUnreadNotifications(state)).toEqual([messages[0]]);
  });
});
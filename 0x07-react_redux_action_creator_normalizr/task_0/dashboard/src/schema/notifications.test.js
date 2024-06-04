import { getAllNotificationsByUser } from './notifications';
import { expect } from 'expect';

describe('getAllNotificationsByUser', () => {
  it('returns notifications for user with id 5debd764a7c57c7839d722e9', () => {
    const userId = '5debd764a7c57c7839d722e9';
    const expectedNotifications = [
      { message: 'Notification 1' },
      { message: 'Notification 3' }
    ];
    const notifications = getAllNotificationsByUser(userId);
    expect(notifications).toEqual(expect.arrayContaining(expectedNotifications));
  });
});

import { getAllNotificationsByUser, normalizedNotifications } from './notifications';
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

describe('normalizedNotifications', () => {
  it('has the correct result array', () => {
    const result = normalizedNotifications.result;
    expect(result).toEqual([
      "5debd76480edafc8af244228",
      "5debd764507712e7a1307303",
      "5debd76444dd4dafea89d53b",
      "5debd76485ee4dfd1284f97b",
      "5debd7644e561e022d66e61a",
      "5debd7644aaed86c97bf9d5e",
      "5debd76413f0d5e5429c28a0",
      "5debd7642e815cd350407777",
      "5debd764c1127bc5a490a4d0",
      "5debd7646ef31e0861ec1cab",
      "5debd764a4f11eabef05a81d",
      "5debd764af0fdd1fc815ad9b",
      "5debd76468cb5b277fd125f4",
      "5debd764de9fa684468cdc0b",
    ]);
  });
});
describe('normalizedNotifications', () => {
  it('has the correct users entity', () => {
    const userId = "5debd764a7c57c7839d722e9";
    const user = normalizedNotifications.entities.users[userId];
    expect(user).toEqual({
      age: 25,
      email: "poole.sanders@holberton.nz",
      id: userId,
      name: { first: "Poole", last: "Sanders" },
      picture: "http://placehold.it/32x32"
    });
  });

  it('has the correct messages entity', () => {
    const messageId = "efb6c485-00f7-4fdf-97cc-5e12d14d6c41";
    const message = normalizedNotifications.entities.messages[messageId];
    expect(message).toEqual({
      guid: messageId,
      isRead: false,
      type: "default",
      value: "Cursus risus at ultrices mi."
    });
  });

  it('has the correct notifications entity', () => {
    const notificationId = "5debd7642e815cd350407777";
    const notification = normalizedNotifications.entities.notifications[notificationId];
    expect(notification).toEqual({
      author: "5debd764f8452ef92346c772",
      context: "3068c575-d619-40af-bf12-dece1ee18dd3",
      id: notificationId
    });
  });
});
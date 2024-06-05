import * as notificationsData from '../../../../notifications.json';
import { normalize, schema } from 'normalizr';

export const getAllNotificationsByUser = (userId) => {
  const notifications = [];
  for (const notification of normalizedNotifications) {
    if (notification.authorId === userId) {
      notifications.push(notification.context);
    }
  }
  return notifications;
};

const user = new schema.Entity('users');
const message = new schema.Entity('messages', {}, {
  idAttribute: 'guid',
});

const notification = new schema.Entity('notifications', {
  author: user,
  context: message,
});

export const normalizedNotifications = normalize(notificationsData.default, [notification]);

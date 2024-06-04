import * as notificationsData from '../../../../notifications.json';
import { normalize, schema } from 'normalizr';

const user = new schema.Entity('users');
const message = new schema.Entity('messages', {}, {
  idAttribute: 'guid',
});

const notification = new schema.Entity('notifications', {
  author: user,
  context: message,
});

export const normalizedNotifications = normalize(notificationsData.default, [notification]);

export const getAllNotificationsByUser = (userId) => {
  return normalizedNotifications.filter((notification) => notification.authorId === userId).map((notification) => notification.context);
};
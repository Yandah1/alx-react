import * as notificationsData from '../../../../notifications.json';
import { normalize, schema } from 'normalizr';
import { createSelector } from 'reselect';

const user = new schema.Entity('users');
const message = new schema.Entity('messages', {}, {
  idAttribute: 'guid',
});

const notification = new schema.Entity('notifications', {
  author: user,
  context: message,
});

export const notificationsNormalizer = createSelector(
  () => notificationsData.default,
  (data) => normalize(data, [notification])
);

export const getAllNotificationsByUser = (userId) => {
  const { entities } = notificationsNormalizer();
  return Object.values(entities.notifications).filter(
    (notification) => notification.author.id === userId
  );
};
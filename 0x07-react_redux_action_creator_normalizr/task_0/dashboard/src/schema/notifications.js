import notificationsData from '../../../../notifications.json';

export const getAllNotificationsByUser = (userId) => {
  return notificationsData.filter((notification) => notification.authorId === userId).map((notification) => notification.context);
};
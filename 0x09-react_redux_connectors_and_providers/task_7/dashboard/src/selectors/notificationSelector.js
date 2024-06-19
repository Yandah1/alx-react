export const filterTypeSelected = (state) => state.notifications.filterType;


export const getNotifications = (state) => state.notifications.messages;


export const getUnreadNotifications = (state) => state.notifications.messages.filter((message) => !message.read);
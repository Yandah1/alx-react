import * as notiActions from '../actions/notificationActionTypes';

const defaultState = {
    notifications: [],
    filter: 'DEFAULT',
};

export const notificationReducer = (state = defaultState, action = { type: null }) => {
    switch (action.type) {
        case notiActions.FETCH_NOTIFICATIONS_SUCCESS:
            return {
                ...state,
                notifications: action.data.map(notification => ({
                    ...notification,
                    isRead: false,
                })),
            };

        case notiActions.MARK_AS_READ:
            return {
                ...state,
                notifications: state.notifications.map(notification =>
                    notification.id === action.index ? { ...notification, isRead: true } : notification
                ),
            };

        case notiActions.SET_TYPE_FILTER:
            return {
                ...state,
                filter: action.filter,
            };

        default:
            return state;
    }
};

export default notificationReducer;
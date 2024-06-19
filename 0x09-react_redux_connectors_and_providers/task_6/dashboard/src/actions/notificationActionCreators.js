import {
    MARK_AS_READ,
    SET_TYPE_FILTER,
    SET_LOADING_STATE,
    FETCH_NOTIFICATIONS_SUCCESS,
  } from "./notificationActionTypes";
  
  export function markAsRead(index) {
    return {
      type: MARK_AS_READ,
      index,
    };
  }
  
  export function setNotificationFilter(filter) {
    return {
      type: SET_TYPE_FILTER,
      filter,
    };
  }
  
  export function setLoadingState(isLoading) {
    return {
      type: SET_LOADING_STATE,
      isLoading,
    };
  }
  
  export function setNotifications(notifications) {
    return {
      type: FETCH_NOTIFICATIONS_SUCCESS,
      notifications,
    };
  }
  
  export function fetchNotifications() {
    return (dispatch) => {
      dispatch(setLoadingState(true));
  
      return fetch("/notifications.json")
        .then((response) => response.json())
        .then((data) => {
          dispatch(setNotifications(data));
          dispatch(setLoadingState(false));
        })
        .catch((error) => {
          console.error("Error fetching notifications:", error);
          dispatch(setLoadingState(false));
        });
    };
  }
  
  const mapDispatchToProps = (dispatch) => {
    return {
      boundMarkAsRead: (index) => dispatch(markAsRead(index)),
      boundSetNotificationFilter: (filter) => dispatch(setNotificationFilter(filter)),
      boundFetchNotifications: () => dispatch(fetchNotifications()),
    };
  };
  
  export default connect(null, mapDispatchToProps);
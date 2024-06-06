import { MARK_AS_READ, SET_TYPE_FILTER } from "./notificationActionTypes";
//import { connect } from 'react-redux';

export function markAsAread(index) {
    return {
        type: MARK_AS_READ,
        index
    };
}

export function setNotificationFilter(filter) {
    return {
        type: SET_TYPE_FILTER,
        filter
    };
}


const mapDispatchToProps = dispatch => {
    return {
      boundMarkAsRead: index => dispatch(markAsAread(index)),
      boundSetNotificationFilter: filter => dispatch(setNotificationFilter(filter)),
    };
  };
  
  export default connect(null, mapDispatchToProps);
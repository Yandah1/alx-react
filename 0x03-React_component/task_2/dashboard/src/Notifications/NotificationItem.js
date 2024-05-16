import React, { Component } from "react";
import "./Notifications.css";
import PropTypes from "prop-types";

class NotificationItem extends React.Component {
    constructor(props) {
      super(props);
      this.markAsRead = this.markAsRead.bind(this);
    }

    markAsRead = (id) => {
      this.props.markAsRead(id);
    }  
  
    render() {
      return (
        this.props.value ? 
        <li
        data-notification-type={this.props.type}
        onClick={() => this.props.markAsRead(this.props.id)}
        >{this.props.value}</li> 
        :
        <li
        data-notification-type={this.props.type}
        dangerouslySetInnerHTML={this.props.html}
        onClick={() => {console.log('empty func');}}
        ></li>
      );
    }
  }
NotificationItem.propTypes = {
  type: PropTypes.string.isRequired,
  value: PropTypes.string,
  html: PropTypes.string,
  id: PropTypes.number.isRequired,
  markAsRead: PropTypes.func
};

NotificationItem.defaultProps = {
  message: 'Default Notification',
  type: 'default',
  markAsRead: () => {console.log('empty func');},
	id: 0
};

export default NotificationItem;

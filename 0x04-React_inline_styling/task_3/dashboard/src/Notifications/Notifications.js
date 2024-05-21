import React, { Component } from 'react';
import { getLatestNotification } from '../utils/utils';
import closeIcon from '../assets/close-icon.png';
import NotificationItem from './NotificationItem';
import PropTypes from 'prop-types';
import NotificationItemShape from './NotificationItemShape';
import { StyleSheet, css } from 'aphrodite';


const styles = StyleSheet.create({
  menuItem: {
    position: 'absolute',
    top: '7px',
    right: '7px',
  },
  notifications: {
    border: '3px dotted var(--holberton-red)',
    padding: '6px 12px',
    position: 'absolute',
    top: '21px',
    right: '7px',
    marginTop: '12px',
    zIndex: '100',
    '@media (max-width: 900px)': {
      width: '100%',
      padding: '0px',
      fontSize: 20,
      position: 'fixed',
      top: '0',
      left: '0',
      right: 0,
      border: 'none',
    }
  },
  notificationItem: {
    default: {
      color: 'blue',
    },
    urgent: {
      color: 'var(--holberton-red)',
    },
  },
  notificationsList: {
    listStyle: 'none',
    margin: 0,
    padding: 0,
  },
});

class Notifications extends Component {
  constructor(props) {
    super(props);
    this.markAsRead = this.markAsRead.bind(this);
  }
  shouldComponentUpdate(nextProps, nextState) {
    return this.props !== nextProps || this.state !== nextState;
  }

  markAsRead(id) {
    console.log(`Notification ${id} has been marked as read`);
  }

  render() {
    return (
      <>
        <div className={css(styles.menuItem)}>
          Your notifications
        </div>
        {this.props.displayDrawer ? (
          <div className={css(styles.notifications)}>
            <button
              style={{
                color: '#3a3a3a',
                fontWeight: 'bold',
                background: 'none',
                border: 'none',
                fontSize: '15px',
                position: 'absolute',
                right: '3px',
                top: '3px',
                cursor: 'pointer',
                outline: 'none',
              }}
              aria-label="Close"
              onClick={(e) => {
                console.log('Close button has been clicked');
              }}
            >
              <img src={closeIcon} alt="close icon" width="15px" />
            </button>
            {this.props.listNotifications.length !== 0 ? (
              <p>Here is the list of notifications</p>
            ) : null}
            <ul className={css(styles.notificationsList)}>
              {this.props.listNotifications.length === 0 ? (
                <NotificationItem
                  type="default"
                  value="No new notification for now"
                />
              ) : null}
              {this.props.listNotifications.map((val, idx) => {
                return (
                  <NotificationItem
                    type={val.type}
                    value={val.value}
                    html={val.html}
                    key={(val.id)}
                    id={val.id}
                    markAsRead={this.markAsRead}
                  />
                );
              })}
            </ul>
          </div>
        ) : null}
      </>
    );
  }
}

Notifications.defaultProps = {
  displayDrawer: false,
  listNotifications: [],
};

Notifications.propTypes = {
  displayDrawer: PropTypes.bool,
  listNotifications: PropTypes.arrayOf(NotificationItemShape),
};

export default Notifications;
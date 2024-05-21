import React from 'react';
import closeIcon from '../assets/close-icon.png';
import NotificationItem from './NotificationItem';
import PropeTypes from 'prop-types';
import NotificationItemShape from './NotificationItemShape';
import { StyleSheet, css } from 'aphrodite';


class Notifications extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isNotificationPanelVisible: false,
    };
    this.markAsRead = this.markAsRead.bind(this);
    this.toggleNotificationPanel = this.toggleNotificationPanel.bind(this);
  }

  shouldComponentUpdate(nextProps, nextState) {
    return this.props !== nextProps || this.state !== nextState;
  }

  markAsRead(id) {
    console.log(`Notification ${id} has been marked as read`);
  }

  toggleNotificationPanel = () => {
    this.setState((prevState) => ({
      isNotificationPanelVisible: !prevState.isNotificationPanelVisible,
    }));
  };


  render() {
    const { isNotificationPanelVisible } = this.state;
    const { listNotifications } = this.props;

    return (
      <>
        <div
          className={css(
            styles.menuItem,
            isNotificationPanelVisible ? styles.notificationPanelHidden : null
          )}
          onClick={this.toggleNotificationPanel}
        >
          Your notifications
        </div>
        <div
          className={css(
            styles.notifications,
            isNotificationPanelVisible
              ? styles.notificationPanelVisible
              : styles.notificationPanelHidden
          )}
        >
          <button style={{
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
            onClick={(e) => {
              console.log('Close button has been clicked');
            }}
          >
            <img src={closeIcon} alt="close icon" width="15px" />
          </button>
          {listNotifications.length !== 0 ? (
            <p>Here is the list of notifications</p>
          ) : null}
          <ul className={css(styles.notificationsList)}>
            {listNotifications.length === 0 ? (
              <NotificationItem
                type="default"
                value="No new notification for now"
              />
            ) : (
              listNotifications.map((val, idx) => (
                <NotificationItem
                  type={val.type}
                  value={val.value}
                  html={val.html}
                  key={val.id}
                  id={val.id}
                  markAsRead={this.markAsRead}
                />
              ))
            )}
          </ul>
        </div>
      </>
    );
  }
}
  
const opacityAnimation = {
  '0%': { opacity: 0.5 },
  '100%': { opacity: 1}
};

const bounceAnimation = {
  '0%': { transform: 'translateY(0px)' },
  '33%': { transform: 'translateY(-5px)'},
  '66%': { transform: 'translateY(5px)'},
  '100%': { transform: 'translateY(0px)'},
};

const styles = StyleSheet.create({
	notifications: {
    border: '3px dotted var(--holberton-red)',
    padding: '6px 12px',
    position: 'absolute',
    textAlign: 'right',
    top: '21px',
    right: '7px',
    marginTop: '12px',
    zIndex: '100',
    '@media (max-width: 900px)': {
      width: '100%',
      padding: '0px',
      fontSize: 20,
      position: 'relative',
      top: 0,
      right: 0,
      left: 0,
      border: 'none',
    }
	},
  menuItem: {
    position: 'relative',
    textAlign: 'left',
    zIndex: 100,
    float: 'right',
    backgroundColor: '#fff8f8',
    ':hover': {
      cursor: 'pointer',
      animationName: [opacityAnimation, bounceAnimation],
      animationDuration: '1s, 0.5s',
      animationIterationCount: '3'
    }
  },
  notificationsList: {
    '@media (max-width: 900px)': {
      padding: 0
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
  button: {
    '@media (max-width: 900px)': {
      position: 'relative',
      float: 'right',
    }
  },
  notificationPanelVisible: {
    display: 'block',
  },
  notificationPanelHidden: {
    display: 'none',
  },
});

Notifications.defaultProps = {
  displayDrawer: false,
  listNotifications: []
};

Notifications.propTypes = {
  displayDrawer: PropeTypes.bool,
  listNotifications: PropeTypes.arrayOf(NotificationItemShape)
};

export default Notifications;
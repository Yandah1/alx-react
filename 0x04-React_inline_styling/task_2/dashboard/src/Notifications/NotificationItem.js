import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
  default: {
    color: 'blue',
  },
  urgent: {
    color: 'red',
  },
});

class NotificationItem extends React.PureComponent {
  render() {
    const { type, value, html, markAsRead, id } = this.props;
    const style = type === 'urgent' ? styles.urgent : styles.default;

    return (
      <li
        data-notification-type={type}
        className={css(style)}
        onClick={() => markAsRead(id)}
      >
        {value ? value : <span dangerouslySetInnerHTML={html} />}
      </li>
    );
  }
}

NotificationItem.defaultProps = {
  type: 'default',
  markAsRead: () => {},
  id: 0,
};

NotificationItem.propTypes = {
  html: PropTypes.shape({ __html: PropTypes.string }),
  type: PropTypes.string.isRequired,
  value: PropTypes.string,
  markAsRead: PropTypes.func,
  id: PropTypes.number,
};

export default NotificationItem;
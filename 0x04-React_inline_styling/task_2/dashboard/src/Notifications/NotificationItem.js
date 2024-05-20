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
  constructor(props) {
    super(props);
  }

  render() {
    const type = this.props.type;
    const style = type === 'urgent' ? styles.urgent : styles.default;

    return (
      this.props.value ? 
      <li
        data-notification-type={this.props.type}
        className={css(style)}
        onClick={() => this.props.markAsRead(this.props.id)}
      >{this.props.value}</li> 
      :
      <li
        data-notification-type={this.props.type}
        dangerouslySetInnerHTML={this.props.html}
        className={css(style)}
        onClick={() => this.props.markAsRead(this.props.id)}
      ></li>
    );
  }
}

NotificationItem.defaultProps = {
  type: 'default',
  markAsRead: () => {},
  id: 0
};

NotificationItem.propTypes = {
  html: PropTypes.shape({ __html: PropTypes.string }),
  type: PropTypes.string.isRequired,
  value: PropTypes.string,
  markAsRead: PropTypes.func,
  id: PropTypes.number
};

export default NotificationItem;
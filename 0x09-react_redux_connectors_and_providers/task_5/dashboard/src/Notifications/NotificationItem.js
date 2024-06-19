import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
  default: {
    color: 'blue',
    width: '100%',
    borderBottom: '1px solid black',
    padding: '10px 8px',
    fontKerning: '20px',
  },
  urgent: {
    color: 'red',
    width: '100%',
    fontSize: '20px',
    borderBottom: '3px solid red',
    padding: '10px 8px',
    fontKerning: '20px',
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
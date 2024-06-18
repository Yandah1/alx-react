import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Notification from '../Notifications/Notifications';
import Login from '../Login/Login';
import CourseList from '../CourseList/CourseList';
import { getLatestNotification } from '../utils/utils';
import BodySection from '../BodySection/BodySection';
import BodySectionWithMarginBottom from '../BodySection/BodySectionWithMarginBottom';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';
import { AppContext } from './AppContext';
import { connect } from 'react-redux';
import { displayNotificationDrawer, hideNotificationDrawer } from '../actions/uiActionCreators';

const styles = StyleSheet.create({
  app: {
    position: 'relative',
    minHeight: '100vh'
  },
  footer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#deb5b545',
    color: 'white',
    borderTop: '3px solid #E11D3F',
    padding: '1rem',
    fontStyle: 'italic',
  }
});

class App extends React.Component {
  constructor(props) {
    super(props);
    this.isLoggedIn = props.isLoggedIn;
    this.handleKeyDown = this.handleKeyDown.bind(this);
    this.listCourses = [
      {id: 1, name: 'ES6', credit: 60},
      {id: 2, name: 'Webpack', credit: 20},
      {id: 3, name: 'React', credit: 40}
    ];
    this.listNotifications = [
      {id: 1, value: "New course available", type: "default"},
      {id: 2, value: "New resume available", type: "urgent"},
      {id: 3, html: {__html: getLatestNotification()}, type: "urgent"},
    ];
    this.logIn = this.logIn.bind(this);
    this.logOut = this.logOut.bind(this);
    this.state = {
      user: {
        email: '',
        password: '',
        isLoggedIn: false
      },
      logOut: this.logOut
    };
  }

  markNotificationAsRead(id) {
    const newList = this.state.listNotifications.filter(not => not.id !== id);
    this.setState({ listNotifications: newList });
  }

  logIn(email, password) {
    this.setState({
      user: {
        email,
        password,
        isLoggedIn: true
      }
    });
  }

  logOut() {
    this.setState({
      user: {
        email: '',
        password: '',
        isLoggedIn: false
      }
    });
  }

  handleKeyDown(e) {
    if (e.ctrlKey && e.key === 'h') {
      e.preventDefault();
      alert("Logging you out");
      this.logOut();
    }
  }

  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }

  render() {
    return (
      <AppContext.Provider value={{ user: this.state.user, logOut: this.logOut }}>
        <Notification
          listNotifications={this.listNotifications}
          displayDrawer={this.props.displayDrawer}
          handleDisplayDrawer={this.props.displayNotificationDrawer}
          handleHideDrawer={this.props.hideNotificationDrawer} />
        <div className={css(styles.app)}>
          <Header />
          {this.props.isLoggedIn ? (
            <BodySectionWithMarginBottom title="Course list">
              <CourseList listCourses={this.listCourses} />
            </BodySectionWithMarginBottom>
          ) : (
            <BodySectionWithMarginBottom title="Log in to continue">
              <Login />
            </BodySectionWithMarginBottom>
          )}
          <BodySection title="News from the School">
            <p><strong>React is fun- </strong>
              Unlock the power of React and embark on a journey of dynamic,
              responsive, and captivating web experiences. React, the renowned JavaScript library, empowers you to create user interfaces that are not only visually appealing but also highly interactive and efficient.
            </p>
          </BodySection>
          <div className={css(styles.footer)}>
            <Footer />
          </div>
        </div>
      </AppContext.Provider>
    );
  }
}

App.defaultProps = {
  isLoggedIn: false,
  displayDrawer: false,
};

App.propTypes = {
  isLoggedIn: PropTypes.bool,
  displayDrawer: PropTypes.bool,
  displayNotificationDrawer: PropTypes.func.isRequired,
  hideNotificationDrawer: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  isLoggedIn: state.ui.get('isUserLoggedIn'),
  displayDrawer: state.ui.get('isNotificationDrawerVisible'),
});

const mapDispatchToProps = {
  displayNotificationDrawer,
  hideNotificationDrawer,
};

export { mapStateToProps, mapDispatchToProps };
export default connect(mapStateToProps, mapDispatchToProps)(App);

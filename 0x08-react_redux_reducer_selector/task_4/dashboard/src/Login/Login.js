import React, { useState, useEffect } from 'react';
import { StyleSheet, css } from "aphrodite";
import PropTypes from 'prop-types';

const styles = StyleSheet.create({
  AppBody: {
    padding: '36px 24px',
    '@media (max-width: 900px)': {
      display: 'flex',
      flexDirection: 'column'
    },
    input: {
      margin: '0 16px 0 8px'
    }
  },
  button: {
    width: '10%',
    height: '20px',
    backgroundColor: 'white',
    border: '1px solid yellow',
    borderRadius: '0',
    ':hover': {
      borderColor: 'orange'
    },
    '@media (max-width: 900px)': {
      marginTop: '10px'
    }
  }
});

function Login(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [enableSubmit, setEnableSubmit] = useState(false);

  const handleLoginSubmit = (event) => {
    event.preventDefault();
    props.logIn(event.elements.email.value, event.target.elements.password.value);
  };

  const handleChangeEmail = (event) => {
    setEmail(event.target.value);
    checkEnableSubmit();
  };

  const handleChangePassword = (event) => {
    setPassword(event.target.value);
    checkEnableSubmit();
  };
  const checkEnableSubmit = () => {
    if (email.length > 0 && password.length > 0) {
        setEnableSubmit(true);
      } else {
        setEnableSubmit(false);
      }
  };

  useEffect(() => {
    if (email !== '' && password !== '') {
        setEnableSubmit(true);
      } else {
        setEnableSubmit(false);
      }
  }, [email, password]);


  return (
    <>
      <div className={css(styles.AppBody)}>
        <form onSubmit={handleLoginSubmit}>
          <p>Login to access the full dashboard</p>
          <label htmlFor="email">Email: </label>
          <input type="email" id="email" name="email" value={email} onChange={handleChangeEmail} className={css(styles.AppBody.input)} />
          <br />
          <label htmlFor="password">Password: </label>
          <input type="password" id="password" name="password" value={password} onChange={handleChangePassword} className={css(styles.AppBody.input)} />
          <br />
          <input type="submit" value="OK" disabled={!enableSubmit} className={css(styles.button)} />
        </form>
      </div>
    </>
  );
}
Login.propTypes = {
  logIn: PropTypes.func
};

export default Login;
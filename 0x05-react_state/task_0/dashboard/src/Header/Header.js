import React from 'react';
import logo from '../assets/holberton_logo.jpg';
import {  StyleSheet, css } from 'aphrodite';

function Header() {
  return (
    <div className={css(styles.AppHeader)}>
      <img src={logo} alt="logo" className={css(styles.logo)} />
      <h1 className={css(styles.title)}>School dashboard</h1>
    </div>
  )
}


const styles = StyleSheet.create({
  AppHeader: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'left',
    borderBottom: '3px solid #e1484c',
    marginTop: '30px'
  },
  logo: {
    width: '150px'
  },
  title: {
    margin: 'auto auto auto 0',
    color: '#e1484c'
  }
});

export default Header;
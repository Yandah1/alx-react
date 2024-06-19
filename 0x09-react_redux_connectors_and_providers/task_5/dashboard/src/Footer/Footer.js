import React, { useContext } from 'react';
import './Footer.css';
import { AppContext } from '../App/AppContext';
import { getFooterCopy, getFullYear } from '../utils/utils';


function Footer() {
  const { user } = useContext(AppContext);

  return (
    <div className="App-footer">
      <p>Copyright {getFullYear()} - {getFooterCopy()}</p>
      {user.isLoggedIn && (
        <p>
          <a href="#" className="App-link">
            Contact us
          </a>
        </p>
      )}
    </div>
  );
}

export default Footer;
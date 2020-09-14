import React from 'react';
import './styles.css';
import userLogo from '../../assets/user.png';

function Header({ black }) {
  return (
    <header className={black ? 'black' : ''}>
      <div className='header--logo'>
        <a href='/'>
          <img
            src='https://fontmeme.com/permalink/200914/9309b97b312792e8506524d28f0ca508.png'
            alt='logotipo do site'
          />
        </a>
      </div>
      <div className='header--userLogo'>
        <a href='/'>
          <img src={userLogo} alt='logotipo do usuário' />
        </a>
      </div>
    </header>
  );
}

export default Header;

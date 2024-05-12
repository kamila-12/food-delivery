import React from 'react';
import './Header.css';

const Header: React.FC = () => {
  return (
    <div className='header'>
      <div className='header-contents'>
        <h2>INDULGE IN SWEET ARTISTRY AT ART B</h2>
        <button> Order</button>
      </div>
    </div>
  );
}

export default Header;


import React from 'react';
import { Link } from 'react-router-dom';

function Navigation() {
  return (
    <div className='navbar'>
    <nav>
      <ul>
        
        <li>
         
          <Link to="/products">Products</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
       
      </ul>
    </nav>
    </div>
  );
}

function RootLayout({ children }) {
  return (
    <div>
      <Navigation />
      {children}
    </div>
  );
}

export default RootLayout;

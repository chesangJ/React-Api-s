
// import { NavLink,Outlet } from 'react-router-dom'

// export default function RootLayout() {
//   return (
//    <div className='root-layout'>
// <header>
//    <nav>
//     <NavLink to="/">Home</NavLink>
//     <NavLink to="/Products">Products</NavLink>
//     <NavLink to="/Login">Login</NavLink>

//    </nav>

// </header>
// <main>
//     <Outlet/>
//     </main>

//    </div>
//   )
// }

import React from 'react';
import { Link } from 'react-router-dom';

function Navigation() {
  return (
    <div className='navbar'>
    <nav>
      <ul>
        {/* <li>
         
        <Link to="/">Home</Link>
        </li> */}
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

import React from 'react';

const headerStyle = {
  zIndex: 9999
}

function Header() {
  return (
    <div className="navbar bg-base-100 object-left-top fixed" style={headerStyle}>
      <div className="navbar-start">
        <div className="dropdown">
          <label role="presentation" tabIndex="0" className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </label>
          <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
            <li><a href="http://stackoverflow.com/questions/">Home</a></li>
            <li><a href="http://stackoverflow.com/questions/">Services</a></li>
            <li><a href="http://stackoverflow.com/questions/">Projects</a></li>
            <li><a href="http://stackoverflow.com/questions/">Contact Us</a></li>
          </ul>
        </div>
        <a className="btn btn-ghost normal-case text-xl" href="http://stackoverflow.com/questions/">daisyUI</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal p-0">
          <li><a href="http://stackoverflow.com/questions/">Home</a></li>
          <li><a href="http://stackoverflow.com/questions/">Services</a></li>
          <li><a href="http://stackoverflow.com/questions/">Projects</a></li>
          <li><a href="http://stackoverflow.com/questions/">Contact Us</a></li>
        </ul>
      </div>
      <div className="navbar-end">
        <a className="btn" href="http://stackoverflow.com/questions/">Let's meet!</a>
      </div>
    </div>
  );
}

export default Header;

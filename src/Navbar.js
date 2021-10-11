import React from 'react'
import Logout from './Logout'

function Navbar() {
  return (
    <div className="navbar">
      <span id="logo">Heroes</span>
      <Logout/>
    </div>
  );
}

export default Navbar;
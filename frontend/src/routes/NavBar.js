import React from "react";
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from "react-router-dom";
import "./NavBar.css"

function NavBar({ currUser }) {
  function loggedInNav() {
    return (
      <div>
        <Navbar className="Navigation">
          <NavLink exact to="/">
            Jobly
          </NavLink>
          <NavLink to="/companies">
            Companies
          </NavLink>
          <NavLink to="/jobs">
            Jobs
          </NavLink>
          <NavLink to="/profile">
            Profile
          </NavLink>
          <NavLink to="/logout">
            Logout
          </NavLink>
        </Navbar>
      </div>
    )
  }

  function loggedOutNav(){
    return (
      <div>
        <Navbar className="Navigation">
          <NavLink exact to="/">
            Jobly
          </NavLink>
          <NavLink to="/login">
            Login
          </NavLink>
          <NavLink to="/signup">
            Sign Up
          </NavLink>
        </Navbar>
      </div>
    )
  }

  return (
    currUser ? loggedInNav() : loggedOutNav()
  )
}

export default NavBar;
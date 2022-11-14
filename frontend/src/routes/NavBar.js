import React, { useContext } from "react";
import Navbar from 'react-bootstrap/Navbar';
import { Link, NavLink } from "react-router-dom";
import "./NavBar.css"
import UserContext from "../Login/UserContext";

function NavBar({ logOut }) {
  const { currUser } = useContext(UserContext);

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
          <Link to="/" onClick={logOut}>
            Logout
          </Link>
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
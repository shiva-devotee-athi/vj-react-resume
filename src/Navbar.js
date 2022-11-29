import React, { Component } from "react";
import { NavLink, Link } from "react-router-dom";

class NavBar extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <Link className="navbar-brand" to="/">
            Home
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <NavLink className="nav-item nav-link" to="/CourseList">
                Course List
              </NavLink>
              <NavLink className="nav-item nav-link" to="/advisorInfoModal">
                Advisor Information
              </NavLink>
              <NavLink className="nav-item nav-link" to="/logout">
                Log Out
              </NavLink>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default NavBar;
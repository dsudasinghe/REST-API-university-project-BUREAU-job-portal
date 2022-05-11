import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

function Header() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <h5 className="navbar-brand">
          Sri Lanka Bureau of Foreign Employment (SLBFE)
        </h5>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse"
          id="navbarNavAltMarkup"
          style={{
            flex: 1,
            flexDirection: "row",
            justifyContent: "right",
            alignItems: "right",
          }}
        >
          <div className="navbar-nav">
            <Link className="nav-link" to="/">Home</Link>

            <Link className="nav-link" to="/citizen">
              Citizen
            </Link>
            <Link className="nav-link" to="/admin">
              Admin
            </Link>
            <Link className="nav-link" to="/reqruiter">
              Reqruiter
            </Link>

            <Link className="nav-link" to="/login">
              Sign In
            </Link>
            <Link className="nav-link" to="/signup">
              Sign Up
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
export default Header;

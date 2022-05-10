import React from "react";
import {Link} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';


function Header (){
    return(
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">Sri Lanka Bureau of Foreign Employment (SLBFE)</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup" style={ { flex: 1, flexDirection: 'row', justifyContent: 'right', alignItems: 'right' } }>
            <div className="navbar-nav">
              <a className="nav-link active" aria-current="page" href="#">Home</a>
              <a className="nav-link" href="#"><Link to="/citizen">Citizen</Link></a>
              <a className="nav-link" href="#"><Link to="/admin">Admin</Link></a>
              <a className="nav-link" href="#"><Link to="/reqruiter">Reqruiter</Link></a>

              <a className="nav-link" href="#"><Link to="/contacts">Contacts</Link></a>
              <a className="nav-link" href="#"><Link to="/qualifications">Qualifications</Link></a>
              <a className="nav-link" href="#"><Link to="/complaints">Complaints</Link></a>
              <a className="nav-link" href="#"><Link to="/validation">Validate</Link></a>
              <a className="nav-link" href="#"><Link to="/login">Sign In</Link></a>
              <a className="nav-link" href="#"><Link to="/signup">Sign Up</Link></a>
              
            </div>
          </div>
        </div>
      </nav>
    )
}
export default Header;
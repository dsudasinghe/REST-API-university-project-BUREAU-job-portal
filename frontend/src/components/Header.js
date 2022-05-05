import React from "react";
import {Link} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';


function Header (){
    return(
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">Sri Lanka Bureau of Foreign Employment (SLBFE)</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavAltMarkup" style={ { flex: 1, flexDirection: 'row', justifyContent: 'right', alignItems: 'right' } }>
            <div class="navbar-nav">
              <a class="nav-link active" aria-current="page" href="#">Home</a>
              <a class="nav-link" href="#"><Link to="/validation">Validate</Link></a>
              <a class="nav-link" href="#"><Link to="/login">Sign In</Link></a>
              <a class="nav-link" href="#"><Link to="/signup">Sign Up</Link></a>
              
            </div>
          </div>
        </div>
      </nav>
    )
}
export default Header;
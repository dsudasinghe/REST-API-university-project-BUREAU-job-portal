import { Link } from "react-router-dom";
import React, { useCallback } from "react";
import { textAlign } from "@mui/system";

function AdminHome() {
  return (
    <div class="container">
      <div style={{display: 'flex',  justifyContent:'center', alignItems:'center', height: '35vh'}}>
        <div class="card-body">
          <h5 class="card-title">Welcome Mr. Dilan Ranawaka</h5>
          <p class="card-text">
            With supporting text below as a natural lead-in to additional
            content.
          </p>
        </div>
      </div>
      <div class="row">
        <div class="col-sm-6">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">Validate Users</h5>
              <p class="card-text">
                With supporting text below as a natural lead-in to additional
                content.
              </p>
              <a href="/qualifications" class="btn btn-primary">
                Validate 
              </a>
            </div>
          </div>
        </div>
        <div class="col-sm-6">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">View complaints</h5>
              <p class="card-text">
                With supporting text below as a natural lead-in to additional
                content.
              </p>
              <a href="/complaints" class="btn btn-primary">
                View
              </a>
            </div>
          </div>
        </div>
        <div class="col-sm-6" style={{paddingTop: '50px'}}>
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">User Contact Details</h5>
              <p class="card-text">
                With supporting text below as a natural lead-in to additional
                content.
              </p>
              <a href="/complaints" class="btn btn-primary">
                View
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminHome;

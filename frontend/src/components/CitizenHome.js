import { Link } from "react-router-dom";
import React, { useCallback } from "react";
import { textAlign } from "@mui/system";

function CitizenHome() {
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
              <h5 class="card-title">Add Qualifications here</h5>
              <p class="card-text">
                With supporting text below as a natural lead-in to additional
                content.
              </p>
              <a href="/qualifications" class="btn btn-primary">
                Add Qualifications
              </a>
            </div>
          </div>
        </div>
        <div class="col-sm-6">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">Make your complaints here</h5>
              <p class="card-text">
                With supporting text below as a natural lead-in to additional
                content.
              </p>
              <a href="/complaints" class="btn btn-primary">
                Make your complaints here
              </a>
            </div>
          </div>
        </div>
        <div class="col-sm-6" style={{paddingTop: '50px'}}>
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">Update your current location</h5>
              <p class="card-text">
                With supporting text below as a natural lead-in to additional
                content.
              </p>
              <a href="/complaints" class="btn btn-primary">
                Update
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CitizenHome;

import React, { } from "react";


function CitizenHome() {
  return (
    <div className="container">
      <div style={{display: 'flex',  justifyContent:'center', alignItems:'center', height: '35vh'}}>
        <div className="card-body">
          <h5 className="card-title">Welcome</h5>
          <p className="card-text">
            With supporting text below as a natural lead-in to additional
            content.
          </p>
        </div>
      </div>
      <div className="row">
        <div className="col-sm-6">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Add Qualifications here</h5>
              <p className="card-text">
                With supporting text below as a natural lead-in to additional
                content.
              </p>
              <a href="/qualifications" className="btn btn-primary">
                Add Qualifications
              </a>
            </div>
          </div>
        </div>
        <div className="col-sm-6">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Make your complaints here</h5>
              <p className="card-text">
                With supporting text below as a natural lead-in to additional
                content.
              </p>
              <a href="/complaints" className="btn btn-primary">
                Make your complaints here
              </a>
            </div>
          </div>
        </div>
        <div className="col-sm-6" style={{paddingTop: '50px'}}>
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Update Details</h5>
              <p className="card-text">
                With supporting text below as a natural lead-in to additional
                content.
              </p>
              <a href="/qualifications" className="btn btn-primary">
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

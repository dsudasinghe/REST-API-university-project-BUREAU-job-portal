import React, { } from "react";

function AdminHome() {
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
              <h5 className="card-title">Validate Users</h5>
              <p className="card-text">
                With supporting text below as a natural lead-in to additional
                content.
              </p>
              <a href="/validation" className="btn btn-primary">
                Validate 
              </a>
            </div>
          </div>
        </div>
        <div className="col-sm-6" >
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">View complaints</h5>
              <p className="card-text">
                With supporting text below as a natural lead-in to additional
                content.
              </p>
              <a href="/viewcomplaints" className="btn btn-primary">
                View
              </a>
            </div>
          </div>
        </div>
        <div className="col-sm-6" style={{paddingTop: '50px'}}>
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Search Contact Details</h5>
              <p className="card-text">
                With supporting text below as a natural lead-in to additional
                content.
              </p>
              <a href="/contacts" className="btn btn-primary">
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
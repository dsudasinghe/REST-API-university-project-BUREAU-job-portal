import React, { useState } from "react";
import axios from "axios";

function Qualifications() {
  const [qulification, setQualification] = useState("");
  const [longitude, setLongitude] = useState("");
  const [latitude, setLatitude] = useState("");
  const [certificates, setCertificates] = useState([]);

  function sendData(e) {
    e.preventDefault();
    const qualification = {
      qulification,
      longitude,
      latitude,
      certificates,
    };
    axios
      .put("http://localhost:5000/user/update", qualification)
      .then(() => {
        alert("Updated");
        // setQualification("")
        // setLongitude("")
        // setLatitude("")
        // setCertificates("")
      })
      .catch((err) => {
        alert(err);
      });
  }

  return (
    <div className="container">
      <div>
        <form onSubmit={sendData}>
          <div className="mb-3">
            <label for="formGroupExampleInput" className="form-label">
              Qualifications
            </label>
            <input
              type="text"
              className="form-control"
              id="formGroupExampleInput"
              placeholder="Enter Qualifications"
              onChange={(e) => {
                setQualification(e.target.value);
              }}
            ></input>
          </div>
          <div className="mb-3">
            <label for="formGroupExampleInput" className="form-label">
              Longitude
            </label>
            <input
              type="text"
              className="form-control"
              id="formGroupExampleInput"
              placeholder="Longitude"
              onChange={(e) => {
                setLongitude(e.target.value);
              }}
            ></input>
          </div>
          <div className="mb-3">
            <label for="formGroupExampleInput" className="form-label">
              Latitude
            </label>
            <input
              type="text"
              className="form-control"
              id="formGroupExampleInput"
              placeholder="Latitude"
              onChange={(e) => {
                setLatitude(e.target.value);
              }}
            ></input>
          </div>
          <div className="mb-3">
            <label for="formGroupExampleInput2" className="form-label">
              Certificates - Passport, Birth Certificate, CV
            </label>
            <input
              type="file"
              multiple
              className="form-control"
              id="formGroupExampleInput2"
              placeholder="Another input placeholder"
              onChange={(e) => {
                setCertificates(e.target.files[0]);
              }}
            ></input>
          </div>
          <input
            className="btn btn-primary"
            style={{ align: "center" }}
            type="submit"
            value="Update"
          ></input>
        </form>
      </div>
    </div>
  );
}

export default Qualifications;
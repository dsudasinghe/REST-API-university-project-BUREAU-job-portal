import React, { useState } from "react";
import { Form } from "react-bootstrap";
import axios from "axios";

function Complaints() {
  const [complaint, setComplaint] = useState("");

  function sendData(e) {
    e.preventDefault();
    const complaints = {
      complaint,
    };
    console.log(complaint)
    axios
      .put("http://localhost:5000/user/user_feedbacks/:userId", complaints)
      .then(() => {
        alert("Sent");
      })
      .catch((err) => {
        alert(err);
      });
  }

  return (
    <div className="container">
      <div>
        <h3>Complaints</h3>
        <Form nSubmit={sendData}>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Complaint</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              onChange={(e) => {
                setComplaint(e.target.value);
              }}
            />
          </Form.Group>
          <input
          className="btn btn-primary"
          style={{ align: "center" }}
          type="submit"
          value="Submit"
        ></input>
        </Form>

      
      </div>
    </div>
  );
}

export default Complaints;

import React from "react";
import { Form } from "react-bootstrap";

function Complaints() {
  return (
    <div class="container">
      <div>
        <h3>Complaints</h3>
        <Form>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Complaint</Form.Label>
            <Form.Control as="textarea" rows={3} />
          </Form.Group>
        </Form>

        <input
          class="btn btn-primary"
          style={{ align: "center" }}
          type="submit"
          value="Submit"
        ></input>
      </div>
    </div>
  );
}

export default Complaints;

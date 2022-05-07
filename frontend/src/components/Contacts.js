import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { Form, FormControl } from "react-bootstrap";

function Contatcts() {
  return (
    <div class="container">
      <div style={{ paddingtop: "200" }}>
        <Form className="d-flex">
          <FormControl
            type="search"
            placeholder="Search"
            className="me-2"
            aria-label="Search"
          />
          <Button class="btn btn-primary" variant="outline-success">Search</Button>
        </Form>
      </div>

      <table class="table table-hover">
        <thead>
          <tr>
            <th scope="col">Job Seeker Name</th>
            <th scope="col">ID</th>
            <th scope="col">Email</th>
            {/* <th scope="col">Last</th>
                <th scope="col">Handle</th> */}
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">test</th>
            <td> test2</td>
            <td> test3</td>
            {/* <td>Thornton</td>
                <td>@fat</td> */}
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Contatcts;

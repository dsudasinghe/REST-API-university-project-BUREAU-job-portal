import React, { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import { Form, FormControl } from "react-bootstrap";
import axios from "axios";


function Contatcts() {

  const [userContacts, setUserContacts] = useState([]);

  useEffect(() => {
    function getUsers() {
      axios
        .get("http://localhost:5000/user/:nid/contact")
        .then((res) => {
          console.log(res.data);
          setUserContacts(res.data);
        })
        .catch((err) => {
          alert(err.message);
        });
    }
    getUsers();
  }, []);
  return (
    <div className="container">
      <h1>User Contacts Details</h1>

      <div style={{ paddingtop: "200" }}>
        <Form className="d-flex">
          <FormControl
            type="search"
            placeholder="Search"
            className="me-2"
            aria-label="Search"
          />
          <Button className="btn btn-primary" variant="outline-success">
            Search
          </Button>
        </Form>
      </div>

      <table className="table table-hover">
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

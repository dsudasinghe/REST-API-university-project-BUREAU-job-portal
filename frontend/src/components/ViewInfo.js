import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { ListGroup } from "react-bootstrap";
import axios from "axios";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 800,
  height: 500,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

function ViewInfo() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [users, setUsers] = useState([]);

  useEffect(() => {
    function getUsers() {
      axios
        .get("http://localhost:5000/user/all_info/")
        .then((res) => {
          console.log(res.data);
          setUsers(res.data);
        })
        .catch((err) => {
          alert(err.message);
        });
    }
    getUsers();
  }, []);

  return (
    <div className="container">
      <h1>User Information</h1>
      <table className="table table-hover">
        <thead>
          <tr>
            <th scope="col">Job Seeker Name</th>
            <th scope="col">View Information</th>
            {/* <th scope="col">Last</th>
                <th scope="col">Handle</th> */}
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">test</th>
            <td>
              {" "}
              <Button className="btn btn-primary" onClick={handleOpen}>
                View
              </Button>
              <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
              >
                <Box sx={style}>
                  <Typography
                    id="modal-modal-title"
                    variant="h6"
                    component="h2"
                  >
                    User Information
                  </Typography>
                  <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                    <ListGroup variant="flush">
                      <ListGroup.Item>User Id - 5555</ListGroup.Item>
                      <ListGroup.Item>Email - user@gmail.com</ListGroup.Item>
                      <ListGroup.Item>Age - 20</ListGroup.Item>
                      <ListGroup.Item>Adress- Longitude - </ListGroup.Item>
                      <ListGroup.Item>Adress- Latutude - </ListGroup.Item>
                      <ListGroup.Item>Profession - </ListGroup.Item>
                      <ListGroup.Item>Affiliation - </ListGroup.Item>

                      <ListGroup.Item>Qualifications - </ListGroup.Item>
                      <ListGroup.Item>Certificates -</ListGroup.Item>
                    </ListGroup>
                    <Button className="btn btn-primary">Delete</Button>
                    <Button className="btn btn-primary">Validate</Button>
                  </Typography>
                </Box>
              </Modal>
            </td>
            {/* <td>Thornton</td>
                <td>@fat</td> */}
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default ViewInfo;

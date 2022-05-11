import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import axios from "axios";

import { ListGroup } from "react-bootstrap";

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

function ViewComplaint() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [complaint, setComplaints] = useState([]);

  useEffect(() => {
    function getComplaints() {
      axios
        .get("http://localhost:5000/")
        .then((res) => {
          console.log(res.data);
          setComplaints(res.data);
        })
        .catch((err) => {
          alert(err.message);
        });
    }
    getComplaints();
  }, []);

  return (
    <div className="container">
      <h1>User Complaints and Feedbacks</h1>
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
                    Complaint Details
                  </Typography>
                  <Typography
                    id="modal-modal-description"
                    sx={{ mt: 2 }}
                  ></Typography>
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

export default ViewComplaint;

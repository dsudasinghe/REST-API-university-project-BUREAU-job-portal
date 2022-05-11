import React, {useState, useEffect} from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { ListGroup } from "react-bootstrap";
import axios from "axios";
import {
  GoogleMap,
  useLoadScript,
  Marker,
  InfoWindow,
} from "@react-google-maps/api";


const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 800,
  height: 900,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};
const libraries = ["places"];
const mapContainerStyle = {
  width: '400px',
  height: '500px'
};
const center = {
  lat: 43.6532,
  lng: -79.3832,
};




function Validation() {









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

//google map related-----
const { isLoaded, loadError } = useLoadScript({
  googleMapsApiKey: "AIzaSyBheNEtrngM3cbowGS3tLPwoBXlswmmSb0",
  libraries,
});
if (loadError) return "Error";
if (!isLoaded) return "Loading...";
//--------









  return (
    <div className="container">
      <h1>User Validation</h1>
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
                      
                      <ListGroup.Item> <div>
                

                <GoogleMap
     mapContainerStyle={mapContainerStyle}
     zoom={8}
     center={{
      lat: 6.8764209,
      lng: 79}
    }>
      
       <Marker position={{ lat: 6.8764209, lng:79.8}} />
     </GoogleMap>



              </div> </ListGroup.Item>

                      <ListGroup.Item>Profession - software engineer</ListGroup.Item>
                      <ListGroup.Item>Affiliation -  </ListGroup.Item>

                      <ListGroup.Item>Qualifications - 2 yr</ListGroup.Item>
                      <ListGroup.Item>Certificates -software engineering university of plymouth</ListGroup.Item>
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

export default Validation;

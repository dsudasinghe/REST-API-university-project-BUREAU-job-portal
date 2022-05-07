import React from "react";
import { Link } from "react-router-dom";

function Complaints() {
  return (
    <div class="container">
      <div>
        <div class="mb-3">
          <label for="formGroupExampleInput" class="form-label">
            Example label
          </label>
          <input
            type="text"
            class="form-control"
            id="formGroupExampleInput"
            placeholder="Example input placeholder"
          ></input>
        </div>
        <div class="mb-3">
          <label for="formGroupExampleInput2" class="form-label">
            Another label
          </label>
          <input
            type="text"
            class="form-control"
            id="formGroupExampleInput2"
            placeholder="Another input placeholder"
          ></input>
        </div>
        {/* <div>
          <div class="form-floating">
            <textarea
              class="form-control"
              placeholder="Leave a comment here"
              id="floatingTextarea2"
              style="height: 100px"
            ></textarea>
            <label for="floatingTextarea2">Comments</label>
          </div>
        </div> */}

        <div class="form-floating" style={{paddingBottom: '50px'}} >
          
          <textarea
            class="form-control"
            placeholder="Leave a comment here"
            id="floatingTextarea"
          ></textarea>
          <label for="floatingTextarea">Comments</label>
        </div>

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

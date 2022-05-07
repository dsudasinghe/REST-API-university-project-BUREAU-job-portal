import {Link} from "react-router-dom";
import React, {useCallback} from 'react';
import { textAlign } from "@mui/system";

function Qualifications (){
    return(
        <div class = "container">
            <div>
                <div class="mb-3">
                <label for="formGroupExampleInput" class="form-label">Qualifications</label>
                    <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Enter Qualifications"></input>
                </div>
                <div class="mb-3">
                <label for="formGroupExampleInput2" class="form-label">Upload Birth Certificates</label>
                    <input type="file" class="form-control" id="formGroupExampleInput2" placeholder="Another input placeholder"></input>
                </div>
                <div class="mb-3">
                <label for="formGroupExampleInput2" class="form-label">Upload CV</label>
                    <input type="file" class="form-control" id="formGroupExampleInput2" placeholder="Another input placeholder"></input>
                </div>
                <div class="mb-3">
                <label for="formGroupExampleInput2" class="form-label">Upload Copies of passport</label>
                    <input type="file" class="form-control" id="formGroupExampleInput2" placeholder="Another input placeholder"></input>
                </div>

                <input class="btn btn-primary" style={{align:"center"}} type="submit" value="Submit"></input>

                
            </div>
        </div>
    )
}

export default Qualifications;
import React from "react";
import {Link} from "react-router-dom";

function Validation (){
    return(
            <div class = "container">
            <table class="table table-hover">
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
                <th scope="row">D.S.W.Gunasekera</th>
                <td><a class="btn btn-primary" href="/viewinfo" role="button">View</a></td>
                {/* <td>Otto</td>
                <td>@mdo</td> */}
                </tr>
                <tr>
                <th scope="row">2</th>
                <td><a class="btn btn-primary" href="#" role="button">View</a></td>
                {/* <td>Thornton</td>
                <td>@fat</td> */}
                </tr>
                <tr>
                <th scope="row">3</th>
                <td><a class="btn btn-primary" href="#" role="button">View</a></td>
                {/* <td>@twitter</td> */}
                </tr>
            </tbody>
            </table>
            </div>

    )
}

export default Validation;
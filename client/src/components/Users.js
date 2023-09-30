import React from "react";
import Layout from "../utils/Layout";
import "./Users.css";

const Users = () => {
  return (
    <Layout>
      <button type="button" class="btn btn-success my-3">Add <i class="ri-user-add-line"></i></button>
      <table class="table table-striped">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">First</th>
            <th scope="col">Last</th>
            <th scope="col">Handle</th>
            <th scope="col">Edit</th>
            <th scope="col">Delete</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
            <td><i className="ri-edit-fill edit-icon"></i></td>
            <td><i className="ri-delete-bin-6-line delete-icon"></i></td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
            <td><i className="ri-edit-fill edit-icon"></i></td>
            <td><i className="ri-delete-bin-6-line delete-icon"></i></td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>Larry</td>
            <td>the Bird</td>
            <td>@twitter</td>
            <td><i className="ri-edit-fill edit-icon"></i></td>
            <td><i className="ri-delete-bin-6-line delete-icon"></i></td>
          </tr>
        </tbody>
      </table>
    </Layout>
  );
};

export default Users;

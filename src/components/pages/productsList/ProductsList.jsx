import React from 'react';
import "./ProductsList.css";
import { Link } from 'react-router-dom';

export default function ProductsList() {
    return (
        <>
          <div className="ProductsList">
            <div className="table-responsive">
                      <table className="table table-striped text-center mb-0">
                          <thead>
                              <tr>
                                  <th scope="col">ID</th>
                                  <th scope="col">Product</th>
                                  <th scope="col">Stock</th>
                                  <th scope="col">Status</th>
                                  <th scope="col">Price</th>
                                  <th scope="col">Action</th>
                              </tr>
                          </thead>
                          <tbody>
                              <tr>
                                  <th scope="row">1</th>
                                  <td>Mobile</td>
                                  <td>250</td>
                                  <td>active</td>
                                  <td>$5000</td>
                                  <td>
                                      
                                      <Link className="btn btn-warning btn-sm mr-1" to={"/editProduct?Product=Mobile"}>
                                          <i className="fas fa-edit fa-fw"></i>
                                      </Link>

                                      <Link className="btn btn-danger btn-sm" to={"/deleteProduct?Product=Mobile"}>
                                          <i className="fas fa-trash fa-fw"></i>
                                      </Link>

                                  </td>
                              </tr>
                          </tbody>
                      </table>
            </div>
          </div>
        </>
    )
}

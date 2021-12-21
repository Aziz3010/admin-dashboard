import React from 'react';
import { Link } from 'react-router-dom';
import './UserList.css';

export default function UserList() {
    return (
        <>
            <div className="UserList">
                <div className="table-responsive">
                    <table className="table table-striped text-center mb-0">
                        <thead>
                            <tr>
                                <th scope="col">ID</th>
                                <th scope="col">Username</th>
                                <th scope="col">Email</th>
                                <th scope="col">Status</th>
                                <th scope="col">Transaction</th>
                                <th scope="col">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">1</th>
                                <td>Ahmed mohamed</td>
                                <td>Ahmed@gmail.com</td>
                                <td>active</td>
                                <td>$5000</td>
                                <td>
                                    <Link className="btn btn-warning btn-sm mr-1" to={"/editUser?Username="+1}>
                                        <i className="fas fa-edit fa-fw"></i>
                                    </Link>

                                    <Link className="btn btn-danger btn-sm" to={"/deleteUser?Username="+1}>
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

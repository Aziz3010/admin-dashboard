import React from 'react';
import './editUser.css';
import img from '../../../images/p_pic.jpg';
import { Link } from 'react-router-dom';

export default function User() {
    return (
        <>
            <div className="editUser">

                <div className="headContainer">
                    <h1>Edit User</h1>
                    <Link to="/newUser" className="btn btn-primary btn-sm">New User</Link>
                </div>

                <div className="userContainer">
                    {/* left side */}
                    <div className="userShow">
                        <div className="top">

                            <img src={img} alt="userImage" className="userImage" />

                            <div className="userNameTitle">
                                <h5 className="userName">Ahmed Abdelaziz</h5>
                                <h6 className="userTitle">Frontend developer</h6>
                            </div>

                        </div>

                        <div className="bottom">
                            <h5>Account Details</h5>

                            <div className="info">
                                <i className="far fa-user fa-fw"></i>
                                <h6>Ahmed Abdelaziz</h6>
                            </div>
                            <div className="info">
                                <i className="far fa-calendar fa-fw"></i>
                                <h6>30/10/1995</h6>
                            </div>


                            <h5>Contact Details</h5>

                            <div className="info">
                                <i className="fas fa-mobile-alt fa-fw"></i>
                                <h6>01030101995</h6>
                            </div>
                            <div className="info">
                                <i className="far fa-envelope fa-fw"></i>
                                <h6>ahmed@gmail.com</h6>
                            </div>
                            <div className="info">
                                <i className="fas fa-map-marker-alt fa-fw"></i>
                                <h6>cairo / Egypt</h6>
                            </div>

                        </div>
                    </div>
                    {/* right side */}
                    <div className="userUpdate">
                        <h5>Edit</h5>
                        <form className="form">
                            <div className="left">
                                <div className="form-group my-1">
                                    <label className=" col-form-label pl-1">User Name</label>
                                    <input className="form-control form-control-sm" type="text" name="UserName" placeholder="Ahmed Abdelaziz" />
                                </div>
                                <div className="form-group my-1">
                                    <label className=" col-form-label pl-1">Date Of Birth</label>
                                    <input className="form-control form-control-sm" type="text" name="UserName" placeholder="30/10/1995" />
                                </div>
                                <div className="form-group my-1">
                                    <label className=" col-form-label pl-1">Phone</label>
                                    <input className="form-control form-control-sm" type="text" name="UserName" placeholder="01030101995" />
                                </div>
                                <div className="form-group my-1">
                                    <label className=" col-form-label pl-1">Email</label>
                                    <input className="form-control form-control-sm" type="text" name="UserName" placeholder="ahmed@gmail.com" />
                                </div>
                                <div className="form-group my-1">
                                    <label className=" col-form-label pl-1">Location</label>
                                    <input className="form-control form-control-sm" type="text" name="UserName" placeholder="cairo / Egypt" />
                                </div>
                            </div>

                            <div className="right">
                                <div className="form-group m-0 image">
                                    <img src={img} alt="userImage" className="rightUserImage" />
                                    <label className="m-0" htmlFor="exampleFormControlFile1">
                                        <i className="fas fa-upload fa-fw"></i>
                                    </label>
                                    <input type="file" className="d-none form-control-file" id="exampleFormControlFile1" />
                                </div>
                                <button className="btn btn-primary btn-sm mt-3">Update</button>
                            </div>
                        </form>
                    </div>
                </div>

            </div>
        </>
    )
}

import React from 'react';
import './NewUser.css';

export default function NewUser() {
    return (
        <>
            <div className="NewUser">
                <form>
                    {/* UserName */}
                    <div className="form-group d-flex justify-content-center align-items-center">
                        <label className="col-2 col-form-label text-center">User Name</label>
                        <input className="col-10 form-control" type="text" name="UserName" />
                    </div>

                    {/* FullName */}
                    <div className="form-group d-flex justify-content-center align-items-center">
                        <label className="col-2 col-form-label text-center">Full Name</label>
                        <input className="col-10 form-control" type="text" name="FullName" />
                    </div>

                    {/* Email */}
                    <div className="form-group d-flex justify-content-center align-items-center">
                        <label className="col-2 col-form-label text-center">Email</label>
                        <input className="col-10 form-control" type="email" name="Email" />
                    </div>

                    {/* Password */}
                    <div className="form-group d-flex justify-content-center align-items-center">
                        <label className="col-2 col-form-label text-center">Password</label>
                        <input className="col-10 form-control" type="password" name="Password" />
                    </div>

                    {/* Phone */}
                    <div className="form-group d-flex justify-content-center align-items-center">
                        <label className="col-2 col-form-label text-center">Phone</label>
                        <input className="col-10 form-control" type="text" name="Phone" />
                    </div>

                    {/* Gender */}
                    <div className="form-group d-flex justify-content-center align-items-center">
                        <label className="col-2 col-form-label text-center">Gender</label>
                        <div className="col-10 pl-0 d-flex justify-content-start align-items-start flex-column">

                            <div className="form-group m-0">
                                <input type="radio" id="Male" name="gender" value="Male" />
                                <label htmlFor="Male" className="m-0 ml-1">Male</label>
                            </div>

                            <div className="form-group m-0">
                                <input type="radio" id="Female" name="gender" value="Female" />
                                <label htmlFor="Female" className="m-0 ml-1">Female</label>
                            </div>

                        </div>
                    </div>

                    {/* Address */}
                    <div className="form-group d-flex justify-content-center align-items-center">
                        <label className="col-2 col-form-label text-center">Address</label>
                        <input className="col-10 form-control" type="text" name="Address" />
                    </div>

                    {/* Active */}
                    <div className="form-group d-flex justify-content-center align-items-center">
                        <label className="col-2 col-form-label text-center">Active</label>
                        <div className="col-10 pl-0">
                            <select name="active" id="active">
                                <option value="yes">Yes</option>
                                <option value="no">No</option>
                            </select>
                        </div>
                    </div>

                    {/* BTN */}
                    <div className="form-group d-flex justify-content-end">
                        <button className="btn btn-primary">Create</button>
                    </div>

                </form>
            </div>
        </>
    )
}

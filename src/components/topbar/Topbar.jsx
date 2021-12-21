import React from 'react'
import './Topbar.css'

import img from '../../images/p_pic.jpg';

export default function Topbar() {
    return (
        <>
            <div className="topbar">
                <div className="topbarWrapper">

                    {/* logo */}
                    <div className="topLeft">
                        <span className="logo">Azizadmin</span>
                    </div>
                    {/* right side */}
                    <div className="topRight">
                        {/* notifications */}
                        <div className="topbarIcons">
                            <i className="far fa-bell"></i>
                            <span className="notiBadge">2</span>
                        </div>
                        {/* language */}
                        <div className="topbarIcons">
                            <i className="fas fa-globe"></i>
                        </div>
                        {/* settings */}
                        <div className="topbarIcons">
                            <i className="fas fa-cog"></i>
                        </div>
                        {/* personal pic */}
                        <div className="topbarImg">
                            <img src={img} alt="personal pic" className="p-img" />
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
};
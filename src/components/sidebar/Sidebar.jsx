import React from 'react';
import './Sidebar.css';
import { Link } from 'react-router-dom';

export default function Sidebar() {
    return (
        <>
            <div className="sidebar">

                <div className="sidebarWrapper">
                    {/* Dashboard */}
                    <div className="sidebarMenu">

                        <h3 className="sidebarTitle">Dashboard</h3>

                        <ul className="sidebarList">

                            <li className="sidebarListItem activ">
                                <i className="fas fa-home fa-fw"></i>
                                <Link to="/">Home</Link>
                            </li>

                            <li className="sidebarListItem">
                                <i className="fas fa-chart-line fa-fw"></i>
                                <Link to="/Analytics">Analytics</Link>
                            </li>

                            <li className="sidebarListItem">
                                <i className="fas fa-shopping-cart fa-fw"></i>
                                <Link to="/Sales">Sales</Link>
                            </li>

                        </ul>

                    </div>
                    {/* Quick Menu */}
                    <div className="sidebarMenu">

                        <h3 className="sidebarTitle">Quick Menu</h3>

                        <ul className="sidebarList">

                            <li className="sidebarListItem activ">
                                <i className="far fa-user fa-fw"></i>
                                <Link to="/Users">Users</Link>
                            </li>

                            <li className="sidebarListItem activ">
                                <i className="fas fa-store fa-fw"></i>
                                <Link to="/Products">Products</Link>
                            </li>

                            <li className="sidebarListItem">
                                <i className="fas fa-dollar-sign fa-fw"></i>
                                <Link to="/Transactions">Transactions</Link>
                            </li>

                            <li className="sidebarListItem">
                                <i className="far fa-chart-bar fa-fw"></i>
                                <Link to="/Reports">Reports</Link>
                            </li>

                        </ul>

                    </div>
                    {/* Notifications */}
                    <div className="sidebarMenu">

                        <h3 className="sidebarTitle">Notifications</h3>

                        <ul className="sidebarList">

                            <li className="sidebarListItem">
                                <i className="far fa-envelope fa-fw"></i>
                                <Link to="/Mail">Mail</Link>
                            </li>

                            <li className="sidebarListItem">
                                <i className="far fa-comments fa-fw"></i>
                                <Link to="/Feedback">Feedback</Link>
                            </li>

                            <li className="sidebarListItem">
                                <i className="far fa-comment-alt fa-fw"></i>
                                <Link to="/Messages">Messages</Link>
                            </li>

                        </ul>

                    </div>
                    {/* Staff */}
                    <div className="sidebarMenu">

                        <h3 className="sidebarTitle">Staff</h3>

                        <ul className="sidebarList">

                            <li className="sidebarListItem">
                                <i className="fas fa-briefcase fa-fw"></i>
                                <Link to="/Manage">Manage</Link>
                            </li>

                            <li className="sidebarListItem">
                                <i className="fas fa-chart-line fa-fw"></i>
                                <Link to="/Analytics">Analytics</Link>
                            </li>

                            <li className="sidebarListItem">
                                <i className="fas fa-info-circle fa-fw"></i>
                                <Link to="/Reports">Reports</Link>
                            </li>

                        </ul>

                    </div>

                </div>
            </div>
        </>
    )
}

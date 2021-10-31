import React, { useState } from 'react';
import { Col, ListGroup, Row } from 'react-bootstrap';
import AddPackage from '../AddPackage/AddPackage';
import AllBooking from '../AllBooking/AllBooking';
import MyBooking from '../MyBooking/MyBooking';
import './Dashboard.css';

const Dashboard = () => {
    const [control, setControl] = useState("add-package");
    console.log(control);

    return (
        <div className="container my-5">
            <h2 className="text-center fs-1 fw-bold text-secondary my-5">Dashboard</h2>
            <Row>
                <Col xs={12} sm={6} md={4}>
                    <div className="bg-dark text-light">
                        {/* <ul>
                            <li
                                onclick={() => setControl("my-orders")}
                                className="dash-item">
                                My Orders
                            </li>
                            <li onclick={() => setControl("manage-orders")} className="dash-item">
                                Manage All Orders
                            </li>
                            <li onclick={() => setControl("manage-packages")} className="dash-item">
                                Manage Packages
                            </li>
                            <li onclick={() => setControl("add-package")} className="dash-item">
                                Add New Package

                            </li>
                        </ul> */}
                        <ListGroup>
                            <ListGroup.Item onclick={() => setControl('clicked')} className="dash-item">
                                My Orders
                            </ListGroup.Item>
                            <ListGroup.Item onclick={() => setControl('manage-orders')} className="dash-item">
                                Manage All Orders
                            </ListGroup.Item>
                            <ListGroup.Item onclick={() => setControl('manages-packages')} className="dash-item">
                                Manage Packages
                            </ListGroup.Item>
                            <ListGroup.Item onclick={() => setControl('add-package')} className="dash-item">
                                Add New Package
                            </ListGroup.Item>
                        </ListGroup>
                    </div>
                </Col>
                <Col xs={12} sm={6} md={8}>
                    <div className="bg-light">
                        {
                            control === 'add-package' && <AddPackage></AddPackage>
                        }
                        {
                            control === 'manage-orders' && <AllBooking></AllBooking>
                        }
                        {
                            control === 'my-orders' && <MyBooking></MyBooking>
                        }
                        {/* {
                            control === 'manages-packages' && <AddPackage></AddPackage>
                        } */}
                    </div>
                </Col>
            </Row>
        </div>
    );
};

export default Dashboard;
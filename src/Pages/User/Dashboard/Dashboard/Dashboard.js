import React, { useState } from 'react';
import { Col, ListGroup, Row } from 'react-bootstrap';
import AddPackage from '../AddPackage/AddPackage';
import AllBooking from '../AllBooking/AllBooking';
import ManagePackages from '../ManagePackages/ManagePackages';
import MyBooking from '../MyBooking/MyBooking';
import './Dashboard.css';

const Dashboard = () => {
    const [control, setControl] = useState("manages-packages");

    return (
        <div className="container my-5">
            <h2 className="text-center fs-1 fw-bold text-secondary my-5">Dashboard</h2>
            <Row>
                <Col xs={12} sm={6} md={4}>
                    <div className="bg-dark text-light">
                        <ListGroup>
                            <ListGroup.Item onclick={() => setControl('manage-bookings')} className="dash-item">
                                Manage Bookings
                            </ListGroup.Item>
                            <ListGroup.Item onclick={() => setControl('my-booking')} className="dash-item">
                                My Booking
                            </ListGroup.Item>
                            <ListGroup.Item onclick={() => setControl('manage-package')} className="dash-item">
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
                            control === 'manage-bookings' && <AllBooking></AllBooking>
                        }
                        {
                            control === 'my-booking' && <MyBooking></MyBooking>
                        }
                        {
                            control === 'manages-packages' && <ManagePackages></ManagePackages>
                        }
                        {
                            control === 'add-package' && <AddPackage></AddPackage>
                        }
                    </div>
                </Col>
            </Row>
        </div>
    );
};

export default Dashboard;
import React from 'react';
import { Col, ListGroup, Row } from 'react-bootstrap';
import AddPackage from '../AddPackage/AddPackage';
import AllBooking from '../AllBooking/AllBooking';
import MyBooking from '../MyBooking/MyBooking';

const Dashboard = () => {
    return (
        <div className="container my-5">
            <h2 className="text-center fs-1 fw-bold text-secondary my-5">Dashboard</h2>
            <Row>
                <Col xs={12} sm={6} md={4}>
                    <div className="bg-dark text-light">
                        {/* <MyBooking></MyBooking>
                        <AllBooking></AllBooking>
                        <AddPackage></AddPackage> */}
                        {/* <ul>
                            <li>My Orders</li>
                            <li>Manage All Orders</li>
                            <li>Add New Package</li>
                        </ul> */}
                        <ListGroup>
                            <ListGroup.Item>
                                My Orders
                            </ListGroup.Item>
                            <ListGroup.Item>
                                Manage All Orders
                            </ListGroup.Item>
                            <ListGroup.Item>
                                Add New Package
                            </ListGroup.Item>
                        </ListGroup>
                    </div>
                </Col>
                <Col xs={12} sm={6} md={8}>
                    <div className="bg-light">
                        <table class="table table-hover">
                            <thead>
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">Name</th>
                                    <th scope="col">Email</th>
                                    <th scope="col">Delete</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th scope="row">1</th>
                                    <td>Mark</td>
                                    <td>abc@xyz.com</td>
                                    <td><button className="btn btn-danger">Delete</button></td>
                                </tr>
                                <tr>
                                    <th scope="row">2</th>
                                    <td>Jacob</td>
                                    <td>abc@xyz.com</td>
                                    <td><button className="btn btn-danger">Delete</button></td>
                                </tr>
                                <tr>
                                    <th scope="row">3</th>
                                    <td>Phill</td>
                                    <td>abc@xyz.com</td>
                                    <td><button className="btn btn-danger">Delete</button></td>
                                </tr>
                                <tr>
                                    <th scope="row">4</th>
                                    <td>Mark</td>
                                    <td>abc@xyz.com</td>
                                    <td><button className="btn btn-danger">Delete</button></td>
                                </tr>
                                <tr>
                                    <th scope="row">5</th>
                                    <td>Jacob</td>
                                    <td>abc@xyz.com</td>
                                    <td><button className="btn btn-danger">Delete</button></td>
                                </tr>
                                <tr>
                                    <th scope="row">6</th>
                                    <td>Phill</td>
                                    <td>abc@xyz.com</td>
                                    <td><button className="btn btn-danger">Delete</button></td>
                                </tr>
                                <tr>
                                    <th scope="row">7</th>
                                    <td>Mark</td>
                                    <td>abc@xyz.com</td>
                                    <td><button className="btn btn-danger">Delete</button></td>
                                </tr>
                                <tr>
                                    <th scope="row">8</th>
                                    <td>Jacob</td>
                                    <td>abc@xyz.com</td>
                                    <td><button className="btn btn-danger">Delete</button></td>
                                </tr>
                                <tr>
                                    <th scope="row">9</th>
                                    <td>Phill</td>
                                    <td>abc@xyz.com</td>
                                    <td><button className="btn btn-danger">Delete</button></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </Col>
            </Row>
        </div>
    );
};

export default Dashboard;
import React from 'react';
import { Col, Nav, Row } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
    return (
        <div className="bg-dark text-light mt-5 py-5">
            <div className="container">
                <Row xs={1} sm={1} md={2} lg={4} xl={4}>
                    <Col>
                        <h3>About Us</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde velit explicabo ipsum ab ullam in repellat eaque architecto illum ducimus dignissimos consequuntur suscipit incidunt, mollitia aliquid itaque praesentium, enim veniam! Nihil voluptatibus id non mollitia soluta repudiandae perferendis quod architecto?</p>
                    </Col>
                    <Col>
                        <h3>Social</h3>
                        <Nav className="d-flex flex-column">
                            <NavLink to="/">Facebook</NavLink>
                            <NavLink to="/">Instagram</NavLink>
                            <NavLink to="/">Twitter</NavLink>
                            <NavLink to="/">LinkedIn</NavLink>
                        </Nav>
                    </Col>
                    <Col>
                        <h3>Blogs</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, ad itaque aut officiis possimus dolores deleniti quaerat? Eligendi, commodi debitis.</p>
                    </Col>
                    <Col>
                        <h3>Contact Us</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic quam illo ad quis totam? Nisi natus quidem facere et atque quis temporibus hic magni, ea quo! Minima ipsam numquam architecto.</p>
                    </Col>
                </Row>
            </div>
        </div>
    );
};

export default Footer;
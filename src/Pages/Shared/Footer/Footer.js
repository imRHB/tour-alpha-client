import { faFacebookSquare, faInstagramSquare, faLinkedin, faTwitterSquare } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faPhoneSquareAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Col, Nav, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Footer.css';
import logo from '../../../images/logo.png';

const envelopeIcon = <FontAwesomeIcon icon={faEnvelope} />;
const phoneIcon = <FontAwesomeIcon icon={faPhoneSquareAlt} />;
const facebookIcon = <FontAwesomeIcon icon={faFacebookSquare} />;
const instagramIcon = <FontAwesomeIcon icon={faInstagramSquare} />;
const twitterIcon = <FontAwesomeIcon icon={faTwitterSquare} />;
const linkedInIcon = <FontAwesomeIcon icon={faLinkedin} />;

const Footer = () => {
    return (
        <div className="bg-dark text-light mt-5 py-5">
            <div className="container">
                <Row xs={1} md={2} lg={4} className="g-3">
                    <Col>
                        <p className="fs-3 fw-bold text-danger"><span><img className="me-3" src={logo} alt="logo" style={{ width: '40px', height: '40px' }} /></span>TOUR ALPHA</p>
                        <p><span className="me-2">{phoneIcon}</span> 012 3456 789</p>
                        <p><span className="me-2">{envelopeIcon}</span> info@tour-alpha.web.app</p>
                        <p><span className="me-2">{envelopeIcon}</span> help@tour-alpha.web.app</p>
                        <p><span className="me-2">{envelopeIcon}</span> book@tour-alpha.web.app</p>
                    </Col>
                    <Col>
                        <p className="fs-4 text-info">EXPLORE</p>
                        <Nav className="d-flex flex-column footer-link">
                            <Link to="/packages" className="fs-5">Packages</Link>
                            <Link to="/about" className="fs-5">About</Link>
                            <Link to="#" className="fs-5">Blogs</Link>
                            <Link to="/contact" className="fs-5">Contact</Link>
                        </Nav>
                    </Col>
                    <Col>
                        <p className="fs-4 text-info">SOCIAL</p>
                        <Nav className="gap-3 footer-link-social">
                            <Nav.Link href="https://www.facebook.com/" target="_blank" className="fs-2">{facebookIcon}</Nav.Link>
                            <Nav.Link href="https://www.instagram.com/" target="_blank" className="fs-2">{instagramIcon}</Nav.Link>
                            <Nav.Link href="https://www.twitter.com/" target="_blank" className="fs-2">{twitterIcon}</Nav.Link>
                            <Nav.Link href="https://www.linkedin.com/" target="_blank" className="fs-2">{linkedInIcon}</Nav.Link>
                        </Nav>
                    </Col>
                    <Col>
                        <p className="fs-4 text-info">ABOUT US</p>
                        <p>We are amongst the largest travel company in the world. We are the planning, implementation and operations management arm of the Tour Alpha Group, Asia’s largest integrated tour and travel services provider. We are the trusted advisor of investors, Governments and other entities.</p>
                    </Col>
                </Row>
                <div className="text-center mt-5">
                    <p className="text-muted"><small>Copyright 2021, Tour Alpha</small></p>
                </div>
            </div>
        </div>
    );
};

export default Footer;
import React from 'react';
import { Col, Row } from 'react-bootstrap';
import './Activity.css';
import act1 from '../../../images/activity/adventure.png'
import act2 from '../../../images/activity/trekking.png'
import act3 from '../../../images/activity/camp-fire.png'
import act4 from '../../../images/activity/off-road.png'
import act5 from '../../../images/activity/camping.png'
import act6 from '../../../images/activity/exploring.png'

const Activity = () => {
    return (
        <div className="container -my-5">
            <h2 className="text-center fs-1 fw-bold text-secondary my-5 text-uppercase">Adventure and Activity</h2>

            <Row xs={1} sm={2} md={3} lg={3} xl={6} className="g-4 g-lg-5 g-xl-4">
                <Col className="h-100">
                    <div className="text-center p-3 rounded-3 activity-item">
                        <img src={act1} alt="" />
                        <p className="fs-5 fw-bold mt-2">Adventure</p>
                    </div>
                </Col>
                <Col className="h-100">
                    <div className="text-center p-3 rounded-3 activity-item">
                        <img src={act2} alt="" />
                        <p className="fs-5 fw-bold mt-2">Trekking</p>
                    </div>
                </Col>
                <Col className="h-100">
                    <div className="text-center p-3 rounded-3 activity-item">
                        <img src={act3} alt="" />
                        <p className="fs-5 fw-bold mt-2">Camp Fire</p>
                    </div>
                </Col>
                <Col className="h-100">
                    <div className="text-center p-3 rounded-3 activity-item">
                        <img src={act4} alt="" />
                        <p className="fs-5 fw-bold mt-2">Off Road</p>
                    </div>
                </Col>
                <Col className="h-100">
                    <div className="text-center p-3 rounded-3 activity-item">
                        <img src={act5} alt="" />
                        <p className="fs-5 fw-bold mt-2">Camping</p>
                    </div>
                </Col>
                <Col className="h-100">
                    <div className="text-center p-3 rounded-3 activity-item">
                        <img src={act6} alt="" />
                        <p className="fs-5 fw-bold mt-2">Exploring</p>
                    </div>
                </Col>
            </Row>
        </div>
    );
};

export default Activity;
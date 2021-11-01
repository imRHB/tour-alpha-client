import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Row } from 'react-bootstrap';
import Member from '../Member/Member';

const TeamMember = () => {
    const [team, setTeam] = useState([]);

    useEffect(() => {
        fetch('https://shrieking-goosebumps-58774.herokuapp.com/team')
            .then(res => res.json())
            .then(data => setTeam(data));
    }, []);

    return (
        <div className="container my-5">
            <h2 className="text-center fs-1 fw-bold text-secondary my-5">Our Team and Guide</h2>
            <Row xs={1} sm={2} md={3} lg={3} xl={6} className="g-3">
                {
                    team.map(member => <Member
                        key={member._id}
                        member={member}
                    ></Member>)
                }
            </Row>
        </div>
    );
};

export default TeamMember;
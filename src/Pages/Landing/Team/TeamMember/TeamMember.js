import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Row } from 'react-bootstrap';
import Member from '../Member/Member';

const TeamMember = () => {
    const [team, setTeam] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/team')
            .then(res => res.json())
            .then(data => setTeam(data));
    }, []);

    return (
        <div className="container my-5">
            <h2>Leading Person</h2>
            <Row xs={1} md={2} lg={3} xl={3} className="g-5">
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
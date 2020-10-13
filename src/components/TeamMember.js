import React from 'react';
import '../App.css';

function TeamMember(props) {
    const { name, role, email, location} = props
    return (
        <div className="TeamMember">
            <h3>Team Member: {name}</h3>
            <h4>Role: {role}</h4>
            <p>Email: {email}</p>
            <p>Location: {location}</p>
        </div>
    );
}

export default TeamMember;
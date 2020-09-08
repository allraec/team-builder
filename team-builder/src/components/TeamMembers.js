import React from 'react';

const TeamMembers = props => {
    return(
       props.teamMember.map(member => {
                return(
                <div className="member" key={member.id}>
                    <p>{member.name}</p>
                    <p>{member.email}</p>
                    <p>{member.role}</p>
                </div>
       )})
       
    )
}

export default TeamMembers;
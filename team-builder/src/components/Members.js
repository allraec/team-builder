import React from "react";
import styled from 'styled-components';

const MembersContainer = styled.div`

    display: flex;
    flex-wrap: wrap;
    margin: auto;
    width: 50%;

`
const MembersCard = styled.div`

    margin: 2%;

`

function Members(props) {

    return(
        <MembersContainer>
            {props.members.map( member => (

                <MembersCard key={member.id}>
                    <h2>{member.name}</h2>
                    <p>{member.email}</p>
                    <p>{member.role}</p>
                </MembersCard>
            ))}
        </MembersContainer>
    );
};

export default Members;
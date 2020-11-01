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
    border: 1px dashed;
    padding: 1%;
    border-radius: 5%;

`

function Members(props) {

    return(
        <MembersContainer>
            {props.members.map( member => (

                <MembersCard key={member.id}>
                    <h2>{member.name}</h2>
                    <p>{member.email}</p>
                    <p className='role'>{member.role}</p>
                </MembersCard>
            ))}
        </MembersContainer>
    );
};

export default Members;
import React, { useState } from "react";

function Form(props) {

    const [member, setMember] = useState({name: "", email: "", role: ""});

    const handleChanges = (event) => {

        setMember({...member, [event.target.name]: event.target.value });
    }

    const submitForm = (event) => {
        event.preventDefault();
        props.addNewMember(member);
        setMember({name: "", email: "", role: ""});
    }

    return(

        <form onSubmit={submitForm}>
            <label htmlFor='name'>Name: </label>
            <input 
                id='name'
                name='name'
                type='text'
                placeholder='Full Name'
                onChange={handleChanges}
                value={member.name}
                required
            />
            <br />
            <br />
            <label>Email: </label>
            <input 
                id='email'
                name='email'
                type='text'
                placeholder='Email Address'
                onChange={handleChanges}
                value={member.email}
                required
            />
            <br />
            <br />
            <label>Role: </label>
            <input 
                id='role'
                name='role'
                type='text'
                placeholder='Role'
                onChange={handleChanges}
                value={member.role}
                required
            />
            <br />
            <br />
            <button type='submit'>Add Member</button>
        </form>

    );
}

export default Form;
import React, { useState } from 'react';

const Form = props => {

    const [member, setMember] = useState({
        name: '',
        email: '',
        role: ''
     })

    const handleChanges = e => {
        setMember({...member, [e.target.name]: e.target.value})
       
    }

    const submitForm = e => {
        e.preventDefault();
        props.addMember(member);
        setMember({name: '', email: '', role: ''})
    }

    return(
        <div>
        <form onSubmit={submitForm}>
            <label>Name: </label>
            <input 
                id="name"
                name="name" 
                type="text" 
                value={member.name}
                onChange={handleChanges}
                placeholder={"FirstName LastName"}/><br/>
            <label>Email: </label>
            <input 
                id="email"
                name="email" 
                type="email" 
                value={member.email}
                onChange={handleChanges}
                placeholder={"username@email.com"}/><br/>
            <label>Role: </label>
            <input 
                id="role"
                name="role" 
                type="text" 
                value={member.role}
                onChange={handleChanges}
                placeholder={"i.e. Back End Engineer"}/><br/>
            <button type="enter">Enter</button>
        </form>
    </div>
    )
};

export default Form;
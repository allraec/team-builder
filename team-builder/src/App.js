import React, { useState } from 'react';
import Form from './components/Form.js';
import './App.css';
import TeamMembers from './components/TeamMembers.js';

function App() {

  const [teamMember, setTeamMember] = useState([{
    id: '1', 
    name: 'Allison Castaneda',
    email: 'allraec@yahoo.com',
    role: 'Front End Engineer'
  }])

  const addMember = member => {
    const newMember = {
      id: Date.now(), 
      name: member.name,
      email: member.email,
      role: member.role
    };
    setTeamMember([...teamMember, newMember])
  }

  return (
    <div className="App">
      <h1>Team Builder</h1>
      <Form addMember={addMember}/>
      <TeamMembers teamMember={teamMember}/>
    </div>
  );
}

export default App;

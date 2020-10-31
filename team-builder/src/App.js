import React, {useState} from "react";
import Form from "./components/Form";
import './App.css';
import Members from "./components/Members";

function App() {

  const [members, setMembers] = useState([{id: 1, name: "Allison Castaneda", email: "allraec@email.com", role: "Front End Web Engineer"}]);

  const addNewMember = (member) => {
    const newMember = {
      id: Date.now(),
      name: member.name,
      email: member.email,
      role: member.role
    };

    setMembers([...members, newMember]);
  };

  return (
    <div className="App">
      <h1>My Team Members</h1>
      <Form addNewMember={addNewMember}/>
      <Members members={members}/>
    </div>
  );
}

export default App;

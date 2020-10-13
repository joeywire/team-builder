import React, {useState} from 'react';
import Form from './components/Form';
import TeamMemeber from './components/TeamMember'
import teamData from './data'
import './App.css';

const initalFormData = {
  name: "",
  email: "",
  location: "",
  role: ""
}



function App() {
  
  const [teamMembers, setTeamMembers] = useState(teamData);
  const [formData, setFormData] = useState(initalFormData);

  const updateForm = (name, value) => {
    setFormData({
      ...formData,
      [name]: value
    })
  }

  const submitForm = () => {
    const newMember = {
      name: formData.name,
      email: formData.email,
      location: formData.location,
      role: formData.role
    }

    if (!newMember.name || !newMember.email || !newMember.location || !newMember.role){
      alert('Invalid Input detected - Make sure you complete the Form before submitting!')
      return
    }

    setTeamMembers([...teamMembers, newMember]);
    setFormData(initalFormData);
  }

  return (
    <div className="App">
      <h1>Team Builder APP</h1>
      <Form 
        values={formData}
        update={updateForm}
        submit={submitForm}
      />
      <div className='member-container'>
        {teamMembers.map((member) => {
          return <TeamMemeber 
          name={member.name} 
          role={member.role}
          email={member.email}
          location={member.location} />
        })}
      </div>
      {/* Map over Team Member Data - feeding info down as props to TeamMemeber   */}
    </div>
  );
}

export default App;

import React from 'react';
import Form from './components/Form';
import TeamMemeber from './components/TeamMember'
import teamData from './data'
//Import TeamMemberData

import './App.css';

function App() {
  console.log(teamData);
  return (
    <div className="App">
      <h1>Team Builder APP</h1>
      <Form />
      <div className='member-container'>
        {teamData.map((member) => {
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

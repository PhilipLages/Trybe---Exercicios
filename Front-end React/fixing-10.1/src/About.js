import React from "react";

class About extends React.Component {
  render() {
    const skills = ['HTML', 'CSS', 'JS', 'Jest', 'BootStrap'] // adicione mais habilidades aqui
    const jsxSkills = skills.map((skill, idx) => <li key={idx}>{skill}</li>) // cria um array de tags <li>
    return (
      <div className="App">
        <h1>Philip</h1>
        <p>Full Stack Web Development Student</p>
        <h2>My skills</h2>
        <ul>
          {jsxSkills}
        </ul>  
      </div>
    );
  }
}

export default About;
import React from 'react'
import './Skills.css'
const Skills = () => {
  return (
    <div className='skills'>
        <div className="skill-title">
        <h1>My Skills</h1>
      </div>
      <div className="skill">
        <p>HTML & CSS</p> <hr style ={{width: '85%'}}></hr>
      </div>
      <div className="skill">
        <p>Python</p> <hr style ={{width: '70%'}}></hr>
      </div>
      <div className="skill">
        <p>Machine Learning</p> <hr style ={{width: '45%'}}></hr>
      </div>
      <div className="skill">
        <p>React JS</p> <hr style ={{width: '80%'}}></hr>
      </div>
      <div className="skill">
        <p>Javascript</p> <hr style ={{width: '80%'}}></hr>
      </div>
    </div>
  )
}

export default Skills

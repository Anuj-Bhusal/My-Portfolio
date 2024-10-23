import React from 'react';
import './About.css';
import About_me from '../../assets/About_me.jpeg';

const About = () => {
  return (
    <div className="about">
      <div className="about-title">
        <h1>About Me</h1>
      </div>
      <div className="about-sections">
        <div className="about-left">
          <img src={About_me} alt="About Me" className="about-me-img" />
        </div>
        <div className="about-right">
          <div className="about-para">
            <p>
              A 20-year-old passionate learner currently pursuing a BSc (Hons) in Computer Science with Artificial Intelligence at Sunway College Kathmandu, which is affiliated with Birmingham City University, Birmingham.
            </p>
          </div>
        </div>
      </div>
      <div className="about-achievements">
        <div className="about-achievement">
          <h1>Bronze Medal</h1>
          <p>IN INNOVATION FEST</p>
        </div><hr/>
        <div className="about-achievement">
          <h1>2+</h1>
          <p>YEARS OF EXPERIENCE</p>
        </div>
      </div>
    </div>
  );
};

export default About;

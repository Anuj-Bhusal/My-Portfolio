import React from 'react';
import './Projects.css';
import mywork_data from '../../assets/mywork_data';

const Projects = () => {
  return (
    <div className='projects'>
      <div className="project-title">
        <h1>My Completed Projects</h1>
      </div>
      <div className="project-container">
        {mywork_data.map((project, i) => (
          <div className="project-card" key={i}>
            <img src={project.w_img} alt={project.w_name} className="project-image" />
            <div className="project-details">
              <h3>{project.w_name}</h3>
              <p>{`Project ${project.w_no}`}</p>
              {/* Use w_link for individual project links */}
              <a href={project.w_link} target="_blank" rel="noopener noreferrer">
                View on GitHub
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;

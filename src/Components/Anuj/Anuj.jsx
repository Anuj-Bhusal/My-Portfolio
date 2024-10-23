import React from 'react';
import './Anuj.css';
import Pic from '../../assets/Pic.jpg';
import {useNavigate } from 'react-router-dom';

const Anuj = () => {
  let navigate = useNavigate()
  return (
    <div className="Anuj">
      <img src={Pic} alt="Anuj Bhusal" />
      <h1><span>I'm Anuj Bhusal</span>, a Computer Science student based in Nepal.</h1>
      <p>
        A 20-year-old passionate learner currently pursuing a BSc (Hons) in 
        Computer Science with Artificial Intelligence at Sunway College Kathmandu, which is affiliated 
        with Birmingham City University, Birmingham.
      </p>
      <div className="Anuj-action">
        <div className="Anuj-connect" onClick={
        () => navigate('/contact', {
          replace: true, 
        })
        }>Connect with me</div>
        <div className="Anuj-resume" onClick={
        () => navigate('/resume', {
          replace: true, 
        })
        } >My Resume</div>
      </div>
    </div>
  );
};

export default Anuj;

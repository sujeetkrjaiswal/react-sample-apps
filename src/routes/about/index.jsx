import React from 'react';
import { Link } from 'react-router-dom';

const About = () => (
  <div className="jumbotron">
    <div className="container" >
      <h1 className="heading">Sujeet Kr. Jaiswal</h1>
      <p>...</p>
      <p>
        <Link className="btn btn-primary btn-lg" to="http://sujeetjaiswal.com/" target="_blank"> Visit My Personal Website</Link>
      </p>
    </div>
  </div>
);

export default About;

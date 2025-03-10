import React from 'react';
import './GithubLink.scss';

const GithubLink = ({ url }) => {
  return (
    <div className="github-link">
      <h3>GitHub</h3>
      <a href={url} target="_blank" rel="noopener noreferrer">
        {url}
      </a>
    </div>
  );
};

export default GithubLink;

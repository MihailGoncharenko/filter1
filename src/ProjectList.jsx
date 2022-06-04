import React from 'react';

function ProjectList({ projects }) {
  return (
    projects.map((item) => (
      <div>
        <img src={item.img}/>
      </div>
    ))
  );
}

export default ProjectList;
import React, { useState } from 'react';
import ProjectList from './ProjectList';
import Toolbar from './toolbar';

function Portfolio({ projectList }) {
  let buttons = ['All', 'Websites', 'Flayers', 'Business Cards'];
  let selected = 'All';
  let [filtered, setfiltered] = useState(projectList);
  let filter = (event) => {
    let current = event.target.textContent;
    if (current === 'All') {
      setfiltered(projectList);
    } else {
      setfiltered(projectList.filter(item => item.type === current));
    }
    selected = current;
  }

  return (
    <div>
      <Toolbar  filters={buttons} selected={selected} onSelectFilter={filter}/>
      <div>
        <ProjectList projects={filtered} /> 
      </div>
    </div>
    );
}

export default Portfolio;
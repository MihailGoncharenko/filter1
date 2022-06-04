import React from 'react';
import './App.css';
import Portfolio from './portfolio';
import Images from './images'

function App() {
  return (
    <div className='App'>
      <Portfolio projectList={Images} />
    </div>
  );
}

export default App;
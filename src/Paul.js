import React from 'react';
import logo from './logo.svg';
import './App.css';



const Paul = props => {
    
  

  return (
    <div >
      <header className="App-header">
          
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hi Naga ; How are you ??
        </p>
        <button onClick={props.click}>Click Here</button>
        
        <button onClick={props.addTrip}>Please don't Click Here</button>
        
      </header>
    </div>
  );

  }

export default Paul;

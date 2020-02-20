import React from 'react';
import logo from './logo.svg';
import './App.css';

class  AnotherComponent extends React.Component {
    constructor(props) {
        super(props)
        this.state = { isEmptyState: true }
 
    }
  render() {
  return (
    <div >
      
        <h1 style={{color:"blue"}}>Hey Paul</h1>
        <p>
        <span style={{color:"rgb(184, 202, 22)"}}> I KNOW YOU WILL CLICK THIS BUTTON </span> 
        <span style={{color:"red"}}>(Its human tendency)</span> </p>
        
       
    </div>
  );
}
}

export default AnotherComponent;

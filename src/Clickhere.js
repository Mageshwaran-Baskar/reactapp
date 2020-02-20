import React from 'react';


class  Clickhere extends React.Component {
    constructor(props) {
        super(props)
        this.state = { isEmptyState: true }
 
    }
  render() {        
  return (
    <div >
      
        <h1 style={{color:"blue"}}>Hey Paul</h1>
        <p>
        <span style={{color:"rgb(184, 202, 22)"}}> Great you listened to my words </span> 
        <span style={{color:"red"}}>(But Its not the actual human tendency)</span> </p>
        
       
    </div>
  );
}
}

export default Clickhere;

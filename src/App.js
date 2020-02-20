import React from 'react';
import Paul from './paul';
import AnotherComponent from './AnotherComponent';
import Clickhere from './Clickhere';


class  App extends React.Component {
  constructor(props) {
    super(props)
    this.state = { isEmptyState: true , isAddTripState:false , isClick :false }
  }

  triggerAddTripState = () => {
    this.setState({
      ...this.state,
      isEmptyState: false,
      isAddTripState: true,
      isClick : false
    })}

    triggerClickState = () => {
      this.setState({
        ...this.state,
        isEmptyState: false,
        isAddTripState: false,
        isClick : true
      })}


  render() {
  return (
<div>
  {this.state.isEmptyState && <Paul addTrip={this.triggerAddTripState} click={this.triggerClickState} />}

  {this.state.isAddTripState && <AnotherComponent />}

  {this.state.isClick && <Clickhere />}

    </div>
  );
}
}

export default App;

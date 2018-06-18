import React, { Component } from 'react';
import './App.css';
import UserOutput from './UserOutput/UserOutput';
import UserInput from './UserInput/UserInput';

class App extends Component {
  state = {
    usernames: [
      {name: 'John'},
      {name: 'Doe'}
    ]
  }

  // setting up the Event Handler Method
  usernameChangeHandler = (event) => {
    this.setState({
      usernames: [
        {name: event.target.value},
        {name: 'Doe'}
      ]
    })
  }
  render() {
    const newStyle = {
      font: 'inherit',
      border: '3px solid lighblue',
      padding: '5px',
      borderRadius: '10px',
      color: '#8E0404'

    }
    return (
          <div className="App">
            <h1> This is New React Assignment </h1>

            <UserOutput
            username={this.state.usernames[0].name}/>

            <UserInput
            style={newStyle}
            username={this.state.usernames[0].name}
            change={this.usernameChangeHandler}/>

            <UserOutput
            username={this.state.usernames[1].name}/>

            <UserInput
            style={newStyle}
            username={this.state.usernames[1].name}/>

          </div>
        );
      }
}

export default App;

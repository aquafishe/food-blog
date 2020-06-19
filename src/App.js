import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navigation from './components/Navigation';
import Welcome from './components/Welcome';

const initialState = {
  route: 'Home'
}

class App extends React.Component {
  constructor() {
    super();
    this.state = initialState;
  }

  onRouteChange = (newRoute) => {
    console.log(newRoute)
    this.setState( { route: newRoute });
  }

  render() {
    return (
      <div className="App">
        <Navigation onRouteChange={this.onRouteChange}/>
        <header>
          <Welcome route={ this.state.route }/>
        </header>
        
        {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header> */}
      </div>
    )
  }
}

export default App;

import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import QuestionContainer from "./Containers/QuestionsContainer";


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">

          <QuestionContainer/>
        </header>
      </div>
    );
  }
}

export default App;

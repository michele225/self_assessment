import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import QuestionContainer from "./Containers/QuestionsContainer";
import SurveyContainer from "./Containers/SurveyContainer";


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">

          <SurveyContainer/>
        </header>
      </div>
    );
  }
}

export default App;

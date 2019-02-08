import React, { Component } from 'react';

import SurveyContainer from "./Containers/SurveyContainer";


class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">

          <SurveyContainer/>
        </div>
      </div>
    );
  }
}

export default App;

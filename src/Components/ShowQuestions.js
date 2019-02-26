import React, { Component } from 'react';
import SingleQuestionContainer from "../Containers/SingleQuestionContainer"
import ReactDOM from "react-dom";
import Provider from "react-redux/es/components/Provider";
import store from "../Store/AppStore";
import AppContainer from "../Containers/AppContainer";


class ShowQuestions extends Component {


    constructor (props){
        super(props);
    }



    openSurvey = () => {
        console.log("Titolo" + this.props.Titolo)
        const requestBody = {
            Titolo: this.props.Titolo
        }
        this.props.getSurvey(requestBody)
    }

    goHomeSurvey = () => {
        this.props.returnToHome()
        ReactDOM.render(
            <Provider store={store}>
                <div>
                    <AppContainer />
                </div>
            </Provider>,
        document.getElementById('root'),
        //document.getElementById('post-list'),
        );
    }

    restart = () => {
            this.props.reStartSurvey()
    }

    render() {
        let questions=""
        let response = []
        if(!this.props.responseQuestionSurveyDone){
            this.openSurvey()
        }
        questions  = this.props.responseAllQuestions.map((question) =>
            <SingleQuestionContainer question = {question} numberQuestion = {this.props.responseAllQuestions.length} />
        )

        return(
            <div>
            <header className="headerSelf">
                <div id="logoSelf">
                    <span className="iconSelf"> question_answer </span>
                    <span>
              Self<b>Assessment</b>
            </span>
                </div>
            </header>
            <div className="App">
                <div className="App-header">
                    <h1 className="NoteH1Questionario"> Questionario {this.props.Titolo}</h1>

                    <div className="container2">
                        {questions[this.props.numberDomanda]}
                    </div>

                    {
                        this.props.numberDomanda==this.props.responseAllQuestions.length?
                            <div>
                                <h2 className="Noteh2rRisposteEsatte"> Risposte Esatte: {this.props.numberREs} / {this.props.responseAllQuestions.length} </h2>
                                <button onClick={this.goHomeSurvey}  className="addQuestion button3"> Go to Home </button>
                                <button onClick={this.restart}  className="addQuestion button2"> Re-Start  </button>


                            </div>
                            :
                            <div></div>
                    }
                </div>
            </div>
            </div>
        )
    }
}

export default ShowQuestions



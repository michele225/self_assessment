import React, { Component } from 'react';
import $ from "jquery";
import SingleQuestion from "./SingleQuestion";

import SingleQuestionContainer from "../Containers/SingleQuestionContainer"
import ReactDOM from "react-dom";
import Provider from "react-redux/es/components/Provider";
import store from "../Store/AppStore";
import SurveyContainer from "../Containers/SurveyContainer";


class ShowQuestions extends Component {


    constructor (props){
        super(props);
        this.state = {
        }
    }

    openSurvey = (title) => {
        const requestBody = {
            Titolo: title
        }
        this.props.getSurvey(requestBody)
    }


    goHomeSurvey = () => {
        ReactDOM.render(
            <Provider store={store}>
                <div>
                    <SurveyContainer />
                </div>
            </Provider>,
            document.getElementById('root'),
        );
    }

    restart = () => {
            this.props.reStartSurvey()
    }






    render() {
        let questions=""
        let response = []


        if(!this.props.responseQuestionSurveyDone){
            this.openSurvey(this.props.Titolo)
        }


        questions  = this.props.responseAllQuestions.map((question) =>
            <SingleQuestionContainer question = {question} numberQuestion = {this.props.responseAllQuestions.length} />
        )





        return(
            <div className="App">
                <div className="App-header">
                    <h1> Questionario {this.props.Titolo}</h1>

                    <div className="container2">
                        {questions[this.props.numberDomanda]}
                    </div>

                    {
                        this.props.numberDomanda==this.props.responseAllQuestions.length?
                            <div>
                                <h2> Risposte Esatte: {this.props.numberREs} / {this.props.responseAllQuestions.length} </h2>
                                <button onClick={this.goHomeSurvey}  className="addQuestion button3"> Go to Home </button>
                                <button onClick={this.restart}  className="addQuestion button2"> Re-Start  </button>


                            </div>


                            :
                            <div></div>
                    }

                </div>
            </div>

        )


    }
}
export default ShowQuestions



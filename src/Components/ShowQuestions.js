import React, { Component } from 'react';
import $ from "jquery";
import SingleQuestion from "./SingleQuestion";

import SingleQuestionContainer from "../Containers/SingleQuestionContainer"


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


    pointCalculator = ( ) => {
        let point = 0;
        for (let i=0; i<this.props.responseAllQuestions; i ++){
            if(this.verifica()) point = point +1;
        }
        console.log(point)
        return point;
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

                    <h2> Risposte Esatte : {this.props.numberREs} </h2>
                </div>
            </div>

        )


    }
}
export default ShowQuestions



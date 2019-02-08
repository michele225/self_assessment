import React, { Component } from 'react';
import $ from "jquery";

let point = 0;

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



    verifica = (question) => {
        var re = $('input[name="html"]:checked').val();
        console.log(re +question.Risposta_esatta )
        if(re == question.Risposta_esatta) {
            point = point + 1;
        }
        else point = point - 1;
        console.log(point)

    }


    render() {
        let questions=""
        let response = []


        if(!this.props.responseQuestionSurveyDone){
            this.openSurvey(this.props.Titolo)
        }


        questions  = this.props.responseAllQuestions.map((question) =>

            <div key={question.Descrizione}>

                <lu className="liResponse">
                    <h1>D: {question.Descrizione} </h1>
                    <br/>
                    <label class="containerCheckbox">  {question.Risposta_a}
                        <input name="html" type="checkbox" value={question.Risposta_a} onClick={() => this.verifica(question)} />
                        <span className="checkmark"></span>
                    </label>
                    <label className="containerCheckbox"> {question.Risposta_b}
                        <input name="html" type="checkbox" value={question.Risposta_b} onClick={() => this.verifica(question)}/>
                        <span className="checkmark"></span>
                    </label>
                    <label className="containerCheckbox">  {question.Risposta_c}
                        <input name="html" type="checkbox" value={question.Risposta_c} onClick={() => this.verifica(question)}/>
                        <span className="checkmark"></span>
                    </label>
                    <label className="containerCheckbox">  {question.Risposta_d}
                        <input name="html" type="checkbox" value={question.Risposta_d} onClick={() => this.verifica(question)}/>
                        <span className="checkmark"></span>
                    </label>

                    <br/>
                    <br/>
                </lu>


            </div>

        )




        return(
            <div className="App">
                <div className="App-header">

                    <div className="container2">
                        {questions}
                    </div>
                </div>
            </div>

        )


    }
}
export default ShowQuestions



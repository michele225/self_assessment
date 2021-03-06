import React, { Component } from 'react';
import ReactDOM from "react-dom";
import {Provider} from "react-redux";
import store from "../Store/AppStore";
import SurveyContainer from "../Containers/SurveyContainer";


let questionsCopia = [];

class Questions extends Component {

    constructor(props){
        super(props);
        this.state = {
            questions: [],
            numberQ : 0,
            title : ""
        }
    }

    saveNewSurvey =() => {
        if((this.answer1.value == '' || this.answer2.value == ''|| this.answer3.value =='' ||  this.answer4.value =='' ||
            this.answerOK.value =='' )&& this.state.numberQ==0){
            alert("Non Lasciare Campi Vuoti")
        }
        else {
            this.addQuestions();
            ReactDOM.render(
                <Provider store={store}>
                    <div>
                        <SurveyContainer />
                    </div>
                </Provider>,
                document.getElementById('root'),
            );
        }
    }

    addQuestions = () => {
        let title = this.state.title
        console.log("Domanda" + this.state.numberQ)
        if ((this.answer1.value == '' || this.answer2.value == '' || this.answer3.value == '' || this.answer4.value == '' || this.answerOK.value == '') && this.state.numberQ==0) {
            alert("Non Lasciare Campi Vuoti")
        }else {
            let requestBody = ""
            console.log("Domanda If" + this.state.numberQ)
                if (this.state.numberQ != 0) {
                    requestBody = {
                        Canale: 'Town Square',
                        Domande: this.getQuestion.value,
                        Risposta_a: this.answer1.value,
                        Risposta_b: this.answer2.value,
                        Risposta_c: this.answer3.value,
                        Risposta_d: this.answer4.value,
                        Risposta_esatta: this.answerOK.value,
                        Titolo: title
                    }
                } else {
                    this.setState({
                        title: this.getTitle.value
                    })
                    requestBody = {
                        Canale: 'Town Square',
                        Domande: this.getQuestion.value,
                        Risposta_a: this.answer1.value,
                        Risposta_b: this.answer2.value,
                        Risposta_c: this.answer3.value,
                        Risposta_d: this.answer4.value,
                        Risposta_esatta: this.answerOK.value,
                        Titolo: this.getTitle.value
                    }
                     const requestBodySurvey = {
                            Canale: 'Town Square',
                            Titolo: this.getTitle.value,
                            Descrizione: this.getDescription.value,
                        }
                        this.props.addSurvey(requestBodySurvey)

                }
                //per salvare questionario solo la prima volta

                this.props.addQuestions(requestBody)
                this.setState({
                    numberQ: this.state.numberQ + 1
                })
                questionsCopia = this.state.questions;
                questionsCopia.push(
                    <div className="container2" key={this.state.numberQ}>
                        <div className="questions-divider"/>
                        <h5 className="Noteh2">Domanda n° {this.state.numberQ}: {this.getQuestion.value} </h5>
                        <h7 className="Noteh2">Risposte</h7>
                        <ul className="listStyle">
                            <li className="answer"><label className="insertAnswers"> <h8 className="floatTextPos">
                                1): {this.answer1.value} </h8> </label></li>
                            <br/>
                            <li className="answer"><label className="insertAnswers"> <h8 className="floatTextPos">
                                2): {this.answer2.value}</h8> </label></li>
                            <br/>
                            <li className="answer"><label className="insertAnswers"> <h8 className="floatTextPos">
                                3): {this.answer3.value} </h8> </label></li>
                            <br/>
                            <li className="answer"><label className="insertAnswers"> <h8 className="floatTextPos">
                                4): {this.answer4.value} </h8> </label></li>
                            <br/>
                            <li className="answer"><label className="insertAnswers"> <h8 className="floatTextPos">
                                Esatta: {this.answerOK.value} </h8> </label></li>
                            <br/>
                        </ul>
                        <br/>

                        {
                            questionsCopia[this.state.numberQ - 1]
                        }
                    </div>
                )
                this.getQuestion.value = ""
                this.answer1.value = ""
                this.answer2.value = ""
                this.answer3.value = ""
                this.answer4.value = ""
                this.answerOK.value = ""

                this.setState({
                    questions: questionsCopia
                })
            }
    }

    render() {
        return(
            <div>
            <header className="headerSelf">
                <div id="logoSelf">
                    <span className="iconSelf"> question_answer</span>
                    <span>
              Self<b>Assessment</b>
            </span>
                </div>
            </header>

            <div className="App">
                <div className="App-header">
                <div className="containerNuovo1">
                    <h3 className="Noteh2InserisciDatiQuest">Inserisci i Dati del Questionario {this.state.title}</h3>
                    {
                        this.state.numberQ ==0 ?
                            <form>
                                <input type="text" className=" insertQuestion" placeholder="... Survey Title ..." ref={(input) => this.getTitle = input}/>
                                <br/>
                                <input type="text" className=" insertQuestion" placeholder="... Survey Descrption ..." ref={(input) => this.getDescription = input}/>
                                <br/>
                            </form>
                            :
                            <div></div>

                    }
                    <h5 className="Noteh2InsDomanda">Inserisci una nuova domanda</h5>
                    <form>
                        <input type="text" className=" insertQuestion" placeholder="... New Question ..." ref={(input) => this.getQuestion = input}/>
                        <br/>
                    </form>
                    <h6 className="Noteh2InsRisposta">Inserisci le risposte</h6>
                    <ul className="listStyle">
                        <li className="answer"><input className="insertAnswers" type="text" placeholder="Answer 1" ref={(input) => this.answer1 = input}/> </li>
                        <li className="answer" > <input className="insertAnswers" type="text" placeholder="Answer 2" ref={(input) => this.answer2 = input}/>   </li>
                        <li className="answer"> <input className="insertAnswers" type="text" placeholder="Answer 3" ref={(input) => this.answer3 = input}/>    </li>
                        <li className="answer" > <input className="insertAnswers" type="text" placeholder="Answer 4" ref={(input) => this.answer4 = input}/>   </li>
                        <li className="answer"> <input className="insertAnswers" type="text" placeholder="Risposta esatta" ref={(input) => this.answerOK = input}/>    </li>
                </ul>
                <br/>
                    <button className="addQuestion button2" onClick={this.saveNewSurvey} >
                        <span>Save & Complete Survey</span>
                    </button>
                    <button className="addQuestion button3" onClick={this.addQuestions}>
                        <span>New Question</span>
                    </button>
                    {
                        questionsCopia[this.state.numberQ-1]
                    }
                </div>
                </div>
            </div>
            </div>
        )
    }
}

export default Questions



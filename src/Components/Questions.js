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
        ReactDOM.render(
            <Provider store={store}>
                <div>
                    <SurveyContainer />
                </div>
            </Provider>,
        //document.getElementById('post-list'),
        document.getElementById('root'),

        );
    }

    addQuestions = (e) =>{
        let requestBody=""
        e.preventDefault();
        if(this.state.numberQ != 0){
            console.log("domnde diverse da zero")
            requestBody = {
                Canale: 'Town Square',
                Tipo: 'Ospedale',
                Descrizione: this.getQuestion.value,
                Risposta_a: this.answer1.value,
                Risposta_b: this.answer2.value,
                Risposta_c: this.answer3.value,
                Risposta_d: this.answer4.value,
                Risposta_esatta: this.answerOK.value,
                Titolo: this.state.title
            }
        }else {
            this.setState({
                title : this.getTitle.value
            })
            requestBody = {
                Canale: 'Town Square',
                Tipo: 'Ospedale',
                Descrizione: this.getQuestion.value,
                Risposta_a: this.answer1.value,
                Risposta_b: this.answer2.value,
                Risposta_c: this.answer3.value,
                Risposta_d: this.answer4.value,
                Risposta_esatta: this.answerOK.value,
                Titolo: this.getTitle.value
            }
        }
        //per salvare questionario solo la prima volta
        if(questionsCopia.length == 0){
            const requestBodySurvey = {
                Canale: 'Town Square',
                Titolo: this.getTitle.value,
                Descrizione: this.getDescription.value,
            }
            this.props.addSurvey(requestBodySurvey)
        }
        this.props.addQuestions(requestBody)
        this.setState({
            numberQ: this.state.numberQ+1
        })
        questionsCopia = this.state.questions;
        questionsCopia.push(
            <div className="container2" key={this.state.numberQ}>
                <h2 className="Noteh2">Domanda n° {this.state.numberQ}</h2>
                    <label className="insertQuestion"> Domanda: {this.getQuestion.value} </label>
                <h2 className="Noteh2">Risposte</h2>
                <ul className="listStyle">
                    <li className="answer"><label className="insertAnswers"> Risposta 1: {this.answer1.value} </label> </li>
                    <li className="answer"><label className="insertAnswers"> Risposta 2: {this.answer2.value} </label> </li>
                    <li className="answer"><label className="insertAnswers"> Risposta 3: {this.answer3.value} </label> </li>
                    <li className="answer"><label className="insertAnswers"> Risposta 4: {this.answer4.value} </label> </li>
                    <li className="answer"><label className="insertAnswers"> Risposta Esatta: {this.answerOK.value} </label> </li>
                </ul>
                <br/>

                {
                    questionsCopia[this.state.numberQ-1]
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
        console.log(this.state.questions)
    }

    render() {
        return(
            <div className="App">
                <div className="App-header">
                <div className="container">
                    <h3 className="Noteh2">Inserisci i Dati del Questionario {this.state.title}</h3>
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

                    <h2 className="Noteh2">Inserisci una nuova domanda</h2>
                    <form>
                        <input type="text" className=" insertQuestion" placeholder="... New Question ..." ref={(input) => this.getQuestion = input}/>
                        <br/>
                    </form>
                    <h2 className="Noteh2">Inserisci le risposte</h2>
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
        )
    }
}

export default Questions



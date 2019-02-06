import React, { Component } from 'react';
import ReactDOM from "react-dom";
import {Provider} from "react-redux";
import store from "../Store/AppStore";
import ShowQuestionsContainer from "../Containers/ShowQuestionsContainer";


class Questions extends Component {

        constructor(props){
            super(props);
            this.state = {
                questions: [],
                numberQ : 0
            }
        }



    addQuestions = (e) =>{
        e.preventDefault();
        const requestBody = {
            Canale: 'Town Square',
            Tipo: 'Ospedale',
            Descrizione: this.getQuestion.value,
            Risposta_a: this.answer1.value,
            Risposta_b: this.answer2.value,
            Risposta_c: this.answer3.value,
            Risposta_d: this.answer4.value,
            Risposta_esatta: this.answerOK.value,

        }
        this.props.addQuestions(requestBody)
        this.setState({
            numberQ: this.state.numberQ+1
        })

        let questionsCopia = this.state.questions;

            questionsCopia.push(
                <div className="container2" >
                    <h2 className="Noteh2">Domanda n° {this.state.numberQ}</h2>
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
                </div>
            )

        this.setState({
            questions: questionsCopia
        })
        console.log(this.state.questions)

    }


    slideArray = () =>{
            for ( let k=0; k <this.state.numberQ; k++){

            }
    }



    render() {

        return(

                <div className="container" id= "listaDomande">
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
                    <button className="addQuestion button2" >
                        <span className="NoteSpan">Save & Complete Survey</span>
                    </button>
                    <button className="addQuestion button3" onClick={this.addQuestions}>
                        <span>New Question</span>
                    </button>
                    <div className="reg"></div>
                    <div className="sig"></div>

                    {
                       this.state.questions[this.state.numberQ -1 ]

                    }
                </div>


        )

    }
}
export default Questions


import React, { Component } from 'react';
import ReactDOM from "react-dom";
import {Provider} from "react-redux";
import store from "../Store/AppStore";


class Questions extends Component {


    addQuestions = (e) =>{
        e.preventDefault();

        const requestBody = {
            Canale: 'Town Square',
            Tipo: 'Ospedale',
            Descrizione: this.getQuestion.value,
        }
        this.props.addQuestions(requestBody)
        this.getQuestion.value = ""
    }



    render() {

        return(

                <div className="container">
                    <h2 className="Noteh2">Inserisci una nuova domanda</h2>
                    <form>
                        <input type="text" className=" insertQuestion" placeholder="... domanda ..." ref={(input) => this.getQuestion = input}/>
                        <br/>
                    </form>

                    <br/>
                    <button className="addQuestion button2" onClick={this.addQuestions}>
                        <span className="NoteSpan">Save</span>
                    </button>
                    <button className="addQuestion button3">
                        <span>New Question</span>
                    </button>
                    <div className="reg"></div>
                    <div className="sig"></div>


                </div>
        )

    }
}
export default Questions



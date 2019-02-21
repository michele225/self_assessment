import React, { Component } from 'react';
import $ from "jquery";


class SingleQuestion extends Component {

    constructor(props){
        super(props);
        this.state = {
        }

    }

    verificaRisposta = (question) => {
        let re = $('input[name="html"]:checked').val();
        const requestBody = {
            Id: question.Id,
            Risposta: re
        }

        this.props.asyncCallCheckResponse(requestBody)

    }


    isChecking = () => {
        let checkBox1 = document.getElementById("myCheck1");
        let checkBox2 = document.getElementById("myCheck2");
        let checkBox3 = document.getElementById("myCheck3");
        let checkBox4 = document.getElementById("myCheck4");


        let textOK = document.getElementById("ResponseOK");
        let textNO = document.getElementById("ResponseNO");

        if (checkBox1.checked || checkBox2.checked || checkBox3.checked || checkBox4.checked){
           this.props.controlIsChecked()
        }
    }

    render() {
        return(
            <div key={this.props.question.Descrizione}>

                <ul className="liResponse">
                    <h4>Domanda {this.props.numberDomanda+1}/{this.props.numberQuestion}</h4>
                    <h1> {this.props.question.Descrizione} </h1>
                    <br/>
                    <label className="containerCheckbox" onClick={this.isChecking}>  {this.props.question.Risposta_a}
                        <input  id="myCheck1"  name="html" type="radio" value={this.props.question.Risposta_a}/>
                        <span className="checkmark"></span>
                    </label>
                    <label  className="containerCheckbox" onClick={this.isChecking}> {this.props.question.Risposta_b}
                        <input id="myCheck2" name="html" type="radio" value={this.props.question.Risposta_b}/>
                        <span className="checkmark"></span>
                    </label>
                    <label className="containerCheckbox" onClick={this.isChecking}>  {this.props.question.Risposta_c}
                        <input id="myCheck3" name="html" type="radio" value={this.props.question.Risposta_c}/>
                        <span className="checkmark"></span>
                    </label>
                    <label  className="containerCheckbox" onClick={this.isChecking}>  {this.props.question.Risposta_d}
                        <input  id="myCheck4" name="html" type="radio" value={this.props.question.Risposta_d}/>
                        <span className="checkmark"></span>
                    </label>

                    <br/>
                    <br/>

                    {
                        this.props.numberDomanda < this.props.numberQuestion -1 && this.props.isChecked?
                            <button className="button2 addQuestion " onClick={() => this.verificaRisposta(this.props.question)}> NEXT
                                QUESTION</button>
                            :
                            <div></div>
                    }
                    {
                            this.props.numberDomanda==this.props.numberQuestion - 1 && this.props.isChecked?
                                <button className="button2 addQuestion" onClick={() => this.verificaRisposta(this.props.question)}> FINISH </button>
                                    :
                                    <div> </div>

                    }
                </ul>
            </div>
        )
    }
}
export default SingleQuestion



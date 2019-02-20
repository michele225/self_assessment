import React, { Component } from 'react';
import $ from "jquery";


class SingleQuestion extends Component {

    constructor(props){
        super(props);

    }

    verificaRisposta = (question) => {
        let checkBox = document.getElementById("myCheck");
        // Get the output text
        let textOK = document.getElementById("ResponseOK");
        let textNO = document.getElementById("ResponseNO");

        let re = $('input[name="html"]:checked').val();
        const requestBody = {
            Id: question.Id,
            Risposta: re
        }

        console.log( $('.messageCheckbox:checked').val())

        this.props.asyncCallCheckResponse(requestBody)


    }



    render() {

        return(
            <div key={this.props.question.Descrizione} className="Domanda">

                <lu className="liResponse">
                    <h4>Domanda {this.props.numberDomanda+1}/{this.props.numberQuestion}</h4>
                    <h1> {this.props.question.Descrizione} </h1>
                    <br/>
                    <label className="containerCheckbox">  {this.props.question.Risposta_a}
                        <input id="myCheck" name="html" type="radio" value={this.props.question.Risposta_a}/>
                        <span className="checkmark"></span>
                    </label>
                    <label id="myCheck" className="containerCheckbox"> {this.props.question.Risposta_b}
                        <input name="html" type="radio" value={this.props.question.Risposta_b}/>
                        <span className="checkmark"></span>
                    </label>
                    <label id="myCheck" className="containerCheckbox">  {this.props.question.Risposta_c}
                        <input name="html" type="radio" value={this.props.question.Risposta_c}/>
                        <span className="checkmark"></span>
                    </label>
                    <label id="myCheck" className="containerCheckbox">  {this.props.question.Risposta_d}
                        <input name="html" type="radio" value={this.props.question.Risposta_d}/>
                        <span className="checkmark"></span>
                    </label>

                    <br/>
                    <br/>

                    {
                        1?
                            <button className="button2" onClick={() => this.verificaRisposta(this.props.question)}> NEXT QUESTION</button>
                            :
                            <div></div>
                    }


                </lu>


            </div>
        )

    }
}
export default SingleQuestion



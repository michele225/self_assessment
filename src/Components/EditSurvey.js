import React, { Component } from 'react';

class EditSurvey extends Component {

    constructor (props){
        super(props);
    }

    editSurvey = () => {
        const requestBody = {
            Titolo: this.newTitle.value,
            VecchioTitolo: this.props.survey.Titolo,
            Descrizione: this.newDescription.value
        }
        this.props.editSurvey(requestBody)
    }

    closeEdit = () => {
        this.props.closeEdit()
    }

    render() {
        document.body.style.overflowY = "hidden"
        return(
            <div className="App myPost">
                <div className="myOpacity"></div>
                <div className="myForm">
                    <div className="containerNuovo1">
                    <h3 className="Noteh2">Modifica i Dati del Questionario</h3>
                        <div>
                            <input type="text" className=" insertQuestion" defaultValue={this.props.survey.Titolo} ref={(input) => this.newTitle = input}/>
                            <br/>
                            <input type="text" className=" insertQuestion" defaultValue={this.props.survey.Descrizione} ref={(input) => this.newDescription = input}/>
                            <br/>
                        </div>
                    <button className="addQuestion button2" onClick={this.editSurvey} >
                        <span>Save Edit </span>
                    </button>
                    <button className="addQuestion button3" onClick={this.closeEdit}>
                        <span>Cancel</span>
                    </button>
                    </div>
                </div>
            </div>
        )
    }
}

export default EditSurvey
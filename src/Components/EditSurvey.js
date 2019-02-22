import React, { Component } from 'react';
import ReactDOM from "react-dom";
import Provider from "react-redux/es/components/Provider";
import store from "../Store/AppStore";
import SurveyContainer from "../Containers/SurveyContainer";
import QuestionsContainer from "../Containers/QuestionsContainer";



class EditSurvey extends Component {


    constructor (props){
        super(props);
    }

    editSurvey = () => {
        const requestBody = {
            Titolo: this.newTitle.value,
            VecchioTitolo: this.props.Survey.Titolo,
            Descrizione: this.newDescription.value
        }
        this.props.editSurvey(requestBody)
        this.goToHome()
    }

    goToHome = () => {
        ReactDOM.render(
            <Provider store={store}>
                <div>
                    <SurveyContainer/>
                </div>
            </Provider>,
            document.getElementById('root'),
            //document.getElementById('post-list'),
        );
    }


    render() {

        return(
            <div>
            <header className="headerSelf">
                <div id="logoSelf">
                    <span className="iconSelf"></span>
                    <span>
              Self<b>Assessment</b>
            </span>
                </div>
            </header>
            <div className="App">
                <div className="App-header">
                    <div className="containerNuovo1">
                    <h3 className="Noteh2">Modifica i Dati del Questionario</h3>

                    <form>
                        <input type="text" className=" insertQuestion" defaultValue={this.props.Survey.Titolo} ref={(input) => this.newTitle = input}/>
                        <br/>
                        <input type="text" className=" insertQuestion" defaultValue={this.props.Survey.Descrizione} ref={(input) => this.newDescription = input}/>
                        <br/>
                    </form>

                    <button className="addQuestion button2" onClick={this.editSurvey} >
                        <span className="NoteSpan" >Save Edit </span>
                    </button>
                    <button className="addQuestion button3" onClick={this.goToHome}>
                        <span>Cancel</span>
                    </button>
                    </div>
                </div>
            </div>
            </div>
        )


    }
}
export default EditSurvey



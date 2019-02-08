import React, { Component } from 'react';
import QuestionsContainer from "../Containers/QuestionsContainer";
import Provider from "react-redux/es/components/Provider";
import store from "../Store/AppStore";
import ReactDOM from "react-dom";
import '../App.css'
import ShowQuestionsContainer from "../Containers/ShowQuestionsContainer";
import SurveyContainer from "../Containers/SurveyContainer";
import Questions from "./Questions";


class Survey extends Component {

    constructor (props){
        super(props);
    }


    addSurvey = () => {
        ReactDOM.render(
            <Provider store={store}>
                <div>
                    <QuestionsContainer/>
                </div>
            </Provider>,
            document.getElementById('root'),
        );
    }


    deleteSurvey = (survey) => {
        const requestBody = {
            Titolo: survey.Titolo
        }
        console.log(requestBody)
        this.props.deleteSurvey(requestBody)
    }



    openThisSurvey = (survey) => {
        ReactDOM.render(
            <Provider store={store}>
                <div>
                    <ShowQuestionsContainer Titolo={survey.Titolo} />
                </div>
            </Provider>,
            document.getElementById('root'),
        );

    }

    render() {

        if(!this.props.getAllSurveyDone){
            this.props.asyncCallGetAllSurveys();
        }

        console.log(this.props.responseAllSurveys)

        let surveys = ""

        surveys = this.props.responseAllSurveys.map((survey) =>
            <div key={survey.Titolo} className="tile" onClick={() => this.openThisSurvey(survey)}>

                <p className="fas fa-calendar-edit"></p>

                <ul className="liEvents">
                    <div className="tile-description">  <label className="TitoloSurvey">Titolo: {survey.Titolo} </label>
                        <br/>
                        <div className="tile-divider"></div>
                        <br/>

                        <label className="DescrizioneSurvey"> Descrizione: {survey.Descrizione}  </label>
                    </div>


                </ul>
                <div className="underFile">
                    <button onClick={this.editFile} className="edit"> edit </button>
                    <button onClick={() => this.deleteSurvey(survey)}  className="delete"> delete </button>
                </div>




            </div>
        )

        return(

            <div>
                <button className="button2 addSurvey" onClick={this.addSurvey}>ADD SURVEY</button>
                <div className="tiles-flex">
                    {surveys}
                </div>

            </div>
        )
    }

}

export default Survey



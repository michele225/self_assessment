import React, { Component } from 'react';
import QuestionsContainer from "../Containers/QuestionsContainer";
import Provider from "react-redux/es/components/Provider";
import store from "../Store/AppStore";
import ReactDOM from "react-dom";
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
            <a key={survey.Titolo} className="tile" >


                    <h2 className="tile-description" onClick={() => this.openThisSurvey(survey)}>  <span className="TitoloSurvey">Titolo: {survey.Titolo} </span>      </h2>
                   <span className="DescrizioneSurvey"> Descrizione: {survey.Descrizione}  </span>

                    <div className="tile-divider"></div>


                <div className="underFile">
                    <img src="https://png.icons8.com/color/edit"  onClick={this.editFile}/>
                    <img className="imageDelete" src="https://png.icons8.com/color/delete" onClick={() => this.deleteSurvey(survey)} />
                </div>



            </a>
        )

        return(
            <div className="App">
                <div className="App-header">
                <button className="button2 addSurvey" onClick={this.addSurvey}>ADD SURVEY</button>
                <div className="tiles-flex">
                    {surveys}
                </div>

            </div>
            </div>
        )
    }

}

export default Survey



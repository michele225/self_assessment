import React, { Component } from 'react';
import QuestionsContainer from "../Containers/QuestionsContainer";
import Provider from "react-redux/es/components/Provider";
import store from "../Store/AppStore";
import ShowQuestionsContainer from "../Containers/ShowQuestionsContainer";
import SurveyContainer from "../Containers/SurveyContainer";
import Questions from "./Questions";
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import EditSurveyContainer from "../Containers/EditSurveyContainer";


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
        //document.getElementById('post-list'),
        );
    }


    deleteSurvey = (survey) => {
        const requestBody = {
            Titolo: survey.Titolo
        }
        console.log(requestBody)
        this.props.deleteSurvey(requestBody)
    }

    editSurvey = (survey) => {
        ReactDOM.render(
            <Provider store={store}>
                <div>
                    <EditSurveyContainer Survey={survey} />
                </div>
            </Provider>,
            document.getElementById('root'),
            //document.getElementById('post-list'),
        );
    }



    openThisSurvey = (survey) => {
        ReactDOM.render(
            <Provider store={store}>
                <div>
                    <ShowQuestionsContainer Titolo={survey.Titolo} />
                </div>
            </Provider>,
            document.getElementById('root'),
            //document.getElementById('post-list'),
        );

    }

    render() {
        if(!this.props.getAllSurveyDone){
            this.props.asyncCallGetAllSurveys();
        }
        console.log(this.props.responseAllSurveys)
        let surveys = ""
        surveys = this.props.responseAllSurveys.map((survey) =>
            <a key={survey.Titolo} className="tile22" >
                    <div onClick={() => this.openThisSurvey(survey)}>
                    <h2 className="tile22-description" >  <span className="TitoloSurvey">Titolo: {survey.Titolo} </span>      </h2>
                   <span className="DescrizioneSurvey"> Descrizione: {survey.Descrizione}  </span>
                    </div>
                    <div className="tile22-divider"></div>
                <div className="underFile">
                    <img src="https://png.icons8.com/color/edit" onClick={() => this.editSurvey(survey)}/>
                    <img className="imageDelete" src="https://png.icons8.com/color/delete" onClick={() => this.deleteSurvey(survey)} />
                </div>
            </a>
        )

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
                    <a className="btn-toolset addSurvey" onClick={this.addSurvey}>
                         <strong>Add Survey</strong>

                    </a>

                    <div className="tiles-flex22">
                         {surveys}
                  </div>
            </div>
            </div>
            </div>
        )
    }
}

export default Survey



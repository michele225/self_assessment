import React, { Component } from 'react';
import QuestionsContainer from "../Containers/QuestionsContainer";


class Survey extends Component {

    constructor (props){
        super(props);
    }


    addSurvey = () => {
        return <QuestionsContainer/>
    }

    render() {

        if(!this.props.getAllSurveyDone){
            this.props.asyncCallGetAllSurveys();
        }

        console.log(this.props.responseAllSurveys)

        let surveys = ""

        surveys = this.props.responseAllSurveys.map((survey) =>
            <div key={survey.Titolo} className="tile">

                <p className="fas fa-calendar-edit"></p>

                <ui className="liEvents">
                    <p className="tile-description">  <label className="TitoloSurvey">Titolo: {survey.Titolo} </label>
                        <br/>
                        <div className="tile-divider"></div>
                        <br/>

                        <label className="DescrizioneSurvey"> Descrizione: {survey.Descrizione}  </label>
                    </p>


                </ui>
                <div className="underFile">
                    <button onClick={this.editFile} className="edit"> edit </button>
                    <button onClick={this.deleteFile} className="delete"> delete </button>
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



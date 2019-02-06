import React, { Component } from 'react';
import ShowQuestionsContainer from "../Containers/ShowQuestionsContainer";
import Questions from "./Questions";


class ShowQuestions extends Component {

    constructor (props){
        super(props);
        this.state = {
        }
    }


    renderQuestions() {
        return <Questions/>;
    }

    render() {

        let questions = [];

        let requestBody = {
            id: this.props.id
        }
        console.log(this.props.id)

        this.props.asyncCallGetAllQuestions(requestBody)


        return(
            <div>
                <h2> Crea il Questionario </h2>
                <br/>
                {this.renderQuestions()}
            </div>
        )

    }
}
export default ShowQuestions



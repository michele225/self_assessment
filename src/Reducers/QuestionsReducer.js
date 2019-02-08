import ActionTypes from "../Actions/ActionTypes";
import React from "react";

const initialState = {
    responseAddQuestions: null,
    responseAllQuestions: [],
    questionNumber: 0,
    responseSurvey: null,
    responseQuestionSurveyDone: false,
    numberREs: 0,
    numberDomanda: 0
}

const QuestionsReducer = (state = initialState , action) => {
    switch (action.type) {
        case ActionTypes.ADD_QUESTION:
            console.log(action.payload.newValue)
            return { ...state, responseAddQuestions: action.payload.newValue, questionNumber: state.questionNumber+1};

        case ActionTypes.ALL_QUESTION:
            return { ...state, responseAllQuestions: action.payload.newValue, responseQuestionSurveyDone: true};

        case ActionTypes.ADD_SURVEY:
            return { ...state, responseSurvey: action.payload.newValue};

        case ActionTypes.CONTROL_RESPONSE:
            console.log(action.payload.newValue)

        case ActionTypes.CHECK_RESPONSE:
            if(action.payload.newValue)  return { ...state, numberREs: state.numberREs+1, numberDomanda: state.numberDomanda+1};
            else return {... state, numberDomanda: state.numberDomanda+1};


        default:
            return state;
    }
}

export default QuestionsReducer

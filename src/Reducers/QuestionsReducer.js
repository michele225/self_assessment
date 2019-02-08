import ActionTypes from "../Actions/ActionTypes";
import React from "react";

const initialState = {
    responseAddQuestions: null,
    responseAllQuestions: [],
    questionNumber: 0,
    responseSurvey: null,
    responseQuestionSurveyDone: false
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


        default:
            return state;
    }
}

export default QuestionsReducer

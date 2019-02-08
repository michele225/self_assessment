import ActionTypes from "../Actions/ActionTypes";
import React from "react";

const initialState = {
    responseAllSurveys: [],
    getAllSurveyDone: false,
    responseDelete: null
}

const SurveysReducer = (state = initialState , action) => {
    switch (action.type) {
        case ActionTypes.ALL_SURVEY:
            console.log(action.payload.newValue)
            return { ...state, responseAllSurveys: action.payload.newValue, getAllSurveyDone:true };

        case ActionTypes.DELETE_SURVEY:
            console.log(action.payload.newValue)
            return { ...state, responseDelete: action.payload.newValue, getAllSurveyDone: false};

        case ActionTypes.ADD_QUESTION:
            return { ...state, getAllSurveyDone: false};

        default:
            return state;
    }
}

export default SurveysReducer

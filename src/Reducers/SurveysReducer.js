import ActionTypes from "../Actions/ActionTypes";
import React from "react";

const initialState = {
    responseAllSurveys: [],
    getAllSurveyDone: false
}

const SurveysReducer = (state = initialState , action) => {
    switch (action.type) {
        case ActionTypes.ALL_SURVEY:
            console.log(action.payload.newValue)
            return { ...state, responseAllSurveys: action.payload.newValue, getAllSurveyDone:true };

        default:
            return state;
    }
}

export default SurveysReducer

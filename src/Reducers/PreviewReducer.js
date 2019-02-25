import ActionTypes from "../Actions/ActionTypes";
import React from "react";

const initialState = {
    editFileClicked: false,
    survey: null
}

const SurveysReducer = (state = initialState , action) => {
    switch (action.type) {
        case ActionTypes.EDIT_SURVEY_CLICKED:
            return { ...state, editFileClicked: true, survey: action.payload.newValue};

        case ActionTypes.EDIT_SURVEY:
            return { ...state, editFileClicked: false};

        case ActionTypes.CLOSE_EDIT_SURVEY:
            return { ...state, editFileClicked: false};
        default:
            return state;
    }
}

export default SurveysReducer

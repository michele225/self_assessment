import ActionTypes from "../Actions/ActionTypes";
import React from "react";

const initialState = {
    responseAddQuestions: []
}

const QuestionsReducer = (state = initialState , action) => {
    switch (action.type) {
        case ActionTypes.ADD_QUESTION:
            return { ...state, responseAddQuestions: action.payload.newValue};

        default:
            return state;
    }
}

export default QuestionsReducer

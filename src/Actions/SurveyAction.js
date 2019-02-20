import axios from "axios";
import ActionTypes from "./ActionTypes";


export function asyncCallGetAllSurveys() {
    var url = 'http://localhost:3002/getAllSurveys'

    return function (dispatch) {
        axios.get(url)
            .then((result) => {
                const response = result.data.Response;
                dispatch(receivedAllSurvey(response))
            })
            .catch((err) => {
                console.log("Errore: " + err.response.data)
            })
    };

}

export const receivedAllSurvey = (obj) => ({
    type: ActionTypes.ALL_SURVEY,
    payload: {
        newValue: obj
    },
})


export function asyncCallGetAllQuestionsSurvey(requestBody) {
    var url = 'http://localhost:3002/getSurveyQuestions'

    return function (dispatch) {
        axios.post(url, JSON.stringify(requestBody))
            .then((result) => {
                const response = result.data.Response;
                dispatch(receivedAllQuestion(response))
            })
            .catch((err) => {
                console.log("Errore: " + err.response.data)
            })
    };

}

export const receivedAllQuestion = (obj) => ({
    type: ActionTypes.ALL_QUESTION,
    payload: {
        newValue: obj
    },
})

export const reStartSurvey = () => ({
    type: ActionTypes.RESTART_SURVEY
})
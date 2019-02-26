import axios from "axios";
import ActionTypes from "./ActionTypes";

export function AsyncCallAddQuestions(requestBody) {
   // var url = 'http://localhost:3002/saveQuestions'
    var url = 'https://smart.nbsgroup.it/plugins/com.mattermost.server-dbsavequestions'
    return function (dispatch) {
        axios.post(url, JSON.stringify(requestBody))
            .then((result) => {
                const response = result.data.Response;
                dispatch(receivedEvent(response))
            })
            .catch((err) => {
                console.log("Errore: " + err.response.data)
            })
    };
}

export const receivedEvent = (obj) => ({
    type: ActionTypes.ADD_QUESTION,
    payload: {
        newValue: obj
    },
});

export function asyncCallSaveSurvey(requestBody) {
    //var url = 'http://localhost:3002/saveSurvey'
    var url = 'https://smart.nbsgroup.it/plugins/com.mattermost.server-dbsavesurvey'

    return function (dispatch) {
        axios.post(url, JSON.stringify(requestBody))
            .then((result) => {
                const response = result.data.Response;
                dispatch(receiveSuervy(response))
            })
            .catch((err) => {
                console.log("Errore: " + err.response.data)
            })
    };

}

export const receiveSuervy = (obj) => ({
    type: ActionTypes.ADD_SURVEY,
    payload: {
        newValue: obj
    },
})

export const controlResponse = () => ({
    type: ActionTypes.CONTROL_RESPONSE
})

export const isChecked = () => ({
    type: ActionTypes.IS_CHECKED
})


export const returnToHome = () => ({
    type: ActionTypes.GO_TO_HOME
})


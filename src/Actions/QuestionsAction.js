import axios from "axios";
import ActionTypes from "./ActionTypes";

export function AsyncCallAddQuestions(requestBody) {
    // var url = 'http://smart.nbsgroup.it/plugins/com.mattermost.server-getfilebyid'
    //'http://smart.nbsgroup.it/plugins/com.mattermost.server-dbgetimagebyid'
    var url = 'http://localhost:3002/saveQuestions'


    console.log(JSON.stringify(requestBody))
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


export function asyncCallGetAllQuestions(requestBody) {
    var url = 'http://localhost:3002/getAllQuestions'

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
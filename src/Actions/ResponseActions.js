import axios from "axios";
import ActionTypes from "./ActionTypes";


export function asyncCallCheckResponse(data) {
    var url = 'http://localhost:3002/checkResponse'

    return function (dispatch) {
        console.log(JSON.stringify(data))
        axios.post(url,JSON.stringify(data))
            .then((result) => {
                const response = result.data.Response;
                dispatch(receivedResponse(response))
            })
            .catch((err) => {
                console.log("Errore: " + err.response.data)
            })
    };

}

export const receivedResponse = (obj) => ({
    type: ActionTypes.CHECK_RESPONSE,
    payload: {
        newValue: obj
    },
})
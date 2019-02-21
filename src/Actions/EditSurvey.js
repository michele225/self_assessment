import axios from "axios";
import ActionTypes from "./ActionTypes";


export function asyncCallEditSurveys(data) {
    var url = 'https://smart.nbsgroup.it/plugins/com.mattermost.server-dbeditsurvey'
    //var url = 'http://localhost:3002/editSurvey'

    return function (dispatch) {
        console.log(JSON.stringify(data))
        axios.post(url,JSON.stringify(data))
            .then((result) => {
                const response = result.data.Response;
                dispatch(receivedEditResponse(response))
            })
            .catch((err) => {
                console.log("Errore: " + err.response.data)
            })
    };

}

export const receivedEditResponse = (obj) => ({
    type: ActionTypes.EDIT_SURVEY,
    payload: {
        newValue: obj
    },
})

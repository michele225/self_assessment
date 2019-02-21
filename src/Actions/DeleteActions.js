import axios from "axios";
import ActionTypes from "./ActionTypes";


export function asyncCallDeleteSurveys(data) {
    //var url = 'http://localhost:3002/deleteSurvey'
    var url = 'https://smart.nbsgroup.it/plugins/com.mattermost.server-dbdeletesurvey'
    return function (dispatch) {
        console.log(JSON.stringify(data))
        axios.post(url,JSON.stringify(data))
            .then((result) => {
                const response = result.data.Response;
                dispatch(receivedDeleteResponse(response))
            })
            .catch((err) => {
                console.log("Errore: " + err.response.data)
            })
    };

}

export const receivedDeleteResponse = (obj) => ({
    type: ActionTypes.DELETE_SURVEY,
    payload: {
        newValue: obj
    },
})

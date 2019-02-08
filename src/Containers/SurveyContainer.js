import { connect } from 'react-redux';
import * as actions from "../Actions/SurveyAction";
import * as actionsDelete from "../Actions/DeleteActions";

import Survey from "../Components/Survey";


const mapStateToProps = (state) => {
    return {
        responseAllSurveys: state.SurveysReducer.responseAllSurveys,
        getAllSurveyDone: state.SurveysReducer.getAllSurveyDone
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        asyncCallGetAllSurveys:() => {
            dispatch(actions.asyncCallGetAllSurveys())
        },
        deleteSurvey:(requestBody) => {
            dispatch(actionsDelete.asyncCallDeleteSurveys(requestBody))
        }
    }
}

const SurveyContainer = connect(
    mapStateToProps,
    mapDispatchToProps,
)(Survey);

export default SurveyContainer

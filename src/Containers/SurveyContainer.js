import { connect } from 'react-redux';
import * as actions from "../Actions/SurveyAction";
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
        }

    }
}

const SurveyContainer = connect(
    mapStateToProps,
    mapDispatchToProps,
)(Survey);

export default SurveyContainer

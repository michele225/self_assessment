import { connect } from 'react-redux';
import * as actions from "../Actions/QuestionsAction";
import Questions from "../Components/Questions";


const mapStateToProps = (state) => {
    return {
        responseAddQuestions: state.QuestionsReducer.responseAddQuestions,
        questionNumber: state.QuestionsReducer.questionNumber,
        responseSurvey: state.QuestionsReducer.responseSurvey
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        addQuestions:(requestBody) => {
            dispatch(actions.AsyncCallAddQuestions(requestBody))
        },
        addSurvey:(requestBody) => {
        dispatch(actions.asyncCallSaveSurvey(requestBody))
        }
    }
}

const QuestionsContainer = connect(
    mapStateToProps,
    mapDispatchToProps,
)(Questions);

export default QuestionsContainer

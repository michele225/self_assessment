import { connect } from 'react-redux';
import * as actions from "../Actions/QuestionsAction";
import Questions from "../Components/Questions";


const mapStateToProps = (state) => {
    return {
        responseAddQuestions: state.QuestionsReducer.responseAddQuestions,
        questionNumber: state.QuestionsReducer.questionNumber
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        addQuestions:(requestBody) => {
            dispatch(actions.AsyncCallAddQuestions(requestBody))
        }

    }
}

const QuestionsContainer = connect(
    mapStateToProps,
    mapDispatchToProps,
)(Questions);

export default QuestionsContainer

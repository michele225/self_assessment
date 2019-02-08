import { connect } from 'react-redux';
import * as actions from "../Actions/SurveyAction";
import ShowQuestions from "../Components/ShowQuestions";


const mapStateToProps = (state) => {
    return {
        responseAllQuestions: state.QuestionsReducer.responseAllQuestions,
        responseQuestionSurveyDone: state.QuestionsReducer.responseQuestionSurveyDone

    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        getSurvey:(requestBody) => {
            dispatch(actions.asyncCallGetAllQuestionsSurvey(requestBody))
        }

    }
}

const ShowQuestionsContainer = connect(
    mapStateToProps,
    mapDispatchToProps,
)(ShowQuestions);

export default ShowQuestionsContainer

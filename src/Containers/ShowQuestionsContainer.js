import { connect } from 'react-redux';
import * as actions from "../Actions/QuestionsAction";
import ShowQuestions from "../Components/ShowQuestions";


const mapStateToProps = (state) => {
    return {
        responseAllQuestions: state.QuestionsReducer.responseAllQuestions
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        asyncCallGetAllQuestions:(requestBody) => {
            dispatch(actions.asyncCallGetAllQuestions(requestBody))
        }

    }
}

const ShowQuestionsContainer = connect(
    mapStateToProps,
    mapDispatchToProps,
)(ShowQuestions);

export default ShowQuestionsContainer

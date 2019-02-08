import { connect } from 'react-redux';
import * as actionsQ from "../Actions/QuestionsAction";
import SingleQuestion from "../Components/SingleQuestion";
import * as actionsR from "../Actions/ResponseActions";


const mapStateToProps = (state) => {
    return {
        numberREs: state.QuestionsReducer.numberREs,
        numberDomanda: state.QuestionsReducer.numberDomanda,

    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        asyncCallCheckResponse: (data) => {
            dispatch(actionsR.asyncCallCheckResponse(data));
        }

    }
}

const SingleQuestionContainer = connect(
    mapStateToProps,
    mapDispatchToProps,
)(SingleQuestion);

export default SingleQuestionContainer

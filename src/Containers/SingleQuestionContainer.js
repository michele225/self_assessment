import { connect } from 'react-redux';
import * as actionsQ from "../Actions/QuestionsAction";
import SingleQuestion from "../Components/SingleQuestion";
import * as actionsR from "../Actions/ResponseActions";


const mapStateToProps = (state) => {
    return {
        numberREs: state.QuestionsReducer.numberREs,
        numberDomanda: state.QuestionsReducer.numberDomanda,
        isChecked: state.QuestionsReducer.isChecked
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        asyncCallCheckResponse: (data) => {
            dispatch(actionsR.asyncCallCheckResponse(data));
        },
        controlIsChecked: () => {
            dispatch(actionsQ.isChecked());
        }

    }
}

const SingleQuestionContainer = connect(
    mapStateToProps,
    mapDispatchToProps,
)(SingleQuestion);

export default SingleQuestionContainer

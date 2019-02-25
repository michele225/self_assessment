import { connect } from 'react-redux';
import * as actionsEdit from "../Actions/EditSurvey";
import EditSurvey from "../Components/EditSurvey";


const mapStateToProps = (state) => {
    return {
        responseEdit: state.SurveysReducer.responseEdit
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        editSurvey:(requestBody) => {
            dispatch(actionsEdit.asyncCallEditSurveys(requestBody))
        },
        closeEdit:() => {
            dispatch(actionsEdit.closeEdit())
        }
    }
}

const EditSurveyContainer = connect(
    mapStateToProps,
    mapDispatchToProps,
)(EditSurvey);

export default EditSurveyContainer

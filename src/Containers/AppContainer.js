import { connect } from 'react-redux';
import AppComponent from '../Components/AppComponent'

const mapStateToProps = (state) => {
    return {
        editFileClicked: state.PreviewReducer.editFileClicked,
        survey: state.PreviewReducer.survey,
    };
};

//const mapDispatchToProps = (dispatch) => {}

const AppContainer = connect(
    mapStateToProps,
    null,
)(AppComponent);

export default AppContainer

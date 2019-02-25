import { combineReducers } from 'redux';
import QuestionsReducer from './QuestionsReducer'
import SurveysReducer from './SurveysReducer'
import PreviewReducer from './PreviewReducer'

const RootReducer = combineReducers({
    QuestionsReducer,
    SurveysReducer,
    PreviewReducer
});
export default RootReducer

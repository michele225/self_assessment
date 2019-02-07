import { combineReducers } from 'redux';
import QuestionsReducer from './QuestionsReducer'
import SurveysReducer from './SurveysReducer'



const RootReducer = combineReducers({
    QuestionsReducer,
    SurveysReducer
});
export default RootReducer

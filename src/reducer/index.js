import {combineReducers} from 'redux';
import {reducer as formReducer} from 'redux-form';

// import LoginReduxFormReducer from './form/LoginReduxFormReducer';

export default combineReducers({
  form: formReducer
})
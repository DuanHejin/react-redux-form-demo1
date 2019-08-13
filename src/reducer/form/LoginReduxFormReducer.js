import { FormAction } from "../../constants/ActionTypes";

const initState = {
  loginSuccess: false
}

export default function loginReduxFormReducer(state = initState, {type, payload}) {
  switch(type) {
    case FormAction.LOGIN_FORM:
      return {
        ...state,
        loginSuccess: payload.loginSuccess
      }
    default:
      return state;
  }
}
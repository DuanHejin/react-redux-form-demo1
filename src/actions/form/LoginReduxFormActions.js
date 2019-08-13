import UserList from '../../../server/mock/UserList';
import { FormAction } from '../../constants/ActionTypes';

export const Login = (name, pass) => {
  const result = !!UserList.find(user => user.name === name && user.passord === pass);
  return {
    type: FormAction.LOGIN_FORM,
    payload: {
      loginSuccess: result
    }
  }
}
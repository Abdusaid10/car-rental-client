import { loggedIn } from '../api-services/services';
import { LOGIN_STATUS, API_ERRORS } from './types';

const loginStat = status => ({
  type: LOGIN_STATUS,
  paylod: status,
});

const apiErrors = error => ({
  type: API_ERRORS,
  paylod: error,
});

const loginStatus = () => dispatch => {
  loggedIn({ withCredentials: true })
    .then(response => {
      dispatch(loginStat(response.data.logged_in));
    })
    .catch(e => {
      dispatch(apiErrors(e.message));
    });
};

export default loginStatus;

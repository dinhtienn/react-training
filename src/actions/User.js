import {ACTION_TYPES} from '../reducers/Profile';
import {getUserApi} from '../services/userServices';

export const successGetUser = (data) => {
  return {
    type: ACTION_TYPES.GET_USER_SUCCESS,
    user: data,
  };
};

export const getUser = () => {
  return (dispatch) => {
    return getUserApi().then(
      (response) => {
        if (response && response.status === 200) {
          dispatch(successGetUser(response.data));
          return response.data;
        }
      }
    );
  };
};
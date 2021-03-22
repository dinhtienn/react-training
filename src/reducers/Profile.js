export const ACTION_TYPES = {
  GET_USER_SUCCESS: 'GET_USER_SUCCESS',
};

const initialState = {
  user: {},
};

export default function reduce(state = initialState, action = {}) {
  switch (action.type) {
    case ACTION_TYPES.GET_USER_SUCCESS:
      return {
        ...state,
        user: action.user,
      };
    default:
      return state;
  }
}
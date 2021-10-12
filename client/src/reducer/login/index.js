let initialState = '';

// load token items from local storage
if (localStorage.getItem('token')) {
  initialState = localStorage.getItem('token');
} else {
  initialState = '';
}

const login = (state = initialState, { type, payload }) => {
  switch (type) {
    case 'SET_TOKEN':
      return { token: payload };

    default:
      return state;
  }
};

export default login;

export const setToken = (token) => {
  return {
    type: 'SET_TOKEN',
    payload: localStorage.setItem('token', token),
  };
};

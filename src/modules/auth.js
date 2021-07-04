const CHANGE_FIELD = 'auth/CHANGE_FIELD';
const INITIALIZE_FORM = 'auth/INITIALIZE_FORM';

export const changeField = ({form, key, value}) => ({
  type: CHANGE_FIELD,
  payload: {form, key, value},
});
export const initializeForm = form => ({type: INITIALIZE_FORM, payload: form});

const initialState = {
  register: {
    email: '',
    password: '',
  },
  login: {
    email: '',
    password: '',
  },
  auth: null,
  authError: null,
};

const auth = (state = initialState, action) => {
  const {form, key, value} = action.payload;
  switch (action.type) {
    case CHANGE_FIELD:
      return {...state, ...(form[key] = value)};

    case INITIALIZE_FORM:
      return {...state, [form]: initialState[form]};

    default:
      return state;
  }
};

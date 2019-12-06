
const initialState = {
  rooms: [],
  loading: true,
  error: null
};

const reducer = (state = initialState, action) => {

  switch (action.type) {
    case 'ROOMS_REQUESTED':
      return {
        rooms: [],
        loading: true,
        error: null
      };

    case 'ROOMS_LOADED':
      return {
        rooms: action.payload,
        loading: false,
        error: null
      };

    case 'ROOMS_ERROR':
      return {
        rooms: [],
        loading: false,
        error: action.payload
      };

    default:
      return state;
  }
};

export default reducer;

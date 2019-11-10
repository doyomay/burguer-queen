const initialProps = {
  stateInitialReducer: false,
};

export default function (state = initialProps, action) {
  switch (action.type) {
    case 'STATE_ADD_TWEET_MODAL':
      return {
        ...state,
        stateInitialReducerL: action.payload,
      };
    default:
      return state;
  }
}

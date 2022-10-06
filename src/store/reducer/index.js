const initState = {
  count: 0,
};

const reducer = (state = initState, action) => {
  const { type, payload } = action;

  switch (type) {
    case "GGYU":
      return { ...state, count: state.count++ };

    default:
      return { ...state };
  }
};

export default reducer;

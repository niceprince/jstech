export const initialState = { count: 0 }

export const reducers = (state, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return { count: state.count + 1}
    case 'DECREMENT':
      return { count: state.count - 1}
    default:
      state
  }
};
export const initialState = '';
export const SET_LOCATION = 'SET_LOCATION';

export function locationReducer(action: any, state = initialState) {
  switch (action.type) {
    case SET_LOCATION:
      state = action.payload
      return state;
    default:
      return state;
  }
}

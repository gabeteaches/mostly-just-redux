import { ADD_ANIMAL } from './actions.js';

const initialState = []

export default function animalReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_ANIMAL:
      return state.concat(action.payload);
    default:
      return state;
  }
}
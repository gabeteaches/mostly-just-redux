import { BUDGET_CUTS } from './actions.js';

const initialState = [
  'Sharon',
  'Peter',
  'Adam'
]

function getRandomNumber(length) {
  return Math.floor(Math.random() * length) + 1  
}

export default function employeeReducer(state = initialState, action) {
  switch (action.type) {
    case BUDGET_CUTS: {
      const employeeToFire = getRandomNumber(state.length);
      return state.filter((employee, index) => {
        if (index + 1 === employeeToFire) {
          return false;
        }
        return true;
      })
    }
    default:
      return state;
  }
}
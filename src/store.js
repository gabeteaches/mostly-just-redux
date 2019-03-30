import animalReducer from './animalReducer.js';
import employeeReducer from './employeeReducer.js';
const redux = window.Redux;
const { createStore, combineReducers } = redux;

// console.log(redux)
const reducer = combineReducers({
  animals: animalReducer,
  employees: employeeReducer,
})

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
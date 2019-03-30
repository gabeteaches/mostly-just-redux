import store from './store.js';
import { addAnimal, budgetCuts } from './actions.js';

const { dispatch, getState, subscribe } = store;

console.log(store);


// In React
// connect(mapStateToProps, mapDispatchToProps)()
function connect(mapStateToProps) {
  return function(Component /* render */) {
    const props = mapStateToProps(getState());
    
    Component(props);
    // (componentDidMount)
    subscribe(() => {
      const newProps = mapStateToProps(getState());
      Component(newProps);
    })
    // Need unsubscribe (componentWillUnmount)
  }
}


const rootNode = document.getElementById('app');
let renderNumber = 0;

function Render(props) {
  const { animals, employees } = props;

  const renderNode = document.createElement('p');
  renderNode.innerHTML = ++renderNumber;
  const wrapperNode = document.createElement('div');
  const animalsNode = document.createElement('h1');
  animalsNode.textContent = `Animals are ${animals.join(', ')}`;
  const employeeNode = document.createElement('h2');
  employeeNode.textContent = `Employees are ${employees.join(', ')}`;

  wrapperNode.append(
    renderNumber,
    animalsNode,
    employeeNode,
  )
  rootNode.appendChild(wrapperNode);
}

function mapStateToProps(state) {
  console.log('map state', state);
  return {
    animals: state.animals,
    employees: state.employees,
  }
}

connect(mapStateToProps)(Render);

// Not using connect way
// Render(getState());
// subscribe(() => {
//   console.log('update', getState());
//   Render(getState());
// })

dispatch(budgetCuts());
dispatch(addAnimal('Lion'))
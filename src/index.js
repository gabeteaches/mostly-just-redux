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

  const wrapperNode = document.createElement('div');

  const renderNode = document.createElement('p');
  renderNode.textContent = `Times rendered ${++renderNumber}`;
  const animalsNode = document.createElement('h1');
  animalsNode.textContent = `Animals are ${animals.join(', ')}`;
  const employeeNode = document.createElement('h2');
  employeeNode.textContent = `Employees are ${employees.join(', ')}`;

  wrapperNode.append(
    renderNode,
    animalsNode,
    employeeNode,
  )
  // Remove previous child
  if (rootNode.lastElementChild) {
    rootNode.removeChild(rootNode.lastElementChild)
  }
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
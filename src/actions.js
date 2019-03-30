export const ADD_ANIMAL = 'ADD_ANIMAL';
export function addAnimal(animal) {
  return {
    type: ADD_ANIMAL,
    payload: animal,
  }
}
export const BUDGET_CUTS = 'BUDGET_CUTS';
export function budgetCuts() {
  return {
    type: BUDGET_CUTS
  }
} 
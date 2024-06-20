// store.js
import { createStore } from 'redux';

// Initial state
const initialState = {
  courses: [],
};

// Reducer
const coursesReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_COURSE':
      return {
        ...state,
        courses: [...state.courses, action.payload],
      };
    default:
      return state;
  }
};

// Create Redux store
const store = createStore(coursesReducer);

export default store;

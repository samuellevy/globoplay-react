import React, { createContext, useReducer, useContext } from "react";

export const TodoContext = createContext([]);

// Initial state
const initialItems = {
  key: "",
  component: ""
};

// Actions
export const UPDATE_KEY = "UPDATE_KEY";

// Action creators
export function updateKey(key: string) {
  return { type: UPDATE_KEY, key };
}

// Reducer
export function controlKeyReducer(state: any, action: any) {
  switch (action.type) {
    case UPDATE_KEY:
      return {...state, key:action.key}
    default:
      return state;
  }
}

function KeyboardProvider(props: any) {
  const [items, dispatch] = useReducer(controlKeyReducer, initialItems);

  const todoData = { items, dispatch };

  return <TodoContext.Provider value={todoData} {...props} />;
}

function useKeyboardContext() {
  return useContext(TodoContext);
}

export { KeyboardProvider, useKeyboardContext };

import React, { createContext, useReducer, useContext } from "react";

export const TodoContext = createContext([]);

// Initial state
const initialItems = {
  key: "",
  component: "featured",
  last: "",
};

// Actions
export const UPDATE_KEY = "UPDATE_KEY";
export const CHANGE_COMPONENT = "CHANGE_COMPONENT";

// Action creators
export function updateKey(key: string) {
  return { type: UPDATE_KEY, key };
}

export function changeComponent(component: string) {
  return { type: CHANGE_COMPONENT, component };
}

// Reducer
export function controlKeyReducer(state: any, action: any) {
  switch (action.type) {
    case UPDATE_KEY:
      return { ...state, key: action.key };
    case CHANGE_COMPONENT:
      return { ...state, component: action.component, last: state.component };
    default:
      return state;
  }
}

function KeyboardProvider(props: any) {
  const [keyControl, dispatch] = useReducer(controlKeyReducer, initialItems);

  const todoData = { keyControl, dispatch };

  return <TodoContext.Provider value={todoData} {...props} />;
}

function useKeyboardContext() {
  return useContext(TodoContext);
}

export { KeyboardProvider, useKeyboardContext };

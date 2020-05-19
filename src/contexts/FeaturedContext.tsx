import React, { createContext, useReducer, useContext } from "react";

export const Context = createContext([]);

// Initial state
const initialItems = {
  active_item: 0,
};

// Actions
export const SET_ACTIVE = "UPDATE_KEY";

// Action creators
export function updateKey(item_id: string) {
  return { type: SET_ACTIVE, item_id };
}

// Reducer
export function controlFeatureReducer(state: any, action: any) {
  switch (action.type) {
    case SET_ACTIVE:
      return { ...state, active_item: action.item_id };
    default:
      return state;
  }
}

function FeatureProvider(props: any) {
  const [keyControl, dispatch] = useReducer(
    controlFeatureReducer,
    initialItems,
  );
  const todoData = { keyControl, dispatch };
  return <Context.Provider value={todoData} {...props} />;
}

function useFeaturedContext() {
  return useContext(Context);
}

export { FeatureProvider, useFeaturedContext };

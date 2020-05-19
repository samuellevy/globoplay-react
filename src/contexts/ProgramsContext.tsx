import React, { createContext, useReducer, useContext } from "react";

export const ProgramsContext = createContext([]);

const initialState = {
  episodes: [],
  activeProgram: 0,
};

// Actions
export const UPDATE_ITEMS = "UPDATE_ITEMS";
export const SET_ACTIVE_PROGRAM = "SET_ACTIVE_PROGRAM";

// Action creators
export function updateItems(episodes: Object[]) {
  return { type: UPDATE_ITEMS, episodes };
}

export function setActiveProgram(program_id: number) {
  return { type: SET_ACTIVE_PROGRAM, activeProgram: program_id };
}

export function programsReducer(state: any, action: any) {
  switch (action.type) {
    case "UPDATE_ITEMS":
      return { ...state, episodes: action.episodes };
    case "SET_ACTIVE_PROGRAM":
      return { ...state, activeProgram: action.activeProgram };
    default:
      return state;
  }
}

function ProgramsProvider(props: any) {
  const [programs, dispatch] = useReducer(programsReducer, initialState);

  const programsData = { programs, dispatch };

  return <ProgramsContext.Provider value={programsData} {...props} />;
}

function useProgramsContext() {
  return useContext(ProgramsContext);
}

export { ProgramsProvider, useProgramsContext };

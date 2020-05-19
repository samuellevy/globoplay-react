import React, { createContext, useReducer, useContext } from "react";

export const ProgramsContext = createContext([]);

const initialState = {
  teste: "funcionou",
};

// Actions
export const UPDATE_KEY = "UPDATE_KEY";

// Action creators
export function updateKey(key: string) {
  return { type: UPDATE_KEY, teste: key };
}

export function programsReducer(state: any, action: any) {
  switch (action.type) {
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

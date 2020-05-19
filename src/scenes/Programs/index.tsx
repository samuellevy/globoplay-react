import React, { useEffect } from "react";

import { useProgramsContext } from "../../contexts/ProgramsContext";
import {
  useKeyboardContext,
  changeComponent,
  updateKey,
} from "../../contexts/KeyboardContext";

const Programs: React.FC = () => {
  const { programs, dispatch }: any = useProgramsContext();
  // const { keyControl, dispatch }: any = useKeyboardContext();

  // useEffect(() => {
  //   dispatch(updateKey("a"));
  //   console.log(programs);
  // }, []);

  useEffect(() => {
    console.log(programs);
  }, [programs]);
  return <div />;
};

export default Programs;

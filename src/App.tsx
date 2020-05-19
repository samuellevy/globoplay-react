import React from "react";

import GlobalStyle from "./global/styles";
import Home from "./scenes/Home";
import { KeyboardProvider } from "./contexts/KeyboardContext";
import { ProgramsProvider } from "./contexts/ProgramsContext";
import KeyboardHandle from "./components/KeyboardHandle";
import Menu from "./components/Menu";
import Programs from "./scenes/Programs";

const App: React.FC = () => (
  <>
    <KeyboardProvider>
      <KeyboardHandle />
      <Menu />
      <ProgramsProvider>
        <Home />
      </ProgramsProvider>
    </KeyboardProvider>
    <GlobalStyle />
  </>
);

export default App;

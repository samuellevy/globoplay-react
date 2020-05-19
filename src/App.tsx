import React from "react";

import GlobalStyle from "./global/styles";
import Home from "./scenes/Home";
import { KeyboardProvider } from "./contexts/KeyboardContext";
import KeyboardHandle from "./components/KeyboardHandle";
import Menu from "./components/Menu";

const App: React.FC = () => (
  <>
    <KeyboardProvider>
      <KeyboardHandle />
      <Menu />
      <Home />
    </KeyboardProvider>
    <GlobalStyle />
  </>
);

export default App;

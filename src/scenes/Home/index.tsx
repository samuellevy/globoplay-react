import React from "react";
import Menu from "../../components/Menu";

import { Container } from "./styles";

import { KeyboardProvider } from "../../contexts/KeyboardContext";
import KeyboardHandle from "../../components/KeyboardHandle";

const Home: React.FC = () => {
  return (
    <Container>
      <KeyboardProvider>
        <KeyboardHandle />
        <Menu />
      </KeyboardProvider>
    </Container>
  );
};

export default Home;

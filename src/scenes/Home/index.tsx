import React from "react";
import Menu from "../../components/Menu";

import { Container, Content, Cover } from "./styles";

import { KeyboardProvider } from "../../contexts/KeyboardContext";
import KeyboardHandle from "../../components/KeyboardHandle";

import coverBg from "../../assets/images/bg-bigbrotherbrasil.jpg";

const Home: React.FC = () => {
  return (
    <Container>
      <Cover background={coverBg}/>
      <Content>
        <h1>BIG BROTHER BRASIL</h1>
        <p>Acompanhe 24h ao vivo a casa mais<br/> vigiada do Brasil</p>
      </Content>
    </Container>
  );
};

export default Home;

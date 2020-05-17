import React from "react";
import { Container, Item } from "./styles";

const Menu: React.FC = () => {

  return (
  <Container>
    <Item>Busca</Item>
    <Item>Início</Item>
    <Item>Agora na Globo</Item>
    <Item>Categorias</Item>
    <Item>Minha conta</Item>
  </Container>
  );
};

export default Menu;

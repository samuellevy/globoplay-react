import React, {useEffect, useState} from "react";
import { Container, Item } from "./styles";
import { useKeyboardContext } from "../../contexts/KeyboardContext";

const Menu: React.FC = () => {
  const { items, dispatch }: any = useKeyboardContext();

  useEffect(()=>{
    console.log(items);
  },[items]);

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

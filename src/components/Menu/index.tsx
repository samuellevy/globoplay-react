import React, {useEffect, useState} from "react";
import { Container, Item } from "./styles";
import Icon from "../Icon";
import { useKeyboardContext } from "../../contexts/KeyboardContext";

const Menu: React.FC = () => {
  const [items, setItem] = useState([
    {
      id: 1,
      slug: 'busca',
      title: "Busca"
    },
    {
      id: 2,
      slug: 'inicio',
      title: "Início"
    },
    {
      id: 3,
      slug: 'agora-na-globo',
      title: "Agora na Globo"
    },
    {
      id: 4,
      slug: 'categorias',
      title: "Categorias"
    },
    {
      id: 5,
      slug: 'minha-conta',
      title: "Minha conta"
    },
  ]);

  const [activeItem, setActiveItem] = useState(0);
  const [activeMenu, setActiveMenu] = useState(false);
  const { keyControl, dispatch }: any = useKeyboardContext();

  useEffect(()=>{
    if(keyControl.component==="menu"){
      controlHandler(keyControl.key);
    }
  },[keyControl]);

  useEffect(()=>{
    if(keyControl.component==="menu"){
      setActiveMenu(true);
      setActiveItem(1);
    }
  },[keyControl.component]);

  const controlHandler = (key: string) => {
    let newActiveItem = activeItem;
    if(key==="ArrowDown"){
      if(activeItem < items.length){
        newActiveItem++;
        setActiveMenu(true);
      }
      setActiveItem(newActiveItem);
    }
    else if(key==="ArrowUp"){
      if(activeItem > 0){
        newActiveItem--;
      }
      if(activeItem === 1){
        setActiveMenu(false);
      }
      setActiveItem(newActiveItem);
    }
  }

  return (
  <Container active={activeMenu}>
    {items.map((item)=>{
      return (
        <Item key={item.slug} selected={activeItem===item.id}>
          <Icon name={item.slug}/>
          <span>{item.title}</span>
        </Item>
      )
    })}
  </Container>
  );
};

export default Menu;

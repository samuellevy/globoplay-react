import React, {useEffect, useState} from "react";
import { Container, Item } from "./styles";
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
      slug: 'início',
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
  const { keyControl, dispatch }: any = useKeyboardContext();

  useEffect(()=>{
    // console.log(keyControl);
    controlHandler(keyControl.key);
    console.log(activeItem);
  },[keyControl]);

  const controlHandler = (key: string) => {
    let newActiveItem = activeItem;
    if(key==="ArrowDown"){
      if(activeItem < items.length){
        newActiveItem++;
      }
      setActiveItem(newActiveItem);
    }
    else if(key==="ArrowUp"){
      if(activeItem > 1){
        newActiveItem--;
      }
      setActiveItem(newActiveItem);
    }
  }

  return (
  <Container>
    {items.map((item)=>{
      return <Item key={item.slug} selected={activeItem===item.id}>{item.title}</Item>
    })}
  </Container>
  );
};

export default Menu;

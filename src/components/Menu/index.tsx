import React, { useEffect, useState } from "react";
import { Container, Item } from "./styles";
import Icon from "../Icon";
import {
  useKeyboardContext,
  changeComponent,
} from "../../contexts/KeyboardContext";

const Menu: React.FC = () => {
  const [items] = useState([
    {
      id: 1,
      slug: "busca",
      title: "Busca",
    },
    {
      id: 2,
      slug: "inicio",
      title: "Início",
    },
    {
      id: 3,
      slug: "agora-na-globo",
      title: "Agora na Globo",
    },
    {
      id: 4,
      slug: "categorias",
      title: "Categorias",
    },
    {
      id: 5,
      slug: "minha-conta",
      title: "Minha conta",
    },
  ]);

  const [activeItem, setActiveItem] = useState(0);
  const [activeMenu, setActiveMenu] = useState(false);
  const { keyControl, dispatch }: any = useKeyboardContext();

  useEffect(() => {
    if (keyControl.component === "menu") {
      controlHandler(keyControl.key);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [keyControl]);

  useEffect(() => {
    if (keyControl.component === "menu") {
      setActiveMenu(true);
      setActiveItem(1);
    } else {
      setActiveMenu(false);
      setActiveItem(0);
    }
  }, [keyControl.component]);

  const controlHandler = (key: string) => {
    let newActiveItem = activeItem;
    if (key === "ArrowDown") {
      if (activeItem < items.length) {
        newActiveItem++;
        setActiveMenu(true);
      }
      setActiveItem(newActiveItem);
    } else if (key === "ArrowUp") {
      if (activeItem > 1) {
        newActiveItem--;
      }
      setActiveItem(newActiveItem);
    } else if (key === "ArrowRight") {
      if (keyControl.last !== "") {
        dispatch(changeComponent(keyControl.last));
      } else {
        dispatch(changeComponent("featured"));
      }
    }
  };

  return (
    <Container active={activeMenu}>
      {items.map((item) => {
        return (
          <Item key={item.slug} selected={activeItem === item.id}>
            <Icon name={item.slug} />
            <span>{item.title}</span>
          </Item>
        );
      })}
    </Container>
  );
};

export default Menu;

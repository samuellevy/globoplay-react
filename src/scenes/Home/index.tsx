import React, {useState, useEffect} from "react";
import Menu from "../../components/Menu";

import { Container, Content, Cover, Options, Button } from "./styles";

import KeyboardHandle from "../../components/KeyboardHandle";

import coverBg from "../../assets/images/bg-bigbrotherbrasil.jpg";
import Featured from "../../components/Featured";

import { useKeyboardContext, changeComponent } from "../../contexts/KeyboardContext";

const Home: React.FC = () => {
  const { keyControl, dispatch }: any = useKeyboardContext();

  const [linksSelected, setLinksSelected] = useState(false);
  const [activeItem, setActiveItem] = useState(0);

  const [items, setItem] = useState([
    {
      id: 1,
      slug: 'assista',
      title: "Assista"
    },
    {
      id: 2,
      slug: 'veja-mais',
      title: "Veja mais"
    },
  ]);

  useEffect(()=>{
    if(keyControl.component==="links"){
      setLinksSelected(true);
      if(keyControl.key==="ArrowRight"){
        setActiveItem(0);
      }else{
        setActiveItem(1);
      }
    }
  }, [keyControl.component]);

  useEffect(()=>{
    if(keyControl.component==="links"){
      controlHandler(keyControl.key);
    }
  },[keyControl]);

  const controlHandler = (key: string) => {
    let newActiveItem = activeItem;
    if(key==="ArrowDown"){
      setLinksSelected(false);
      setActiveItem(0);
      dispatch(changeComponent('featured'));
    }
    // if(activeItem === 1){
    //   dispatch(changeComponent("menu"));
    // }
    if(key==="ArrowLeft"){
      changeItem("previous");
    }
    else if(key==="ArrowRight"){
      changeItem("next");
    }
  }

  const changeItem = (direction: string) => {
    if(direction === 'next'){
      if(activeItem<2){
        setActiveItem(activeItem + 1);
      }
    }
    else if(direction === 'previous'){
      if(activeItem > 1){
        setActiveItem(activeItem - 1);
      }
      else if(activeItem === 1){
        setActiveItem(0);
        dispatch(changeComponent("menu"));
      }
    }
  }

  return (
    <Container>
      <Cover background={coverBg}/>
      <Content>
        <h1>BIG BROTHER BRASIL</h1>
        <p>Acompanhe 24h ao vivo a casa mais<br/> vigiada do Brasil</p>
        <Options>
          {items.map((item)=>{
            return (
              <Button key={item.slug} selected={activeItem===item.id}>{item.title}</Button>
            )
          })}
        </Options>

        <Featured/>
      </Content>
    </Container>
  );
};

export default Home;

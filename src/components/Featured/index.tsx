import React, {useEffect, useState} from 'react';

import { Container, Track } from './styles';
import ThumbItem from "../ThumbItem";

import { useKeyboardContext, changeComponent } from "../../contexts/KeyboardContext";

const Featured: React.FC = () => {
  const { keyControl, dispatch }: any = useKeyboardContext();

  const [featuredSelected, setFeaturedSelected] = useState(false);
  const [trackPosition, setTrackPosition] = useState(0);
  const [activeItem, setActiveItem] = useState(0);

  useEffect(()=>{
    if(keyControl.component==="featured"){
      if(featuredSelected === false){
        setFeaturedSelected(true);
        setActiveItem(1);
      }
      controlHandler(keyControl.key);
    }
  },[keyControl]);

  const controlHandler = (key: string) => {
    if(key==="ArrowLeft"){
      console.log('left');
      changeItem("previous");
    }

    else if(key==="ArrowRight"){
      if(featuredSelected===false){
        setFeaturedSelected(true);
        setActiveItem(1);
      }
      else{
        changeItem("next");
      }
    }
  }

  const changeItem = (direction: string) => {
    if(direction === 'next'){
      if(activeItem<6){
        setTrackPosition(trackPosition + 395 + 25);
        setActiveItem(activeItem + 1);
      }
    }
    else if(direction === 'previous'){
      if(activeItem > 0){
        setTrackPosition(trackPosition - 395 - 25);
        setActiveItem(activeItem - 1);
      }
      if(activeItem === 1){
        dispatch(changeComponent("menu"));
      }
    }
  }

  return (
    <Container selected={featuredSelected}>
      <Track position={trackPosition}>
        <ThumbItem/>
        <ThumbItem/>
        <ThumbItem/>
        <ThumbItem/>
        <ThumbItem/>
        <ThumbItem/>
      </Track>
    </Container>
  );
}

export default Featured;
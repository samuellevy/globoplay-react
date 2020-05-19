import React, { useEffect, useState } from "react";

import { Container, Track } from "./styles";
import ThumbItem from "../ThumbItem";

import {
  useKeyboardContext,
  changeComponent,
} from "../../contexts/KeyboardContext";

const Featured: React.FC = (props) => {
  const { keyControl, dispatch }: any = useKeyboardContext();

  const [featuredSelected, setFeaturedSelected] = useState(false);
  const [trackPosition, setTrackPosition] = useState(0);

  const [activeItem, setActiveItem] = useState(1);

  useEffect(() => {
    if (keyControl.component === "featured") {
      if (featuredSelected === false) {
        setFeaturedSelected(true);
      }
      controlHandler(keyControl.key);
    }
  }, [keyControl]);

  const controlHandler = (key: string) => {
    if (key === "ArrowLeft") {
      changeItem("previous");
    } else if (key === "ArrowRight") {
      if (featuredSelected === false) {
        // setFeaturedSelected(true);
        // setActiveItem(1);
      } else {
        changeItem("next");
      }
    } else if (key === "ArrowUp") {
      setFeaturedSelected(false);
      dispatch(changeComponent("links"));
      // changeItem("reset");
    }
  };

  const changeItem = (direction: string) => {
    if (direction === "next") {
      if (activeItem < 6) {
        setTrackPosition(trackPosition + 395 + 25);
        setActiveItem(activeItem + 1);
      }
    } else if (direction === "previous") {
      if (activeItem > 1) {
        setTrackPosition(trackPosition - 395 - 25);
        setActiveItem(activeItem - 1);
      } else if (activeItem === 1) {
        dispatch(changeComponent("menu"));
        setFeaturedSelected(false);
      }
    } else if (direction === "reset") {
      setTrackPosition(0);
      setActiveItem(1);
    }
  };

  return (
    <Container selected={featuredSelected}>
      <Track position={trackPosition}>{props.children}</Track>
    </Container>
  );
};

export { ThumbItem };
export default Featured;

import React, { useEffect, useState } from "react";

import { Container, Track } from "./styles";
import ThumbItem from "../ThumbItem";

import {
  useKeyboardContext,
  changeComponent,
} from "../../contexts/KeyboardContext";

import {
  useProgramsContext,
  setActiveProgram,
} from "../../contexts/ProgramsContext";
import IEpisodeDetails from "../../dtos/IEpisodeDetails";

interface IFeatured{
  episodes:IEpisodeDetails[];
  trackName:string;
}

const Featured: React.FC<IFeatured> = (props) => {
  const { trackName, episodes } = props;
  const { keyControl, dispatch }: any = useKeyboardContext();
  const programsContext: any = useProgramsContext();

  const [featuredSelected, setFeaturedSelected] = useState(false);
  const [trackPosition, setTrackPosition] = useState(0);
  const [activeItem, setActiveItem] = useState(0);

  const totalPrograms = programsContext.programs.episodes.length;

  const controlHandler = (key: string) => {
    switch(key){
      case 'ArrowLeft':
        changeItem("previous");
        break;
      case 'ArrowRight':
        if (featuredSelected === false) {
          setFeaturedSelected(true);
          setActiveItem(1);
        } else {
          changeItem("next");
        }
        break;
      case 'ArrowDown':
        changeItem("down");
        setFeaturedSelected(false);
        break;
      case 'ArrowUp':
        changeItem("up");
        setFeaturedSelected(false);
        break;
    }
  };

  const changeItem = (direction: string) => {
    if (direction === "next") {
      if (activeItem < totalPrograms - 1) {
        setTrackPosition(trackPosition + 395 + 25);
        setActiveItem(activeItem + 1);
      }
    } else if (direction === "previous") {
      if (activeItem > 0) {
        setTrackPosition(trackPosition - 395 - 25);
        setActiveItem(activeItem - 1);
      } else if (activeItem === 0) {
        dispatch(changeComponent("menu"));
        setFeaturedSelected(false);
      }
    } else if (direction === "down") {
      switch(trackName){
        case "track-0":
          dispatch(changeComponent("track-1"));
          break;
        default:
          break;
      }

    } else if (direction === "up") {
      switch(trackName){
        case "track-0":
          programsContext.dispatch(setActiveProgram({cover: "api/images/bg-bigbrotherbrasil.jpg"}));
          dispatch(changeComponent("links"));
          break;
        case "track-1":
          dispatch(changeComponent("track-0"));
          break;
        default:
          break;
      }
    } else if (direction === "reset") {
      setTrackPosition(0);
      setActiveItem(1);
    }
  };

  const keyControlMonitor = () => {
    if (keyControl.component === trackName){
      if (featuredSelected === false) {
        programsContext.dispatch(setActiveProgram(episodes[0]));
        setFeaturedSelected(true);
      } else {
        controlHandler(keyControl.key);
      }
    }
  }

  useEffect(keyControlMonitor, [keyControl]);

  const setProgramsContext = () => {
    programsContext.dispatch(setActiveProgram(episodes[activeItem]));
  }

  useEffect(setProgramsContext, [activeItem]);

  return (
    <Container selected={featuredSelected}>
      <Track position={trackPosition}>
      {episodes.map((item: IEpisodeDetails) => {
            const { id, title, description, thumbnail, duration, cover } = item;
            return (
              <ThumbItem
                key={id}
                title={title}
                thumbnail={thumbnail}
                description={description}
                duration={duration}
                cover={cover}
              />
            );
          })}
      </Track>
    </Container>
  );
};

export { ThumbItem };
export default Featured;

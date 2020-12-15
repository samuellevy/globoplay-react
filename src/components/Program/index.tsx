import React, { useState, useEffect } from "react";

import { Details, Options, Button } from "./styles";
import {
  useKeyboardContext,
  changeComponent,
} from "../../contexts/KeyboardContext";

import { useProgramsContext } from "../../contexts/ProgramsContext";

const Program: React.FC = () => {
  const [activeItem, setActiveItem] = useState(0);
  const { keyControl, dispatch }: any = useKeyboardContext();
  const [, setLinksSelected] = useState(false);

  const { programs }: any = useProgramsContext();
  const [items] = useState([
    {
      id: 1,
      slug: "assista",
      title: "Assista",
    },
    {
      id: 2,
      slug: "veja-mais",
      title: "Veja mais",
    },
  ]);

  const changeComponentByKey = () =>{
    if (keyControl.component === "links") {
      setLinksSelected(true);
      if (keyControl.key === "ArrowRight") {
        setActiveItem(0);
      } else {
        setActiveItem(1);
      }
    }
  }

  const controlPrograms = () => {
    if (keyControl.component === "links") {
      controlHandler(keyControl.key);
    }
  }

  useEffect(changeComponentByKey, [keyControl.component]);

  useEffect(controlPrograms, [keyControl]);

  const controlHandler = (key: string) => {
    if (key === "ArrowDown") {
      setLinksSelected(false);
      setActiveItem(0);
      dispatch(changeComponent("track-0"));
    }
    if (key === "ArrowLeft") {
      changeItem("previous");
    } else if (key === "ArrowRight") {
      changeItem("next");
    }
  };

  const changeItem = (direction: string) => {
    if (direction === "next") {
      if (activeItem < 2) {
        setActiveItem(activeItem + 1);
      }
    } else if (direction === "previous") {
      if (activeItem > 1) {
        setActiveItem(activeItem - 1);
      } else if (activeItem === 1) {
        setActiveItem(0);
        dispatch(changeComponent("menu"));
      }
    }
  };

  return (
    <>
      {keyControl.component === "featured" ? (
        programs.episodes.length > 0 && (
          <Details>
            <h1>{programs.episodes[programs.activeProgram].title}</h1>
            <p>{programs.episodes[programs.activeProgram].description}</p>
          </Details>
        )
      ) : (
        <>
          <Details>
            <h1>Big Brother Brasil</h1>
            <p>
              Assista 24h por dia
              <br />a casa mais vigiada do Brasil
            </p>
          </Details>
          <Options>
            {items.map((item) => {
              return (
                <Button key={item.slug} selected={activeItem === item.id}>
                  {item.title}
                </Button>
              );
            })}
          </Options>
        </>
      )}
    </>
  );
};

export default Program;

import React, { useState, useEffect, useCallback } from "react";

import { Container, Content, Cover } from "./styles";

import coverBg from "../../assets/images/bg-bigbrotherbrasil.jpg";
import Featured, { ThumbItem } from "../../components/Featured";

import Program from "../../components/Program";

import api from "../../services/api";

import {
  useProgramsContext,
  updateItems,
  setActiveProgram,
} from "../../contexts/ProgramsContext";

const Home: React.FC = () => {
  const { programs, dispatch }: any = useProgramsContext();
  const { items, activeProgram } = programs;

  async function getPrograms() {
    try {
      const response = await api.get("/data.json");
      if (response.data.programs.length > 0) {
        dispatch(updateItems(response.data.programs));
      }
    } catch (err) {
      console.log("erro ao recuperar dados da api.");
    }
  }

  useEffect(() => {
    getPrograms();
  }, []);

  interface IItem {
    id: number;
    title?: string;
    description?: string;
    thumbnail?: string;
    cover?: string;
  }
  return (
    <Container>
      {items.map((item: IItem, key: number) => (
        <Cover background={item.cover} active={key === activeProgram} />
      ))}

      <Content>
        <Program />

        <Featured>
          {items.map((item: IItem) => {
            const { id, title, description, thumbnail } = item;
            return (
              <ThumbItem
                key={id}
                title={title}
                thumbnail={thumbnail}
                description={description}
              />
            );
          })}
        </Featured>
      </Content>
    </Container>
  );
};

export default Home;

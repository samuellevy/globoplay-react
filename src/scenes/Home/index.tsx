import React, { useEffect } from "react";

import { Container, Content, Cover } from "./styles";

import coverBg from "../../assets/images/bg-bigbrotherbrasil.jpg";
import Featured, { ThumbItem } from "../../components/Featured";

import Program from "../../components/Program";

import api from "../../services/api";

import {
  useProgramsContext,
  updateItems,
} from "../../contexts/ProgramsContext";

import { useKeyboardContext } from "../../contexts/KeyboardContext";

const Home: React.FC = () => {
  const { keyControl }: any = useKeyboardContext();
  const { programs, dispatch }: any = useProgramsContext();
  const { episodes, activeProgram } = programs;

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
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
      {episodes.map((item: IItem, key: number) => (
        <Cover
          background={item.cover}
          active={key === activeProgram}
          key={item.id}
        />
      ))}
      <Cover
        background={coverBg}
        active={keyControl.component !== "featured" && true}
        key={"default"}
      />

      <Content>
        <Program />

        <Featured>
          {episodes.map((item: IItem) => {
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

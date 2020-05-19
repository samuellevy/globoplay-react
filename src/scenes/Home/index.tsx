import React, { useState, useEffect } from "react";
import Menu from "../../components/Menu";

import { Container, Content, Cover } from "./styles";

import KeyboardHandle from "../../components/KeyboardHandle";

import coverBg from "../../assets/images/bg-bigbrotherbrasil.jpg";
import Featured, { ThumbItem } from "../../components/Featured";

import Program from "../../components/Program";

import {
  useKeyboardContext,
  changeComponent,
} from "../../contexts/KeyboardContext";

import api from "../../services/api";

const Home: React.FC = () => {
  const [programs, setPrograms] = useState([]);

  async function getPrograms() {
    try {
      const response = await api.get("/data.json");
      setPrograms(response.data.programs);
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
      <Cover background={coverBg} />
      <Content>
        <Program />

        <Featured>
          {programs.map((item: IItem) => {
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

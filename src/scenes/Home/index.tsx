import React, { useEffect, useState } from "react";

import { Container, Content, Cover } from "./styles";

import Featured from "../../components/Featured";

import Program from "../../components/Program";

import api from "../../services/api";

import {
  useProgramsContext,
  updateItems,
} from "../../contexts/ProgramsContext";

const Home: React.FC = () => {
  const [coverBg] = useState("api/images/bg-bigbrotherbrasil.jpg");
  const { programs, dispatch }: any = useProgramsContext();
  const { episodes, activeProgram } = programs;

  const callGetPrograms = () => {
    getPrograms();
  }

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

  useEffect(callGetPrograms, []);


  return (
    <Container>
      <Cover
        background={activeProgram?activeProgram.cover : coverBg}
        active={true}
        key={activeProgram?activeProgram.id:0}
      />

      <Content>
        <Program />

        <Featured trackName={"track-0"} episodes={episodes}/>
        <Featured trackName={"track-1"} episodes={episodes}/>
      </Content>
    </Container>
  );
};

export default Home;

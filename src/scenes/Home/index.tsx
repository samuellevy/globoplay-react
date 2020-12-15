import React, { useEffect, useState } from "react";

import { Container, Content, Cover } from "./styles";

import Featured from "../../components/Featured";

import Program from "../../components/Program";

import api from "../../services/api";

import {
  useProgramsContext,
  updateItems,
} from "../../contexts/ProgramsContext";

interface ITrack {
  key: number;
}

const Home: React.FC = () => {
  const tracks: ITrack[] = [
    {
      key: 0
    },
    {
      key: 1
    }
  ];

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

        {tracks.map((track: ITrack)=>{
          return <Featured key={track.key} trackName={`track-${track.key}`} episodes={episodes} totalTracks={tracks.length}/>
        })}
      </Content>
    </Container>
  );
};

export default Home;

import React from 'react';

import { Container, Track } from './styles';

import ThumbItem from "../ThumbItem";

const Featured: React.FC = () => {
  return (
    <Container selected={true}>
      <Track>
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

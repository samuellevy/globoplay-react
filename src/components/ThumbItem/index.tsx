import React from 'react';

import { Container, Thumbnail, Title, Content, Description, DurationBox } from './styles';

import track_1 from "../../assets/images/track_item_1.jpg";

const ThumbItem: React.FC = () => {
  return(
    <Container selected={false}>
      <Thumbnail img={track_1}/>
      <Content>
        <Title>Big Brother Brasil</Title>
        <Description>Bate-Papo BBB com Thelma, vencedora do BBB20</Description>
        <DurationBox>3 min</DurationBox>
      </Content>
    </Container>
  );
}

export default ThumbItem;

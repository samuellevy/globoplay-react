import React from "react";
import IEpisodeDetails from "../../dtos/IEpisodeDetails";

import {
  Container,
  Thumbnail,
  Title,
  Content,
  Description,
  DurationBox,
} from "./styles";

const ThumbItem = ({
  title,
  thumbnail,
  description,
  duration,
  cover
}: IEpisodeDetails) => {
  return (
    <Container selected={false}>
      <Thumbnail img={thumbnail} />
      <Content>
        <Title>{title}</Title>
        <Description>{description}</Description>
        <DurationBox>{duration}</DurationBox>
      </Content>
    </Container>
  );
};

export default ThumbItem;

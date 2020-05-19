import React from "react";

import {
  Container,
  Thumbnail,
  Title,
  Content,
  Description,
  DurationBox,
} from "./styles";

type ThumbProps = {
  title?: string;
  thumbnail?: string;
  description?: string;
  duration?: string;
};

const ThumbItem = ({ title, thumbnail, description, duration }: ThumbProps) => {
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

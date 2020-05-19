import React from "react";

import {
  Container,
  Thumbnail,
  Title,
  Content,
  Description,
  DurationBox,
} from "./styles";

import track_1 from "../../assets/images/track_item_1.jpg";

type CardProps = {
  title?: string;
  thumbnail?: string;
  description?: string;
  duration?: string;
};

const ThumbItem = ({ title, thumbnail, description, duration }: CardProps) => {
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

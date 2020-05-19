import styled from "styled-components";
import React, { useEffect } from "react";
import { colors, metrics } from "../../global";

interface ICover {
  background?: any;
  active?: boolean;
}

export const Container = styled.div`
  width: 100%;
  height: 100vh;
`;

export const Content = styled.div`
  width: 100%;
  height: 100%;
  padding: 50px 150px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: absolute;
  top: 0;
  color: ${colors.white};
  font-size: ${metrics.fonts.big};
  background: transparent;
  background-image: linear-gradient(-180deg, rgba(0, 0, 0, 0.64), transparent);
  ::before {
    content: " ";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: transparent;
    background-image: linear-gradient(90deg, rgba(0, 0, 0, 0.64), transparent);
  }
  > * {
    position: relative;
    z-index: 2;
  }
`;

export const Cover = styled.div<ICover>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  font-size: 22px;
  opacity: ${(props) => (props.active ? 1 : 0)};
  transition: opacity 200ms linear;
  ${(props) =>
    props.background &&
    `
    background-image: url(${props.background});
    background-repeat: no-repeat;
    background-size: cover;
  `}
`;

import styled from "styled-components";

import { colors, metrics } from "../../global";

interface IContainer {
  active?: boolean
}

interface IItem {
  selected?: boolean
}

export const Container = styled.nav<IContainer>`
  position: fixed;
  height: 100vh;
  background-color: ${colors.darkGray};
  color: ${colors.white};
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: ${metrics.padding} 0;
  width: 100%;
  transform: translateX(-189px);
  max-width: 289px;
  transition: all 200ms linear;
  z-index: 99;
  span{
    opacity: 0;
    transition: opacity 500ms linear;
  }
  svg {
    transform: translateX(189px);
    transition: transform 200ms linear;
  }
  ${props => props.active && `
    width: 100%;
    transform: translateX(0px);
    > li {
      justify-content: flex-start;
    }
    svg{
      transform: translateX(0px);
    }
    span{
      opacity: 1;
    }
  `}
`;

export const Item = styled.li<IItem>`
  width: 100%;
  padding: 25px 25px;
  font-size: ${metrics.fonts.regular};
  font-family: "Open Sans", sans-serif;
  display: flex;
  position: relative;
  svg{
    fill: ${colors.white};
    margin: 0 10px;
  }
  ${props => props.selected && `
    background-color: ${colors.gray};
    color: ${colors.darkGray};
    transition: background-color 500ms linear;
    svg{
      fill: ${colors.darkGray};
    }
  `};
  }

`;

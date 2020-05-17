import styled from "styled-components";

import { colors, metrics } from "../../global";

interface IItem {
  selected?: boolean
}

export const Container = styled.nav`
  width: 100%;
  height: 100vh;
  max-width: 289px;
  background-color: ${colors.darkGray};
  color: ${colors.white};
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: ${metrics.padding} 0;
`;

export const Item = styled.li<IItem>`
  width: 100%;
  padding: 25px 50px;
  font-size: ${metrics.fonts.regular};
  font-family: "Open Sans", sans-serif;
  ${props => props.selected && `
    background-color: ${colors.gray};
    color: ${colors.darkGray};
  `};
  }
`;

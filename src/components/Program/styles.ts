import styled from "styled-components";
import { colors } from "../../global";

interface IButton {
  selected?: boolean;
}

export const Container = styled.div``;

export const Details = styled.div``;

export const Options = styled.div`
  display: flex;
  margin: 25px 0;
`;
export const Button = styled.button<IButton>`
  padding: 10px 20px;
  border: ${colors.gray} 1px solid;
  border-radius: 15px;
  margin-right: 15px;
  transition: all 200ms linear;
  ${(props) =>
    props.selected &&
    `
    color: ${colors.darkGray};
    background-color: ${colors.white};
  `}
`;

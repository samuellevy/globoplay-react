import styled from "styled-components";
import React from "react";
import { colors, metrics } from "../../global";

interface ICover{
  background?: any
}

interface IButton{
  selected?: boolean
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
  background-image: linear-gradient(-180deg,rgba(0,0,0,.64),transparent);
  ::before{
    content: " ";
    position: absolute;
    top: 0; left: 0;
    width: 100%;
    height: 100%;
    background: transparent;
    background-image: linear-gradient(90deg,rgba(0,0,0,.64),transparent);
  }
  > * {
    position: relative;
    z-index: 2;
  }
`;

export const Cover = styled.div<ICover>`
  width: 100%;
  height: 100%;
  object-fit: cover;
  font-size: 22px;
  ${props=>props.background && `
    background: url(${props.background}) no-repeat;
    background-size: cover;
  `}
`;

export const Options = styled.div`
  display: flex;
  margin: 25px 0;
`;
export const Button = styled.div<IButton>`
  padding: 10px 20px;
  border: ${colors.gray} 1px solid;
  border-radius: 15px;
  margin-right: 15px;
  transition: all 200ms linear;
  ${props=>props.selected && `
    color: ${colors.darkGray};
    background-color: ${colors.white};
  `}
`;

import styled from 'styled-components';
import {colors} from '../../global';

interface IContainer{
  selected: boolean
}

interface IThumbnail{
  img: any
}

export const Container = styled.article<IContainer>`
  width: 395px;
  height: 216px;
  position: relative;
  float: left;
  ::after{
    position: absolute;
    top: 0; left: 0;
    content: " ";
    width: 100%;
    height: 100%;
    ${props=>props.selected ?
      `background-image: linear-gradient(tomato 0%, ${colors.black}aa 0%);` :
      `background-image: linear-gradient(transparent 40%, ${colors.black}88 60%);`
    }
    z-index: 2;
  }
`;

export const Thumbnail = styled.figure<IThumbnail>`
  background: url(${props=>props.img});
  width: 395px;
  height: 216px;
  position: absolute;
  z-index: 1;
`;

export const Content = styled.div`
  position: absolute;
  z-index: 3;
  bottom: 0;
  width: 100%;
  padding: 5px 15px;
  display: flex;
  flex-wrap: wrap;
`;

export const Title = styled.h3`
  text-shadow: 1px 1px 0 #000;
  font-size: 13px;
  text-transform: uppercase;
  width: 100%;
`;
export const Description = styled.figcaption`
  font-size: 13px;
  width: 80%;
  padding-bottom: 10px;
`;
export const DurationBox = styled.div`
  width: 20%;
  font-size: 12px;
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  padding-bottom: 5px;
`;

import styled from 'styled-components';

interface IContainer{
  selected: boolean
}

interface ITrack{
  position: number
}

export const Container = styled.div<IContainer>`
  margin: 50px 0;
  overflow: hidden;
  position: relative;

  ${props=>props.selected && `
    ::after{
      box-sizing: border-box;
      content: " ";
      width: 395px;
      height: 216px;
      position: absolute;
      top: 0; left: 0;
      border: white 5px solid;
    }
  `}
`;

export const Track = styled.div<ITrack>`
  width: 9999px;
  transform: translateX(-${props=>props.position}px);
  transition: all 200ms linear;
`;

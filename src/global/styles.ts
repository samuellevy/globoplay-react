import { createGlobalStyle } from "styled-components";
import { colors } from "./";
export default createGlobalStyle`
*{
  margin: 0;
  padding: 0;
  outline: 0;
  box-sizing: border-box;
  list-style: none;

  -webkit-font-smoothing: antialiased;
}

body{
  background: ${colors.gray};
  font-family: "Open Sans", sans-serif;
}

button{
  border: none;
  margin: 0;
  padding: 0;
  width: auto;
  overflow: visible;
  background: transparent;
  color: inherit;
  font: inherit;
  line-height: normal;
  -webkit-appearance: none;
  border: 0;
}
`;

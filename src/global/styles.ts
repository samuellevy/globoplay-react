import { createGlobalStyle } from "styled-components";
import {colors} from "./"
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
}
`;

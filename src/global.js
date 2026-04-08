import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    outline: 0;
    font-family: 'Roboto';
    font-size: 1em;
    font-weight: 400;
    letter-spacing: 0em;
    box-sizing: border-box;
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;
}

body{
    background-color: #0C0F40;
    color: #fff;
}
`;

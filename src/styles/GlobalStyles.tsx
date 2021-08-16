import { createGlobalStyle, DefaultTheme } from "styled-components";

export const theme: DefaultTheme = {
  colors: {
    primary: "red",
    text: "black",
    background: "white",
    link: "yellow",
    component: "whitesmoke",
  },
};

const GlobalStyles = createGlobalStyle`
   :root{
     --color-text: ${(props) => props.theme.colors.text};
     --color-background:  ${(props) => props.theme.colors.background};
     --color-link: #f5222d;
     --color-component: ${(props) => props.theme.colors.component}
   }
   body{
     transition: 0.25s linear all;
   }
   .App {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    overflow-x: hidden;
    position: relative;
  }
  .AppMain {
    flex: 1;
    overflow: hidden;
    background-color: white;
  }
`;

export default GlobalStyles;

import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  outline: 0;
  line-height: normal;
}

body {
  background: #ffffff;
  color: #5E5E5E;
  -webkit-font-smoothing: antialiased;
  overflow-x: hidden !important;
}

body, input, text-area button {
  font-family: 'Roboto', sans-serif;
  color: #5E5E5E;
}

h1, h2, h3, h4, h5, h6 {
  font-weight: 500;
}

button {
  background: none;
  border: none;
  cursor: pointer;
}

`;
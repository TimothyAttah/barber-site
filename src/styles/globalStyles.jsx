import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    max-width: 1500px;
    width: 100%;
    margin: auto;

  }

  html,
  body {
    overflow-x: hidden;
  }


ul {
  list-style: none;
  li{
    padding: 0;
    margin: 0;
  }
}

a {
  text-decoration: none;
}

button {
  outline: none;
  border: none;
  cursor: pointer;
  :focus {
    outline: none;
  }
}

input {
  outline: none;
}

img {
  ${
    '' /* width: 100%;
  object-fit: cover; */
  }
}
`;

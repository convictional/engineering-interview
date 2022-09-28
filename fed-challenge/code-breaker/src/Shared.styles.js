import styled, { createGlobalStyle } from "styled-components";
import { Button } from "react-bootstrap";

export const GlobalStyles = createGlobalStyle`
  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
  }
`

export const Header = styled.header`
  text-transform: uppercase;
  color: var(--secondary);
  background: var(--light);
  text-align: center;
  border-bottom: 1px solid var(--secondary);
  padding: 1rem;
  align-self: stretch;

  & > h1 {
    font-size: 2rem;
  }
`;

export const GameColumn = styled.div`
  width: 30rem;
`;

export const ControlsColumn = styled.div`
  width: 10rem;
  padding: 1rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 0.5rem;
`;

export const ColorChoice = styled.div`
  border-radius: 4px;
  background: ${(props) => props.color};
  width: 100%;
  height: 3.5rem;
  border: ${(props) => (props.active ? "4px solid var(--dark)" : "none")};
  cursor: pointer;
`;

export const GuessBlock = styled.div`
  border: ${(props) => (props.color ? "none" : "2px dashed #eee")};
  border-radius: 4px;
  height: 3rem;
  width: 3rem;
  margin: 0 0.5rem;
  background: ${(props) => (props.color ? props.color : "white")};
  cursor: pointer;
`;

export const TimeDisplay = styled.p`
  text-align: center;
  grid-column: span 2;
  color: var (--secondary);
  font-size: 2rem;
  margin-top: 1rem;
  margin-bottom: 0rem;
`;

export const ControlButton = styled(Button)`
  grid-column: span 2;
`;

export const Page = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  padding-bottom: 3rem;

  & > h1 {
    max-width: 500px;
    text-align: center;
    margin-bottom: 2rem;
  }
`;

export const Wrapper = styled.div`
  margin: 1rem auto;
  display: flex;
  justify-content: center;
  width: 40rem;
`;
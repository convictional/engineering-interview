import React, { useState } from "react";
import { Button } from "react-bootstrap";
import styled from "styled-components";
import { COLORS, formatTime } from "./utils";

const initialGuess = [null, null, null, null, null];

/**
 * Note: A user should only be able to access this page if they are logged in
 *
 * This boilerplate does not include the randomly generated code at all.
 * It only shows an example of how to create a "guess" for the code and some basic UI to support it.
 *
 * An example code would be [red, red, blue, yellow, green], the user then would want to guess those colors in row.
 * If one of the colors they guess is correct and in the right position, they should be shown.
 */
function GamePage({ history }) {
  const [selectedColor, setSelectedColor] = useState(COLORS[0]);
  const [currentGuess, setCurrentGuess] = useState(initialGuess);

  const onNewGame = () => {
    setCurrentGuess(initialGuess);
    // TODO: Finish starting new game
  };

  const onGuessCode = () => {
    // TODO: Finish scoring a guess. Compare colors to the generate code and let uses know if the guessed right. Keep track of previous guesses.
  };

  const onSelectColor = (color) => () => setSelectedColor(color);

  const onGuessColor = (index) => () => {
    setCurrentGuess(
      currentGuess.map((guess, idx) => (idx === index ? selectedColor : guess))
    );
  };

  const onLogout = () => {
    window.localStorage.removeItem("currentUserId");
    history.replace("/login");
  };

  return (
    <>
      <Header>
        <h1 className="mb-0">Code Breaker</h1>
      </Header>
      <Container>
        <GameColumn>
          <div className="d-flex pt-3 align-items-center">
            <Button variant="secondary">Guess</Button>
            <div className="d-flex px-3">
              <GuessBlock color={currentGuess[0]} onClick={onGuessColor(0)} />
              <GuessBlock color={currentGuess[1]} onClick={onGuessColor(1)} />
              <GuessBlock color={currentGuess[2]} onClick={onGuessColor(2)} />
              <GuessBlock color={currentGuess[3]} onClick={onGuessColor(3)} />
              <GuessBlock color={currentGuess[4]} onClick={onGuessColor(4)} />
            </div>
          </div>
          {/* TODO: List out previous guesses  */}
        </GameColumn>
        <ControlsColumn>
          {COLORS.map((color) => (
            <ColorChoice
              color={color}
              key={color}
              active={selectedColor === color}
              onClick={onSelectColor(color)}
            />
          ))}
          <TimeDisplay>{formatTime(0)}</TimeDisplay>
          <ControlButton className="mb-3" onClick={onNewGame}>
            Start New Game
          </ControlButton>
          <ControlButton variant="light" onClick={onLogout}>
            Logout
          </ControlButton>
        </ControlsColumn>
      </Container>
    </>
  );
}

export default GamePage;

// styles

const Header = styled.header`
  text-transform: uppercase;
  color: var(--secondary);
  background: var(--light);
  text-align: center;
  border-bottom: 1px solid var(--secondary);
  padding: 1rem;

  & > h1 {
    font-size: 2rem;
  }
`;

const Container = styled.div`
  margin: 1rem auto;
  display: flex;
  width: 40rem;
`;

const GameColumn = styled.div`
  width: 30rem;
`;

const ControlsColumn = styled.div`
  width: 10rem;
  padding: 1rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 0.5rem;
`;

const ColorChoice = styled.div`
  border-radius: 4px;
  background: ${(props) => props.color};
  width: 100%;
  height: 3.5rem;
  border: ${(props) => (props.active ? "4px solid var(--dark)" : "none")};
  cursor: pointer;
`;

const GuessBlock = styled.div`
  border: ${(props) => (props.color ? "none" : "2px dashed #eee")};
  border-radius: 4px;
  height: 3rem;
  width: 3rem;
  margin: 0 0.5rem;
  background: ${(props) => (props.color ? props.color : "white")};
  cursor: pointer;
`;

const TimeDisplay = styled.p`
  text-align: center;
  grid-column: span 2;
  color: var (--secondary);
  font-size: 2rem;
  margin-top: 1rem;
  margin-bottom: 0rem;
`;

const ControlButton = styled(Button)`
  grid-column: span 2;
`;

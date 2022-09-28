import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { ColorChoice, ControlButton, ControlsColumn, GameColumn, GuessBlock, Header, Page, TimeDisplay, Wrapper } from "./Shared.styles";
import { formatTime } from "./utils";

// Example colors, feel free to change these if you want
export const COLORS = [
  "#f44336",
  "#2196f3",
  "#ffeb3b",
  "#4caf50",
  "#7e57c2",
  "#795548",
];

const INITIAL_GUESS = [null, null, null, null, null];


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
  const [currentGuess, setCurrentGuess] = useState(INITIAL_GUESS);

  const onNewGame = () => {
    setCurrentGuess(INITIAL_GUESS);
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
    <Page>
      <Header>
        <h1 className="mb-0">Code Breaker</h1>
      </Header>
      <Wrapper>
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
      </Wrapper>
    </Page>
  );
}

export default GamePage;

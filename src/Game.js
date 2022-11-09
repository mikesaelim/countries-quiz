import {useCallback, useEffect, useState} from "react";
import {Button, Form} from "react-bootstrap";
import useTimer from "easytimer-react-hook";

import "./Game.css";
import {ALIAS_TO_COUNTRY, COUNTRIES_ALIASES, GAME_STATES} from "./Constants";
import {standardizeGuess} from "./Standardize";
import TextResults from "./TextResults";

function Game(props) {
  const [gameState, setGameState] = useState(GAME_STATES.IDLE);
  const [guess, setGuess] = useState("");
  const [guessedCountries, setGuessedCountries] = useState(props.initialGuessedCountries || new Set());
  const [lastMatch, setLastMatch] = useState("");
  const [timer, timesUp] = useTimer({
    startValues: props.timerStartValues || {minutes: 15},
    target: {seconds: 0},
    countdown: true,
    updateWhenTargetAchieved: true
  });

  function startGame() {
    setGameState(GAME_STATES.PLAYING);
    timer.start();
  }

  const endGame = useCallback((won) => {
    setGameState(won ? GAME_STATES.WON : GAME_STATES.LOST);
    setGuess("");
    setLastMatch("");
    timer.pause();
  }, [timer]);

  function resetGame() {
    setGameState(GAME_STATES.IDLE);
    setGuess("");
    setGuessedCountries(new Set());
    setLastMatch("");
    timer.reset();
    timer.pause(); // easytimer.js is strange in that reset automatically restarts the timer
  }

  function handleGuess(newGuess) {
    setGuess(newGuess);

    const match = ALIAS_TO_COUNTRY.get(standardizeGuess(newGuess));
    if (match) {
      if (!guessedCountries.has(match)) {
        setGuessedCountries((oldValue => new Set([...oldValue, match])));
        setLastMatch(match);
        setGuess("");
      }
    }
  }

  useEffect(() => {
    if (guessedCountries.size === COUNTRIES_ALIASES.size) {
      endGame(true);
    } else if (timesUp) {
      endGame(false);
    }
  }, [timesUp, guessedCountries, endGame]);

  return (
    <div className="container game">
      <div className="row align-items-center controls">
        <div className="col-sm-6">
          <div className="m-2">
            <Form onSubmit={(event) => event.preventDefault()}>
              <Form.Group>
                {
                  gameState === GAME_STATES.PLAYING &&
                    <Form.Control
                      value={guess}
                      onChange={(event) => handleGuess(event.target.value)}
                      autoFocus
                    />
                }
                {
                  [GAME_STATES.IDLE, GAME_STATES.LOST].includes(gameState) &&
                    <Form.Control disabled />
                }
                {
                  gameState === GAME_STATES.WON &&
                    <span className="won">YOU WIN!</span>
                }
              </Form.Group>
            </Form>
          </div>
        </div>
        <div className="col-sm-2">
          <div className="m-2">
            { gameState === GAME_STATES.IDLE && <Button onClick={startGame}>Start!</Button> }
            { gameState === GAME_STATES.PLAYING && <Button onClick={() => endGame(false)}>End</Button> }
            { [GAME_STATES.WON, GAME_STATES.LOST].includes(gameState) && <Button onClick={resetGame}>Reset</Button> }
          </div>
        </div>
        <div className="col-sm-2">
          <div className="m-2">
            { guessedCountries.size } / { COUNTRIES_ALIASES.size }
          </div>
        </div>
        <div className="col-sm-2">
          <div className="m-2">
            {timer.getTimeValues().toString(["minutes", "seconds"])}
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-sm-12">
          <TextResults
            guessedCountries={guessedCountries}
            showMissed={gameState === GAME_STATES.LOST}
            lastMatch={lastMatch}
          />
        </div>
      </div>
    </div>
  );
}

export default Game;

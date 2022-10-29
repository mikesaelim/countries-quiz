import {useEffect, useState} from 'react';
import {Button, Form} from 'react-bootstrap';

import {ALIAS_TO_COUNTRY, COUNTRIES_ALIASES, GAME_STATES} from './Constants';
import {standardizeGuess} from './Standardize';
import TextResults from './TextResults';

function Game() {
  const [gameState, setGameState] = useState(GAME_STATES.IDLE);
  const [guess, setGuess] = useState("");
  const [guessedCountries, setGuessedCountries] = useState(new Set());
  const [lastMatch, setLastMatch] = useState("");

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
      endGame();
    }
  }, [guessedCountries]);

  function endGame() {
    setGameState(GAME_STATES.ENDED);
  }

  function resetGame() {
    setGameState(GAME_STATES.IDLE);
    setGuess("");
    setGuessedCountries(new Set());
    setLastMatch("");
  }

  return (
    <div className="container border">
      <div className="row border">
        <div className="col-sm-6">
          <div className="m-2">
            {
              gameState === GAME_STATES.IDLE &&
                <Button onClick={() => setGameState(GAME_STATES.PLAYING)}>Start!</Button>
            }
            {
              gameState === GAME_STATES.PLAYING &&
                (<Form>
                  <Form.Group>
                    <Form.Control value={guess} onChange={(event) => handleGuess(event.target.value)} />
                  </Form.Group>
                </Form>)
            }
            {
              gameState === GAME_STATES.ENDED &&
                <Button onClick={resetGame}>
                  Reset
                </Button>
            }
          </div>
        </div>
        <div className="col-sm-1" />
        <div className="col-sm-1">
          <div className="m-2">
            { gameState === GAME_STATES.PLAYING && <Button onClick={endGame}>End</Button> }
          </div>
        </div>
        <div className="col-sm-2">
          <div className="m-2">
            { guessedCountries.size } / { COUNTRIES_ALIASES.size }
          </div>
        </div>
        <div className="col-sm-2">
          <div className="m-2">
            15:00
          </div>
        </div>
      </div>
      <div className="row border">
        <div className="col-sm-12 border" style={{height: "400px"}}>
          <TextResults
            guessedCountries={guessedCountries}
            showMissed={gameState === GAME_STATES.ENDED}
            lastMatch={lastMatch}
          />
        </div>
      </div>
    </div>
  );
}

export default Game;

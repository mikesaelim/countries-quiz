import { useState } from 'react';
import { Button, Form } from 'react-bootstrap';

import {COUNTRIES_ALIASES, GAME_STATES, ALIAS_TO_COUNTRY} from './Constants'

function Game() {
  const [gameState, setGameState] = useState(GAME_STATES.IDLE);

  console.log(COUNTRIES_ALIASES)
  console.log(ALIAS_TO_COUNTRY)

  return (
    <div className="container border">
      <div className="row border">
        <div className="col-sm-6">
          <div className="m-2">
            { gameState === GAME_STATES.IDLE && <Button onClick={() => setGameState(GAME_STATES.PLAYING)}>Start!</Button> }
            {
              gameState === GAME_STATES.PLAYING &&
                (<Form>
                  <Form.Group>
                    <Form.Control />
                  </Form.Group>
                </Form>)
            }
            { gameState === GAME_STATES.ENDED && <Button onClick={() => setGameState(GAME_STATES.IDLE)}>Reset</Button> }
          </div>
        </div>
        <div className="col-sm-1" />
        <div className="col-sm-1">
          <div className="m-2">
            { gameState === GAME_STATES.PLAYING && <Button onClick={() => setGameState(GAME_STATES.ENDED)}>End</Button> }
          </div>
        </div>
        <div className="col-sm-2">
          <div className="m-2">
            0/200
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
          game results
        </div>
      </div>
    </div>
  );
}

export default Game;

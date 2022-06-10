import { useState } from 'react';
import { Button, Form } from 'react-bootstrap';

function Game() {
  const GAME_STATES = ["IDLE", "PLAYING", "ENDED"];  // TODO: remove?
  const [gameState, setGameState] = useState("IDLE");


  return (
    <div className="container border">
      <div className="row border">
        <div className="col-sm-6">
          <div className="m-2">
            { gameState === "IDLE" && <Button onClick={() => setGameState("PLAYING")}>Start!</Button> }
            {
              gameState === "PLAYING" &&
                (<Form>
                  <Form.Group>
                    <Form.Control />
                  </Form.Group>
                </Form>)
            }
            { gameState === "ENDED" && <Button onClick={() => setGameState("IDLE")}>Reset</Button> }
          </div>
        </div>
        <div className="col-sm-1" />
        <div className="col-sm-1">
          <div className="m-2">
            { gameState === "PLAYING" && <Button onClick={() => setGameState("ENDED")}>End</Button> }
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

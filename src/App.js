import { Button, Form } from 'react-bootstrap';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="content mx-auto border">
        <div className="title m-5 border">
          This is the title.
        </div>
        <div className="game container border">
          <div className="row border">
            <div className="col-sm-8 border">
              <Form className='m-2'>
                <Form.Group>
                  <Form.Control />
                </Form.Group>
              </Form>
            </div>
            <div className="col-sm-2 border">
              <div className="m-2">
                0/200
              </div>
            </div>
            <div className="col-sm-2 border">
              <div className="m-2">
                <Button>End</Button>
              </div>
            </div>
          </div>
          <div className="row border">
            <div className="col-sm-12 border" style={{height: "400px"}}>
              oink
            </div>
          </div>
        </div>
        <div className="description m-5 border">
          This is the description.
        </div>
      </div>
    </div>
  );
}

export default App;

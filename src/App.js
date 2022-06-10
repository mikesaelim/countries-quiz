import './App.css';
import Game from './Game';

function App() {
  return (
    <div className="App">
      <div className="content mx-auto border">
        <div className="title m-5 border">
          This is the title.
        </div>
        <div className="game border">
          <Game />
        </div>
        <div className="description m-5 border">
          This is the description.
        </div>
      </div>
    </div>
  );
}

export default App;

import "./App.css";
import { COUNTRIES_ALIASES } from "./Constants";
import Game from "./Game";
import SpoilerTag from "./SpoilerTag";

function App() {
  return (
    <div className="App">
      <div className="content mx-auto">
        <h3 className="title m-5">
          Can you name all the countries?
        </h3>
        <Game />
        <div className="description m-5">
          <p>
            Created by <a href="https://mikesaelim.github.io/">Mike Saelim</a> so that he could have a version of <a href="https://www.sporcle.com/games/g/world">Sporcle's quiz</a> with a bigger map. (Map version in development.)
          </p>
          <br />

          <h5>What counts as a country for this quiz?</h5>
          <p>
            What is or isn't a country can be contentious, and when you make a quiz about the countries of the world, there's no neutral position to take on the issue. You have to include some and exclude others. I am not a geographer, so I mostly outsource these decisions.
          </p>
          <p>
            The {COUNTRIES_ALIASES.size} countries in this quiz are the UN member states and General Assembly observer states from <a href="https://en.wikipedia.org/wiki/List_of_sovereign_states">Wikipedia's List of Sovereign States</a>. Plus <SpoilerTag>Kosovo</SpoilerTag> and <SpoilerTag>Taiwan</SpoilerTag>, which my country <a href="https://www.state.gov/independent-states-in-the-world/">formally or semi-formally recognizes</a> as independent states.
          </p>

          <h5>How is this built?</h5>
          <p>
            This is built with <a href="https://reactjs.org/">React</a>. While it is a knockoff of Sporcle's quiz, it uses none of their code. You can view the source code <a href="https://github.com/mikesaelim/countries-quiz">here</a>.
          </p>

          <h5>I want to report a bug!</h5>
          <p>
            Sorry about that, and thanks for helping! Open an issue <a href="https://github.com/mikesaelim/countries-quiz/issues" target="_blank" rel="noreferrer">here</a> and describe what happened in as much detail as you can. Screenshots would also be appreciated.
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;

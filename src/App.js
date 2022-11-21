import "./App.css";
import { COUNTRIES } from "./Constants";
import Game from "./Game";
import SpoilerTag from "./SpoilerTag";

function App() {
  const mapless = new URLSearchParams(window.location.search).has("mapless");

  return (
    <div className="App">
      <div className="content mx-auto">
        <h3 className="title m-4">
          Can you name all the countries?
        </h3>
        <div className="mapless-link my-2 mx-auto">
          { mapless ? <a href="?">Map version</a> : <a href="?mapless">Mapless version</a> }
        </div>
        <Game mapless={mapless} />
        <div className="description my-5 mx-auto">
          <p>
            Created by <a href="https://mikesaelim.github.io/">Mike Saelim</a> so that he could have a version of <a href="https://www.sporcle.com/games/g/world">Sporcle's quiz</a> with a bigger, zoomable map.
          </p>
          <br />

          <h5>What counts as a country for this quiz?</h5>
          <p>
            What is or isn't a country can be contentious, and when you make a quiz about the countries of the world, there's no neutral position to take on the issue.
            You have to include some and exclude others. I am not a geographer, so I mostly outsource these decisions.
          </p>
          <p>
            The {COUNTRIES.length} countries in this quiz are the UN member states and General Assembly observer states from <a href="https://en.wikipedia.org/wiki/List_of_sovereign_states">Wikipedia's List of Sovereign States</a>.
            Plus <SpoilerTag>Kosovo</SpoilerTag> and <SpoilerTag>Taiwan</SpoilerTag>, which my country <a href="https://www.state.gov/independent-states-in-the-world/">formally or semi-formally recognizes</a> as independent states.
            I've tried to accept all the common English names for these countries, listed on their Wikipedia pages.
          </p>

          <h5>This is too easy!</h5>
          <p>
            Try the <a href="?mapless">mapless version</a> for an extra challenge.
          </p>

          <h5>How is this built?</h5>
          <p>
            This is built with <a href="https://reactjs.org/">React</a>, <a href="https://leafletjs.com/">Leaflet</a>, and <a href="https://react-leaflet.js.org/">react-leaflet</a>.
            Basemap data comes from <a href="https://www.openstreetmap.org/">OpenStreetMap</a>.
            While the map's pseudo-Mercator projection <a href="https://en.wikipedia.org/wiki/Mercator_projection#Distortion_of_sizes">has significant issues</a>, it has become the de facto standard for maps on the web.
            The question mark icon comes from <a href="https://icons8.com">Icons8</a>.
          </p>
          <p>
            Despite being a knockoff of Sporcle's quiz, it uses none of their code.
            You can view the source code <a href="https://github.com/mikesaelim/countries-quiz">here</a>.
          </p>

          <h5>I want to report a bug!</h5>
          <p>
            Sorry about that, and thanks for helping!
            Open an issue <a href="https://github.com/mikesaelim/countries-quiz/issues" target="_blank" rel="noreferrer">here</a> and describe what happened in as much detail as you can.
            Screenshots would also be appreciated.
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;

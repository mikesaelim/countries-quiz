import "./TextResults.css";

import { COUNTRIES } from "./Constants";

function TextResults(props) {
  var countries;
  if (!props.showMissed) {
    countries = [...props.guessedCountries].sort().map(c => {
      if (c === props.lastMatch) {
        return <li key={c} className="last-match">{c}</li>;
      } else {
        return <li key={c}>{c}</li>;
      }
    });
  } else {
    countries = COUNTRIES.map(c => {
      if (props.guessedCountries.has(c)) {
        return <li key={c}>{c}</li>;
      } else {
        return <li key={c} className="missed">{c}</li>;
      }
    });
  }

  return (
    <div className="row text-results">
      <div className="col-sm-3">
        <ul>
          { countries.slice(0, 50) }
        </ul>
      </div>
      <div className="col-sm-3">
        <ul>
          { countries.slice(50, 100) }
        </ul>
      </div>
      <div className="col-sm-3">
        <ul>
          { countries.slice(100, 150) }
        </ul>
      </div>
      <div className="col-sm-3">
        <ul>
          { countries.slice(150, 200) }
        </ul>
      </div>
    </div>
  );
}

export default TextResults;

import L from "leaflet";
import { LayerGroup, MapContainer, Marker, TileLayer } from "react-leaflet";

import "./MapResults.css";
import "leaflet/dist/leaflet.css";
import questionMarkIconImage from "./icons8-question-mark-64.png";
import { COUNTRY_DATA } from "./Constants";

const questionMarkIcon = L.icon({
  iconUrl: questionMarkIconImage,
  iconSize: [15, 15]
});

function makeDivIcon(countryName) {
  return L.divIcon({ html: `<div class="text-center">${countryName}</div>`, className: "", iconSize: [100, 20]});
}

function MapResults(props) {
  const latLngBounds = [[-60, -180], [75, 180]];

  let markers;
  if (!props.showMissed) {
    markers = COUNTRY_DATA.map((country) => {
      if (props.guessedCountries.has(country.name)) {
        return <Marker position={country.markerLatLng} icon={makeDivIcon(country.name)} key={country.name} />;
      } else {
        return <Marker position={country.markerLatLng} icon={questionMarkIcon} key={country.name} />;
      }
    });
  } else {
    markers = COUNTRY_DATA.map((country) => {
      return <Marker position={country.markerLatLng} icon={makeDivIcon(country.name)} key={country.name} />;
    });
  }

  return (
    <div className="map-results">
      <MapContainer
        center={[30, 0]}
        zoom={2}
        minZoom={2}
        maxZoom={5}
        maxBounds={latLngBounds}
        maxBoundsViscosity={1.0}
        className="map"
      >
        <TileLayer
          // https://github.com/CartoDB/basemap-styles
          url={"https://{s}.basemaps.cartocdn.com/light_nolabels/{z}/{x}/{y}" + (L.Browser.retina ? "@2x.png" : ".png")}
          subdomains="abcd"
          attribution={"&copy; <a href=\"http://www.openstreetmap.org/copyright\">OpenStreetMap</a>, &copy; <a href=\"https://carto.com/attributions\">CARTO</a>"}
          minZoom={2}
          maxZoom={5}
          bounds={latLngBounds}
          noWrap={true}
        />
        <LayerGroup>
          { markers }
        </LayerGroup>
      </MapContainer>
    </div>
  );
}

export default MapResults;

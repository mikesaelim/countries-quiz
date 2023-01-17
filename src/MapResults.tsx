import L from "leaflet";
import { LayerGroup, MapContainer, Marker, TileLayer } from "react-leaflet";

import "./MapResults.css";
import "leaflet/dist/leaflet.css";
import questionMarkIconImage from "./icons8-question-mark-64.png";
import { COUNTRY_DATA, MAP_LATLNG_BOUNDS } from "./Constants";

type MapResultsProps = {
  guessedCountries: Set<string>;
  showMissed: boolean;
  lastMatch: string;
};

const questionMarkIcon = L.icon({
  iconUrl: questionMarkIconImage,
  iconSize: [15, 15]
});

function makeDivIcon(countryName: string, classString = "") {
  return L.divIcon({ html: `<div class="text-center ${classString}">${countryName}</div>`, className: "", iconSize: [100, 20]});
}

function MapResults(props: MapResultsProps) {
  let markers;
  if (!props.showMissed) {
    markers = COUNTRY_DATA.map((country) => {
      if (props.guessedCountries.has(country.name)) {
        if (country.name === props.lastMatch) {
          return <Marker position={country.markerLatLng} icon={makeDivIcon(country.name, "last-match")} key={country.name} />;
        } else {
          return <Marker position={country.markerLatLng} icon={makeDivIcon(country.name)} key={country.name} />;
        }
      } else {
        return <Marker position={country.markerLatLng} icon={questionMarkIcon} key={country.name} />;
      }
    });
  } else {
    markers = COUNTRY_DATA.map((country) => {
      if (props.guessedCountries.has(country.name)) {
        return <Marker position={country.markerLatLng} icon={makeDivIcon(country.name)} key={country.name} />;
      } else {
        return <Marker position={country.markerLatLng} icon={makeDivIcon(country.name, "missed")} key={country.name} />;
      }
    });
  }

  return (
    <div className="map-results mx-auto">
      <MapContainer
        center={[30, 20]}
        zoom={2}
        minZoom={2}
        maxZoom={5}
        maxBounds={MAP_LATLNG_BOUNDS}
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
          bounds={MAP_LATLNG_BOUNDS}
        />
        <LayerGroup>
          { markers }
        </LayerGroup>
      </MapContainer>
    </div>
  );
}

export default MapResults;

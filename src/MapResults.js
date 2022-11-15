import L from "leaflet";
import { MapContainer, TileLayer } from "react-leaflet";

import "./MapResults.css";
import "leaflet/dist/leaflet.css";

function MapResults(props) {
  const latLngBounds = [[-60, -180], [75, 180]];
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
      </MapContainer>
    </div>
  );
}

export default MapResults;

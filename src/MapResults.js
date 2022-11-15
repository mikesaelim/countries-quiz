import L from "leaflet";
import { useEffect, useRef } from "react";

import "./MapResults.css";
import "leaflet/dist/leaflet.css";

function MapResults(props) {
  const mapRef = useRef(null);

  useEffect(() => {
    const latLngBounds = [[-60, -180], [75, 180]];
    const map = L.map(mapRef.current, {
      center: [30, 0],
      zoom: 2,
      minZoom: 2,
      maxZoom: 5,
      maxBounds: latLngBounds,
      maxBoundsViscosity: 1.0
    });

    // https://github.com/CartoDB/basemap-styles
    L.tileLayer("https://{s}.basemaps.cartocdn.com/light_nolabels/{z}/{x}/{y}" + (L.Browser.retina ? "@2x.png" : ".png"), {
      subdomains: "abcd",
      attribution: "&copy; <a href=\"http://www.openstreetmap.org/copyright\">OpenStreetMap</a>, &copy; <a href=\"https://carto.com/attributions\">CARTO</a>",
      minZoom: 2,
      maxZoom: 5,
      bounds: latLngBounds,
      noWrap: true
    }).addTo(map);

    return () => map.remove();
  }, []);

  return (
    <div className="map-results">
      <div ref={mapRef} className="map" />
    </div>
  );
}

export default MapResults;

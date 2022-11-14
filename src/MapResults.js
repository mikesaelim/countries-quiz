import L from "leaflet";
import { useEffect, useRef } from "react";

import "./MapResults.css";
import "leaflet/dist/leaflet.css";

function MapResults(props) {
  const mapRef = useRef(null);

  useEffect(() => {
    const map = L.map(mapRef.current).setView([30, 0], 2);
    L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
      maxZoom: 19,
      attribution: "&copy; <a href=\"http://www.openstreetmap.org/copyright\">OpenStreetMap</a>"
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

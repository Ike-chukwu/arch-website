import React, { useState, useRef } from "react";
import "./Map.css";
import osm from "./osm-providers";
import "leaflet/dist/leaflet.css";

import { MapContainer, TileLayer } from "react-leaflet";

const Mapper = () => {
  const [center, setCenter] = useState({ lat: 13.084622, lng: 80.248357 });
  const ZOOM_LEVEL = 9;
  const mapRef = useRef();

  return (
    <section className="map">
      <picture>
        <MapContainer center={center} zoom={ZOOM_LEVEL} ref={mapRef}>
          <TileLayer
            url={osm.maptiler.url}
            attribution={osm.maptiler.attribution}
          />
        </MapContainer>
      </picture>
    </section>
  );
};

export default Mapper;

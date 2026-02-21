import React from "react";

import {
  MapContainer,
  TileLayer,
  ZoomControl,
  Marker,
  Popup,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";

function MapsDashboard() {

  return (
    <>
      <div className="h-full w-full relative">
        <MapContainer
          center={[26.7606, 83.3732]}
          zoom={11}
          zoomControl={false}
          className="h-full w-full"
        >
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
          <ZoomControl position="bottomright" />
          <Marker position={[26.7606, 83.3732]}>
            <Popup>
              <b>Gorakhpur Hub</b>
              <br />
              Status: Optimal for Wheat
            </Popup>
          </Marker>
        </MapContainer>
      </div>
    </>
  );
}

export default MapsDashboard;

import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  ZoomControl,
  useMap,
  useMapEvents,
} from "react-leaflet";
import { useState, useEffect, useMemo } from "react";
import { useOutletContext } from "react-router-dom";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

/* Fix default marker icon */
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
  iconUrl:
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  shadowUrl:
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
});

/* 🔥 Component to update map center dynamically */
function ChangeMapView({ center }) {
  const map = useMap();
  useEffect(() => {
    map.setView(center, 13);
  }, [center, map]);
  return null;
}

/* 🔥 Click handler */
function MapClickHandler({ setMarkerPosition, setIsLoading }) {
  const { setSelectedLocation } = useOutletContext();
  const map = useMapEvents({
    async click(e) {
      const { lat, lng } = e.latlng;

      setIsLoading(true);
      setMarkerPosition([lat, lng]);

      map.flyTo([lat, lng], 13, { animate: true, duration: 0.8 });

      try {
        const response = await fetch(
          `https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lng}`
        );
        const data = await response.json();

        setSelectedLocation({
          lat,
          lng,
          district:
            data.address.city ||
            data.address.town ||
            data.address.village ||
            "",
          country: data.address.country || "",
        });
      } catch (err) {
        console.error("Reverse geocoding failed:", err);
      }

      setIsLoading(false);
    },
  });

  return null;
}

export default function MapsDashboard() {
  const { selectedLocation } = useOutletContext();

  const fallbackLocation = useMemo(() => [26.7606, 83.3732], []); // fallback if denied

  const [center, setCenter] = useState(fallbackLocation);
  const [markerPosition, setMarkerPosition] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  /* 🔥 Ask for user location on first load */
  useEffect(() => {
    if (!navigator.geolocation) return;

    navigator.geolocation.getCurrentPosition(
      (position) => {
        const userLat = position.coords.latitude;
        const userLng = position.coords.longitude;

        const userLocation = [userLat, userLng];

        setCenter(userLocation);
        setMarkerPosition(userLocation);
      },
      (error) => {
        console.log("User denied location or error:", error);
        setCenter(fallbackLocation);
        setMarkerPosition(fallbackLocation);
      }
    );
  }, [fallbackLocation]);

  return (
    <div className="h-full w-full">
      <MapContainer
        center={center}
        zoom={13}
        zoomControl={false}
        className="h-full w-full"
      >
        <ChangeMapView center={center} />

        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        <ZoomControl position="bottomright" />

        <MapClickHandler
          setMarkerPosition={setMarkerPosition}
          setIsLoading={setIsLoading}
        />

        {markerPosition && (
          <Marker position={markerPosition}>
            <Popup>
              {isLoading ? (
                <p>Fetching location...</p>
              ) : (
                <>
                  <b>{selectedLocation?.district || "Selected Location"}</b>
                  <br />
                  {selectedLocation?.country || ""}
                </>
              )}
            </Popup>
          </Marker>
        )}
      </MapContainer>
    </div>
  );
}
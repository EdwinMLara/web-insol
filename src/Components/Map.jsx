import React, { useState } from "react";
import { MapContainer, TileLayer, Marker, Popup, ZoomControl, useMap } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import markerIcon from "../img/Logos/marcaMapa3.png";

const Map = () => {
  const Insoel = [20.140833, -101.190961];
  const Solena = [21.089017, -101.594047];
  const UAT = [20.705077, -100.450834];
  const IRA = [20.661059, -101.308844];

  const insoelIcon = new L.Icon({
    iconUrl: markerIcon,
    iconSize: [36, 36],
    iconAnchor: [26, 32],
    popupAnchor: [0, -32],
  });

  const ZoomButton = () => {
    const map = useMap();
    const [zoomEnabled, setZoomEnabled] = useState(false);

    const handleZoomButtonClick = () => {
      if (zoomEnabled) {
        map.scrollWheelZoom.disable();
        map.dragging.disable()
      } else {
        map.scrollWheelZoom.enable();
        map.dragging.enable()
      }
      setZoomEnabled(!zoomEnabled);
    };

    return (
      <div
        style={{
          position: "absolute",
          top: "10px", // Ajusta la posición superior según sea necesario
          right: "10px", // Ajusta la posición derecha según sea necesario
          zIndex: 1000, // Asegura que el botón esté encima del mapa
        }}
      >
        <button
          className={`bg-primary hover:bg-darkPrimary text-black font-semibold p-2 rounded`}
          onClick={() => handleZoomButtonClick()}
        >
          {zoomEnabled ? "Desactivar Zoom" : "Activar Zoom"}
        </button>
      </div>
    );
  };

  return (
    <div className="max-w-screen-lg mx-auto relative">
      <MapContainer
        center={Insoel}
        zoom={8}
        className="h-64 lg:h-[500px] w-full"
        scrollWheelZoom={false}
        zoomControl={false}
        dragging={false}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={Insoel} icon={insoelIcon}>
          <Popup>INSOEL</Popup>
        </Marker>

        <Marker position={Solena} icon={insoelIcon}>
          <Popup>Solena</Popup>
        </Marker>
        <Marker position={IRA} icon={insoelIcon}>
          <Popup>Irapuato</Popup>
        </Marker>

        <Marker position={UAT} icon={insoelIcon}>
          <Popup>
            Unidad de Alta Tecnología <br /> UNAM
          </Popup>
        </Marker>

        <ZoomControl position="topleft" />

        {/* Agrega el botón de zoom personalizado */}
        <ZoomButton />
      </MapContainer>
    </div>
  );
};

export default Map;

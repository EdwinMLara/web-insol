// src/components/Map.js
import React, { useRef, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css"; // Importa los estilos de Leaflet
import { color } from "framer-motion";
import markerIcon from "../img/Logos/marcaMapa3.png";

const Map = () => {
  const Insoel = [20.140833, -101.190961];
  const Solena = [21.089017, -101.594047];
  const UAT = [20.705077, -100.450834];

  // Define los iconos personalizados
  const insoelIcon = new L.Icon({
    iconUrl: markerIcon,
    iconSize: [36, 36], // Tamaño del icono
    iconAnchor: [26, 32], // Punto de anclaje del icono
    popupAnchor: [0, -32], // Punto de anclaje del popup
  });

  return (
    <div className="max-w-screen-lg mx-auto">
      
      <MapContainer
        center={Insoel}
        zoom={8}
        className="h-64 lg:h-[500px] w-full"
        scrollWheelZoom={false}
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

        <Marker position={UAT} icon={insoelIcon}>
          <Popup>
            Unidad de Alta Tecnología <br /> UNAM
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default Map;

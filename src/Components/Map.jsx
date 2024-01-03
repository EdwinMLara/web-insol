// src/components/Map.js
import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css'; // Importa los estilos de Leaflet

const Map = () => {
  const position = [20.140833, -101.190961];
  const Solena = [21.089017, -101.594047];
  const UAT = [20.705077, -100.450834];

  return (
    <div style={{ width: '1000px', height: '500px', margin: 'auto' }}>
      <MapContainer center={position} zoom={10} style={{ height: '100%', width: '100%' }}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position}>
          <Popup>
            INSOEL
          </Popup>
        </Marker>

        <Marker position={Solena}>
          <Popup>
            Solena
          </Popup>
        </Marker>

        <Marker position={UAT}>
          <Popup>
            Unidad de Alta Tecnología <br /> UNAM
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default Map;

import React from 'react';
import { MapContainer, ImageOverlay } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

const bounds = [[0, 0], [2570.56, 4000]];

const MapComponent = () => {
    return (
        <MapContainer
            center={[1285.28, 2000]}
            zoom={0}
            minZoom={-5}
            maxZoom={2}
            style={{ height: '100vh', width: '80%', alignSelf: 'center', marginTop: '20px', zIndex: '0' }}
            crs={L.CRS.Simple}
        >
            <ImageOverlay
                url=""
                bounds={bounds}
            />
        </MapContainer>
    );
};

export default MapComponent;
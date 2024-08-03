import React, { useState, useEffect } from 'react';
import { GoogleMap, Marker, InfoWindow, useJsApiLoader } from '@react-google-maps/api';

const MapIframe = ({ lat, lng }) => {
  const [isInfoWindowOpen, setIsInfoWindowOpen] = useState(false);
  const mapContainerStyle = {
    width: '100%',
    height: '100%',
  };
  
  // Convert lat and lng to numbers
  const latitude = Number(lat);
  const longitude = Number(lng);
  const center = {
    lat: latitude,
    lng: longitude,
  };
  const markerPosition = {
    lat: latitude,
    lng: longitude,
  };

  const { isLoaded, loadError } = useJsApiLoader({
    googleMapsApiKey: "AIzaSyC4xDqx5yDdrRzTGbAakYuRBjjf0wxpvYs",
    id: 'google-map-script'
  });

  const handleMarkerClick = () => {
    setIsInfoWindowOpen(true);
  };

  const handleCloseClick = () => {
    setIsInfoWindowOpen(false);
  };

  if (loadError) {
    return <div>Error loading map</div>;
  }

  if (!isLoaded) {
    return <div>Loading map...</div>;
  }

  return (
    <GoogleMap
      mapContainerStyle={mapContainerStyle}
      center={center}
      zoom={10}
      options={{
        disableDefaultUI: true,
        zoomControl: true,
        scrollwheel: true,
        disableDoubleClickZoom: false,
        draggable: true,
      }}
    >
      <Marker
        position={markerPosition}
        onClick={handleMarkerClick}
        icon={{
          url: 'http://maps.google.com/mapfiles/ms/icons/blue-dot.png',
        }}
      />
      {isInfoWindowOpen && (
        <InfoWindow
          position={markerPosition}
          onCloseClick={handleCloseClick}
        >
          <div>
            <h3>Calgary, AB, Canada</h3>
            <p>This is a custom card at the marker.</p>
          </div>
        </InfoWindow>
      )}
    </GoogleMap>
  );
};

export default MapIframe;

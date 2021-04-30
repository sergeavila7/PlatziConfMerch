import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const Map = ({ data }) => {
  const containerStyle = {
    width: '100%',
    height: '50vh',
  };
  const center = {
    lat: 19.4267261,
    lng: -99.1718706,
  };

  return (
    <LoadScript googleMapsApiKey="AIzaSyCd3RRcjN1phWk7Z03ouTp9fVwJZovOZQw">
      <GoogleMap mapContainerStyle={containerStyle} zoom={17} center={center}>
        <Marker position={center} />
      </GoogleMap>
    </LoadScript>
  );
};

export default Map;

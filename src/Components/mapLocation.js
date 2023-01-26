import React from 'react';
import { CircularProgress } from '@mui/material';
import { GoogleMap, useLoadScript, Marker } from '@react-google-maps/api';
function MapLocation() {
	const { isLoaded } = useLoadScript({
		googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
	});
	if (!isLoaded) {
		return <CircularProgress />;
	} else {
	}
	return <Map />;
}
export default MapLocation;
function Map() {
	return (
		<GoogleMap
			zoom={19}
			center={{ lat: 41.104737, lng: 29.022883 }}
			mapContainerClassName='mapContainer'
		>
			<Marker position={{ lat: 41.104737, lng: 29.022883 }}></Marker>
		</GoogleMap>
	);
}

import React from 'react';
import { CircularProgress } from '@mui/material';
import { GoogleMap, useLoadScript } from '@react-google-maps/api';
function MapLocation() {
	const { isLoaded } = useLoadScript({
		googleMapsApiKey: 'AIzaSyCNCx3ShONaJDvz94lT_KqoHe0B-btDhVg',
	});
	if (!isLoaded) {
		return <CircularProgress />;
	} else {
	}
	return <Map />;
}
export default MapLocation;
function Map() {
	return <GoogleMap zoom={10} center={{ lat: 44, lng: -80 }}></GoogleMap>;
}

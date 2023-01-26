import React from 'react';
import Grid from '@mui/material/Grid';
import MapLocation from '../Components/mapLocation';
function Location() {
	return (
		<div className='pageContainer'>
			<div className='itemContainer'>
				<h1>Konum</h1>
				<Grid container>
					<Grid item sm={12}>
						<h3>Adres:Neque porro quisquam est qui dolorem ipsum quia dolor sit</h3>
						<h3>Önerilen ulaşım:Metro falan</h3>
					</Grid>
					<Grid item sm={12}>
						<h2>Harita Konumu</h2>
					</Grid>
				</Grid>
				<MapLocation></MapLocation>
			</div>
		</div>
	);
}
export default Location;

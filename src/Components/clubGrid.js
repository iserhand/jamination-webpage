import React from 'react';
import Grid from '@mui/material/Grid';
import ClubBox from './clubBox';
function ClubGrid() {
	return (
		<div className='itemContainer'>
			<h2>Düzenleyenler</h2>
			<div className='gridContainer'>
				<Grid container>
					<Grid sm={4} item>
						<ClubBox text='İTU OTG'></ClubBox>
					</Grid>
					<Grid sm={4} item>
						<ClubBox text='METU GATES'></ClubBox>
					</Grid>
					<Grid sm={4} item>
						<ClubBox text='DEU POG'></ClubBox>
					</Grid>
					<Grid sm={4} item>
						<ClubBox text='Marmara  OGK'></ClubBox>
					</Grid>
					<Grid sm={4} item>
						<ClubBox text='Beikoz'></ClubBox>
					</Grid>
					<Grid sm={4} item>
						<ClubBox text='ÜNOG'></ClubBox>
					</Grid>
				</Grid>
			</div>
		</div>
	);
}

export default ClubGrid;

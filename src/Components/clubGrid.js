import React from 'react';
import Grid from '@mui/material/Grid';
import ClubBox from './clubBox';
import './styles.css';

function ClubGrid() {
	return (
		<div className='itemContainer'>
			<h2>Düzenleyenler</h2>
			<div className='gridContainer'>
				<Grid container justifyContent={'center'}>
					<Grid sm={4} item>
						<ClubBox text='İTU OTG' source={'otg_logo.png'}></ClubBox>
					</Grid>
					<Grid sm={4} item>
						<ClubBox text='METU GATES' source={'metu_logo.png'}></ClubBox>
					</Grid>
					<Grid sm={4} item>
						<ClubBox text='DEU POG' source={'pog_logo.png'}></ClubBox>
					</Grid>
					<Grid sm={4} item>
						<ClubBox text='Marmara  OGK' source={'ogk_logo.png'}></ClubBox>
					</Grid>
					<Grid sm={4} item>
						<ClubBox text='Beikoz' source={'beikoz_logo.png'}></ClubBox>
					</Grid>
					<Grid sm={4} item>
						<ClubBox text='ÜNOG' source={'unog_logo.png'}></ClubBox>
					</Grid>
				</Grid>
			</div>
		</div>
	);
}

export default ClubGrid;

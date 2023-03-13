import React from 'react';
import SponsorBox from './sponsorBox';
import Grid from '@mui/material/Grid';
import './styles.css';

function sponsorGrid() {
	return (
		<div className='itemContainer'>
			<div className='gridContainer'>
				<h2>Destekçilerimiz</h2>
				<Grid container justifyContent={'center'}>
					<Grid sm={12} md={6} lg={4} item>
						<SponsorBox text={'-'} source={'questionmark.png'}></SponsorBox>
					</Grid>
					<Grid sm={12} md={6} lg={4} item>
						<SponsorBox text={'-'} source={'questionmark.png'}></SponsorBox>
					</Grid>
					<Grid sm={12} md={6} lg={4} item>
						<SponsorBox text={'-'} source={'questionmark.png'}></SponsorBox>
					</Grid>
					<Grid sm={12} md={6} lg={4} item>
						<SponsorBox text={'-'} source={'questionmark.png'}></SponsorBox>
					</Grid>
					<Grid sm={12} md={6} lg={4} item>
						<SponsorBox text={'-'} source={'questionmark.png'}></SponsorBox>
					</Grid>
					<Grid sm={12} md={6} lg={4} item>
						<SponsorBox text={'-'} source={'questionmark.png'}></SponsorBox>
					</Grid>
				</Grid>
			</div>
			<h4>Logoların üzerine tıklayarak destekçilerimizin sayfalarına ulaşabilirsiniz.</h4>
		</div>
	);
}

export default sponsorGrid;

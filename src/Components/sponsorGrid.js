import React from 'react';
import SponsorBox from './sponsorBox';
import Grid from '@mui/material/Grid';
function sponsorGrid() {
	return (
		<div className='itemContainer'>
			<div className='gridContainer'>
				<h2>SPONSORLARIMIZ</h2>
				<h3>ELMAS SPONSOR</h3>
				<SponsorBox text='elmasSponsor'></SponsorBox>
				<h3>ALTIN SPONSORLAR</h3>
				<Grid container>
					<Grid sm={4} item>
						<SponsorBox></SponsorBox>
					</Grid>
					<Grid sm={4} item>
						<SponsorBox></SponsorBox>
					</Grid>
					<Grid sm={4} item>
						<SponsorBox text='Marmara  OGK'></SponsorBox>
					</Grid>
				</Grid>
				<h3>GÜMÜŞ SPONSORLAR</h3>
				<Grid container>
					<Grid sm={4} item>
						<SponsorBox></SponsorBox>
					</Grid>
					<Grid sm={4} item>
						<SponsorBox></SponsorBox>
					</Grid>
					<Grid sm={4} item>
						<SponsorBox text='Marmara  OGK'></SponsorBox>
					</Grid>
				</Grid>
				<h3>BRONZ SPONSORLAR</h3>
				<Grid container>
					<Grid sm={4} item>
						<SponsorBox></SponsorBox>
					</Grid>
					<Grid sm={4} item>
						<SponsorBox></SponsorBox>
					</Grid>
					<Grid sm={4} item>
						<SponsorBox text='Marmara  OGK'></SponsorBox>
					</Grid>
				</Grid>
			</div>
		</div>
	);
}

export default sponsorGrid;

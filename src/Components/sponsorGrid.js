import React from 'react';
import SponsorBox from './sponsorBox';
import Grid from '@mui/material/Grid';
import './styles.css';

function sponsorGrid() {
	return (
		<div className='itemContainer'>
			<div className='gridContainer'>
				<h2>DESTEKÇİLERİMİZ</h2>
				<Grid container justifyContent={'center'}>
					<Grid sm={12} md={6} lg={4} item>
						<SponsorBox text={'ABCDE'} source={'questionmark.png'}></SponsorBox>
					</Grid>
					<Grid sm={12} md={6} lg={4} item>
						<SponsorBox text={'ABCDE'} source={'questionmark.png'}></SponsorBox>
					</Grid>
					<Grid sm={12} md={6} lg={4} item>
						<SponsorBox text={'ABCDE'} source={'questionmark.png'}></SponsorBox>
					</Grid>
					<Grid sm={12} md={6} lg={4} item>
						<SponsorBox text={'ABCDE'} source={'questionmark.png'}></SponsorBox>
					</Grid>
					<Grid sm={12} md={6} lg={4} item>
						<SponsorBox text={'ABCDE'} source={'questionmark.png'}></SponsorBox>
					</Grid>
					<Grid sm={12} md={6} lg={4} item>
						<SponsorBox text={'ABCDE'} source={'questionmark.png'}></SponsorBox>
					</Grid>
				</Grid>
			</div>
		</div>
	);
}

export default sponsorGrid;

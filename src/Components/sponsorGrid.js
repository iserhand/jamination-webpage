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
						<SponsorBox
							text={'Taleworlds'}
							source={'taleworlds.png'}
							href={'https://www.taleworlds.com/'}
						></SponsorBox>
					</Grid>
					<Grid sm={12} md={6} lg={4} item>
						<SponsorBox
							text={'Leartes'}
							source={'leartes.png'}
							href={'https://leartesstudios.com/'}
						></SponsorBox>
					</Grid>
					<Grid sm={12} md={6} lg={4} item>
						<SponsorBox
							text={'İTU MTK'}
							source={'itumtk.png'}
							href={'https://linktr.ee/itumtk'}
						></SponsorBox>
					</Grid>
					<Grid sm={12} md={6} lg={4} item>
						<SponsorBox
							text={'Espale Studios'}
							source={'espalestudios.png'}
							href={'http://www.espalestudios.com/'}
						></SponsorBox>
					</Grid>
					<Grid sm={12} md={6} lg={4} item>
						<SponsorBox
							text={'Team Machiavelli'}
							source={'TeamMachiavelli.png'}
							href={
								'https://store.steampowered.com/app/1724770/Castle_Of_Alchemists/'
							}
						></SponsorBox>
					</Grid>
				</Grid>
			</div>
			<h4>Logoların üzerine tıklayarak destekçilerimizin sayfalarına ulaşabilirsiniz.</h4>
		</div>
	);
}

export default sponsorGrid;

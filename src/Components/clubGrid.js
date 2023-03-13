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
					<Grid sm={12} md={6} lg={4} item>
						<ClubBox
							text='İTU OTG'
							source={'otg_logo.png'}
							href='https://linktr.ee/ituotg'
						></ClubBox>
					</Grid>
					<Grid sm={12} md={6} lg={4} item>
						<ClubBox
							class={'metuBox'}
							text='METU GATES'
							source={'metu_logo.png'}
							href='https://www.instagram.com/metugates/'
						></ClubBox>
					</Grid>
					<Grid sm={12} md={6} lg={4} item>
						<ClubBox
							text='DEU POG'
							source={'pog_logo.png'}
							href={'https://linktr.ee/deupog'}
						></ClubBox>
					</Grid>
					<Grid sm={12} md={6} lg={4} item>
						<ClubBox
							text='Marmara  OGK'
							source={'marmara_logo.png'}
							href='https://www.instagram.com/marmaraoyungelistirme/'
						></ClubBox>
					</Grid>
					<Grid sm={12} md={6} lg={4} item>
						<ClubBox
							text='Beikoz'
							source={'beikoz_logo.png'}
							href='https://linktr.ee/beikoz'
						></ClubBox>
					</Grid>
					<Grid sm={12} md={6} lg={4} item>
						<ClubBox
							class={'ünogBox'}
							text='ÜNOG'
							source={'unog_logo.png'}
							href={'https://unog.dev/'}
						></ClubBox>
					</Grid>
				</Grid>
			</div>
			<h4>Logoların üzerine tıklayarak toplulukların sayfalarına ulaşabilirsiniz.</h4>
		</div>
	);
}

export default ClubGrid;

import { useEffect } from 'react';
import './styles.css';
import CountDown from '../Components/countdown';
import Description from '../Components/description';
import { Grid } from '@mui/material';
function Home() {
	useEffect(() => {
		window.scrollTo(0, 0);
		document.title = 'Jamination 6';
	});
	return (
		<div className='homeContainer'>
			<Grid container>
				<Grid xs={12} sm={12} item>
					<CountDown></CountDown>
				</Grid>
				<Description></Description>
			</Grid>
		</div>
	);
}

export default Home;

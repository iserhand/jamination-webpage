import { useEffect } from 'react';
import { Grid } from '@mui/material';
import FaqBox from '../Components/faqBox';
function Faq() {
	useEffect(() => {
		document.title = 'SSS';
	});

	return (
		<div className='pageContainer'>
			<div className='itemContainer'>
				<Grid container justifyContent={'center'}>
					<Grid item sm={12} md={2}>
						<img src='kurbaga_deu.png' alt='Karakter' width={250}></img>
					</Grid>
					<Grid item sm={8}>
						<h2>Sıkça Sorulan Sorualr</h2>
						<FaqBox
							question='Bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla...'
							answer='Bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla...'
						></FaqBox>
						<FaqBox
							question='Bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla...'
							answer='Bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla...'
						></FaqBox>
						<FaqBox
							question='Bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla...'
							answer='Bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla...'
						></FaqBox>
						<FaqBox
							question='Bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla...'
							answer='Bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla...'
						></FaqBox>
						<FaqBox
							question='Bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla...'
							answer='Bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla...'
						></FaqBox>
						<FaqBox
							question='Bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla...'
							answer='Bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla...'
						></FaqBox>
						<FaqBox
							question='Bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla...'
							answer='Bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla...'
						></FaqBox>
						<FaqBox
							question='Bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla...'
							answer='Bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla...'
						></FaqBox>
					</Grid>
					<Grid item sm={2}>
						<div className='bottomCharacterContainer'>
							<img src='kaplumbaga_beikoz.png' alt='Karakter' width={250}></img>
						</div>
					</Grid>
				</Grid>
			</div>
		</div>
	);
}

export default Faq;

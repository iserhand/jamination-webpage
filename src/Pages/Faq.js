import { useEffect } from 'react';
import { Grid } from '@mui/material';
import FaqBox from '../Components/faqBox';
function Faq() {
	useEffect(() => {
		window.scrollTo(0, 0);
		document.title = 'SSS';
	});

	return (
		<div className='pageContainer'>
			<div className='itemContainer'>
				<Grid container justifyContent={'center'}>
					<Grid item sm={12} md={2}>
						<div className='characterContainer'>
							<img src='kurbaga_deu.png' alt='Karakter' width={250}></img>
						</div>
					</Grid>
					<Grid item sm={8}>
						<h2>Sıkça Sorulan Sorular</h2>
						<FaqBox
							question='Game Jam nedir?'
							answer='Game Jam, başlangıcında paylaşılan tema çerçevesinde katılımcıların
							 ekipler kurarak veya tek başlarına kısıtlı sürede oyun üretmeye çalıştığı etkinliktir.
							'
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

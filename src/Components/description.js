import Grid from '@mui/material/Grid';
import PillButton from './pillButton';
import './styles.css';
import { Link } from 'react-router-dom';
function Description() {
	return (
		<Grid container>
			<Grid item xs={12} sm={6}>
				<div className='description'>
					<h1>Jamination 6</h1>
					<div className='text'>
						Türkiye'deki oyun geliştiricileri bir araya getirip, kendi aralarında
						etkileşim kurup, birbirlerine katkı sağlayabilecekleri bir Game Jam
						etkinliği olan Jamination 6 bu sene İTÜ OTG, ÜNOG, METU GATES, DEU POG,
						Beikoz Oyun Geliştirme Topluluğu ve Marmara OGK iş birliği ile İstanbul'da
						3, 4, 5 Mart tarihlerinde gerçekleşecektir. 48 saat boyunca oyun geliştirip
						eğleneceğimiz bu etkinliğe tüm oyun geliştiricileri bekliyoruz!
					</div>
					<div className='homeButtonGroup'>
						<PillButton
							text='Hemen Başvur'
							href='https://forms.gle/2p2BvZC8GAQMaPxg6'
							reverseColor={false}
						></PillButton>
						<Link to='/faq'>
							<PillButton text='Sorum Var' reverseColor={true}></PillButton>
						</Link>
					</div>
				</div>
			</Grid>
			<Grid item xs={12} sm={6} bgcolor='#D9D9D9'>
				asdasd
			</Grid>
		</Grid>
	);
}

export default Description;

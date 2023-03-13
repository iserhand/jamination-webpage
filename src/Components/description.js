import Grid from '@mui/material/Grid';
import PillButton from './pillButton';
import './styles.css';
import { Link } from 'react-router-dom';
function Description() {
	return (
		<Grid container>
			<Grid item xs={12} sm={12} md={6}>
				<div className='description'>
					<h1 className='descriptionHeader'>Jamination 6</h1>
					<div className='text'>
						Türkiye'deki oyun geliştiricileri bir araya getirip, kendi aralarında
						etkileşim kurup, birbirlerine katkı sağlayabilecekleri bir Game Jam
						etkinliği olan Jamination 6 bu yıl İTÜ OTG, METU GATES, DEU POG, ÜNOG,
						Beikoz Oyun Geliştirme Topluluğu ve Marmara OGK iş birliği ile çevrimiçi
						olarak 3-9 Nisan tarihleri arasında gerçekleşecektir. 48 saat boyunca oyun
						geliştirip eğleneceğimiz bu etkinliğe tüm oyun geliştiricileri bekliyoruz!
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
			<Grid className='afisBox' xs={12} sm={12} md={6}>
				<img className='afisImg' src='jamination6_afis.png' alt='afiş'></img>
			</Grid>
		</Grid>
	);
}

export default Description;

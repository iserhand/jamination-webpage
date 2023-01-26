import Grid from '@mui/material/Grid';
function Description() {
	return (
		<Grid container>
			<Grid item xs={6}>
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
				</div>
			</Grid>
			<Grid item xs={6} bgcolor='#D9D9D9'></Grid>
		</Grid>
	);
}

export default Description;

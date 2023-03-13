import { useEffect } from 'react';

function Contact() {
	useEffect(() => {
		document.title = 'Bize Ulaşın';
	});
	return (
		<div className='pageContainer'>
			<div className='contactPage'>
				<div className='contactText'>
					<h1>İletişim Ağlarımız</h1>
					<div className='text'>
						Instagram hesabımız jamination.official adresinden etkinlik detaylarını ve
						gelişmelerini takip edebilirsiniz. Sorularınız için Jamination Discord
						sunucumuzu kullanabilir veya info@jamination.org e-mail adresimizden bize
						ulaşabilirsiniz.
					</div>
				</div>
				<div className='contactLogoGroup'>
					<div className='contactLogoContainer'>
						<img
							className='contactLogo'
							src={'discord_logo.png'}
							alt={'Discord'}
							onError={({ currentTarget }) => {
								currentTarget.onerror = null; // prevents looping
								currentTarget.src = 'https://placehold.jp/150x150.png';
							}}
							onClick={() => {
								window.open('https://discord.gg/8GjKD2VpKV', '_blank');
							}}
						></img>
					</div>
					<div className='contactLogoContainer'>
						<img
							className='contactLogo'
							src={'instagram_4.png'}
							alt={'Instagram'}
							onError={({ currentTarget }) => {
								currentTarget.onerror = null; // prevents looping
								currentTarget.src = 'https://placehold.jp/150x150.png';
							}}
							onClick={() => {
								window.open(
									'https://www.instagram.com/jamination.official/',
									'_blank'
								);
							}}
						></img>
					</div>
					<div className='contactLogoContainer'>
						<img
							className='contactLogo'
							src={'gmail_logo.png'}
							alt={'Mail'}
							onError={({ currentTarget }) => {
								currentTarget.onerror = null; // prevents looping
								currentTarget.src = 'https://placehold.jp/150x150.png';
							}}
							onClick={() => {
								window.open('mailto:info@jamination.org', '_blank');
							}}
						></img>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Contact;

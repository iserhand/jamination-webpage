import './styles.css';

function Footer() {
	return (
		<div className='footerContainer'>
			<p className='footerText'>
				© Bu websitesi{' '}
				<a
					className='nameContainer'
					target='_blank'
					rel='noreferrer'
					href='https://www.linkedin.com/in/iserhand/'
				>
					İbrahim Serhan Desteli
				</a>
				,{' '}
				<a
					className='nameContainer'
					target='_blank'
					rel='noreferrer'
					href='https://www.linkedin.com/in/bilgehanerten/'
				>
					Bilgehan Erten
				</a>
				,{' '}
				<a
					className='nameContainer'
					target='_blank'
					rel='noreferrer'
					href='https://www.linkedin.com/in/elçin-kılıç-2345351b5/'
				>
					Elçin Kılıç
				</a>{' '}
				ve{' '}
				<a
					className='nameContainer'
					target='_blank'
					rel='noreferrer'
					href='https://www.linkedin.com/in/burak-onuralp-bozkurt-a0854219a/'
				>
					Burak Bozkurt
				</a>{' '}
				tarafından{'  '}
				<a
					className='nameContainer'
					target='_blank'
					rel='noreferrer'
					href='https://www.instagram.com/jamination.official/'
				>
					Jamination
				</a>{' '}
				adına geliştirilmiştir.
			</p>
			<div className='linkContainer'></div>
			<div className='linkContainer'></div>
		</div>
	);
}

export default Footer;

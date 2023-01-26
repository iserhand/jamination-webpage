import { useEffect } from 'react';
import SponsorGrid from '../Components/sponsorGrid';
function Sponsor() {
	useEffect(() => {
		window.scrollTo(0, 0);
		document.title = 'Sponsorlarımız';
	}, []);
	return (
		<div className='pageContainer'>
			<SponsorGrid />
		</div>
	);
}

export default Sponsor;

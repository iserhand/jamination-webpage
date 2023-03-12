import { useEffect } from 'react';
import SponsorGrid from '../Components/sponsorGrid';
function Sponsor() {
	useEffect(() => {
		window.scrollTo(0, 0);
		document.title = 'Destekçilerimiz';
	}, []);
	return (
		<div className='pageContainer'>
			<SponsorGrid />
		</div>
	);
}

export default Sponsor;

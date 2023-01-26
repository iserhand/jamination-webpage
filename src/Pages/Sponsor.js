import { useEffect } from 'react';

function Sponsor() {
	useEffect(() => {
		document.title = 'Sponsorlarımız';
	});
	return <div>Sponsor</div>;
}

export default Sponsor;

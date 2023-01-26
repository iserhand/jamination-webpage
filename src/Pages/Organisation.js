import { useEffect } from 'react';
import ClubGrid from '../Components/clubGrid';
function Organisation() {
	useEffect(() => {
		window.scrollTo(0, 0);
		document.title = 'Organizatörler';
	}, []);
	return (
		<div className='pageContainer'>
			<ClubGrid />
		</div>
	);
}

export default Organisation;

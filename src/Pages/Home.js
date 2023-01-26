import { useEffect } from 'react';
import './styles.css';
import CountDown from '../Components/countdown';
import Description from '../Components/description';
function Home() {
	useEffect(() => {
		document.title = 'Jamination 6';
	});
	return (
		<div className='pageContainer'>
			Jamination 6 başlıyor;
			<CountDown></CountDown>
			<Description></Description>
		</div>
	);
}

export default Home;

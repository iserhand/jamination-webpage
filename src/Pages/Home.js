import { useEffect } from 'react';
import './styles.css';
import CountDown from '../Components/countdown';
import Description from '../Components/description';
import PillButton from '../Components/pillButton';
function Home() {
	useEffect(() => {
		window.scrollTo(0, 0);
		document.title = 'Jamination 6';
	});
	return (
		<div className='homeContainer'>
			Jamination 6 başlıyor;
			<CountDown></CountDown>
			<Description></Description>
			<div className='homeButtonGroup'>
				<PillButton text='Hemen Başvur' reverseColor={false}></PillButton>
				<PillButton text='Sorum Var' reverseColor={true}></PillButton>
			</div>
		</div>
	);
}

export default Home;

import { useEffect, useState } from 'react';
import CountdownPill from './countdownPill';
import './styles.css';

function Countdown() {
	const jaminationDate = new Date(2023, 3, 4, 15).getTime();
	var newDate = new Date().getTime();
	var diff = jaminationDate - newDate;
	const [timer, setTimer] = useState({
		days: Math.ceil(diff / (1000 * 60 * 60 * 24) / 2),
		hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
		minutes: Math.floor((diff / (1000 * 60)) % 60),
		sec: Math.floor((diff / 1000) % 60),
	});
	useEffect(() => {
		const interval = setInterval(() => {
			// eslint-disable-next-line react-hooks/exhaustive-deps
			diff = jaminationDate - newDate;
			var newTimer = {
				days: Math.ceil(diff / (1000 * 60 * 60 * 24) / 2),
				hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
				minutes: Math.floor((diff / (1000 * 60)) % 60),
				sec: Math.floor((diff / 1000) % 60),
			};
			setTimer(newTimer);
		}, 1000);
		return () => {
			clearInterval(interval);
		};
	});
	return (
		<div className='countdownWrapper'>
			<div className='text'>Jamination 6 başlıyor;</div>
			<div className='countdownContainer'>
				<CountdownPill date={timer?.days} text={'Gün'}></CountdownPill>
				<CountdownPill date={timer?.hours} text={'Saat'}></CountdownPill>
				<CountdownPill date={timer?.minutes} text={'Dakika'}></CountdownPill>
				<CountdownPill date={timer?.sec} text={'Saniye'}></CountdownPill>
			</div>
		</div>
	);
}

export default Countdown;

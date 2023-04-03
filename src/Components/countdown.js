import { useEffect, useState } from 'react';
import CountdownPill from './countdownPill';
import './styles.css';

function Countdown() {
	const jaminationDate = new Date('April 7, 2023 18:00:00');
	var newDate = new Date().getTime();
	var diff = jaminationDate - newDate;
	if (diff < 0) {
		diff = 0;
	}
	const [timer, setTimer] = useState({
		days: Math.ceil(diff / (1000 * 60 * 60 * 24)),
		hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
		minutes: Math.floor((diff / (1000 * 60)) % 60),
		sec: Math.floor((diff / 1000) % 60),
	});
	useEffect(() => {
		const interval = setInterval(() => {
			// eslint-disable-next-line react-hooks/exhaustive-deps
			diff = jaminationDate - newDate;
			if (diff < 0) {
				setTimer({ days: 0, hours: 0, minutes: 0, sec: 0 });
				return;
			}
			var newTimer = {
				days: Math.ceil(diff / (1000 * 60 * 60 * 24)),
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

import { useEffect, useState } from 'react';
import CountdownPill from './countdownPill';
function Countdown() {
	const jaminationDate = new Date(2023, 3, 4, 15);
	var newDate = new Date(Date.now());
	var diff = new Date(jaminationDate - newDate);
	const [timer, setTimer] = useState({
		days: Math.ceil(diff / (1000 * 60 * 60 * 24) / 2),
		hours: diff.getUTCHours(),
		minutes: diff.getUTCMinutes(),
		sec: diff.getUTCSeconds(),
	});
	useEffect(() => {
		const interval = setInterval(() => {
			// eslint-disable-next-line react-hooks/exhaustive-deps
			diff = new Date(jaminationDate - newDate);
			var newTimer = {
				days: Math.ceil(diff / (1000 * 60 * 60 * 24) / 2),
				hours: diff.getUTCHours(),
				minutes: diff.getUTCMinutes(),
				sec: diff.getUTCSeconds(),
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

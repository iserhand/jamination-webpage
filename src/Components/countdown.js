import { useEffect, useState } from 'react';
import CountdownPill from './countdownPill';
function Countdown() {
	const jaminationDate = new Date(2023, 0, 28);
	var newDate = new Date(Date.now());
	var diff = new Date(jaminationDate - newDate);
	const [timer, setTimer] = useState({
		days: diff.getUTCDate(),
		hours: diff.getUTCHours(),
		minutes: diff.getUTCMinutes(),
		sec: diff.getUTCSeconds(),
	});
	useEffect(() => {
		const interval = setInterval(() => {
			// eslint-disable-next-line react-hooks/exhaustive-deps
			diff = new Date(jaminationDate - newDate);
			var newTimer = {
				days: diff.getUTCDate(),
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
		<div className='countdownContainer'>
			<CountdownPill date={timer?.days} text={'Gün'}></CountdownPill>
			<CountdownPill date={timer?.hours} text={'Saat'}></CountdownPill>
			<CountdownPill date={timer?.minutes} text={'Dakika'}></CountdownPill>
			<CountdownPill date={timer?.sec} text={'Saniye'}></CountdownPill>
		</div>
	);
}

export default Countdown;

import { useEffect } from 'react';

function Calendar() {
	useEffect(() => {
		document.title = 'Etkinlik Takvimi';
	});
	return <div>Calendar</div>;
}

export default Calendar;

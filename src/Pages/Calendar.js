import { useEffect } from 'react';
import CalendarGrid from '../Components/calendarGrid';
function Calendar() {
	useEffect(() => {
		document.title = 'Etkinlik Takvimi';
	});
	return (
		<div className='pageContainer'>
			<div className='itemContainer'>
				<h2>Etkinlik Takvimi</h2>
				<CalendarGrid></CalendarGrid>
			</div>
		</div>
	);
}

export default Calendar;

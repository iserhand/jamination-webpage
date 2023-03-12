import React from 'react';
import './styles.css';
import CalendarRow from '../Components/calendarRow';
function CalendarGrid() {
	return (
		<div className='calendarGrid'>
			<div className='calendarHeader'>Nisan 2023</div>
			<CalendarRow
				dayText={'Pazartesi'}
				dayNumber={'2'}
				calendarEventList={[
					{ text: 'Jam Başlangıcı ve tema açıklanamsı', time: '13:00' },
					{ text: 'Jam Başlangıcı ve tema açıklanamsı', time: '16:30' },
					{ text: 'Jam Başlangıcı ve tema açıklanamsı', time: '19:40' },
				]}
			></CalendarRow>
			<CalendarRow
				dayText={'Pazartesi'}
				dayNumber={'2'}
				calendarEventList={['a', 'b', 'c', 'd', 'e']}
			></CalendarRow>
			<CalendarRow
				dayText={'Pazartesi'}
				dayNumber={'2'}
				calendarEventList={['a', 'b', 'c', 'd', 'e']}
			></CalendarRow>
			<CalendarRow
				dayText={'Pazartesi'}
				dayNumber={'2'}
				calendarEventList={['a', 'b', 'c', 'd', 'e']}
			></CalendarRow>
			<CalendarRow
				dayText={'Pazartesi'}
				dayNumber={'2'}
				calendarEventList={['a', 'b', 'c', 'd', 'e']}
			></CalendarRow>
		</div>
	);
}

export default CalendarGrid;

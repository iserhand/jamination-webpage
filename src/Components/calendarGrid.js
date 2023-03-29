import React from 'react';
import './styles.css';
import CalendarRow from '../Components/calendarRow';
function CalendarGrid() {
	return (
		<div className='calendarGrid'>
			<div className='calendarHeader'>Nisan 2023</div>
			<CalendarRow
				dayText={'Pazartesi'}
				dayNumber={'3'}
				calendarEventList={[
					{ text: 'Atölye', time: '17.30-19.30 ' },
					{ text: 'Atölye', time: ' 21.00-23.00' },
				]}
			></CalendarRow>
			<CalendarRow
				dayText={'Salı'}
				dayNumber={'4'}
				calendarEventList={[
					{ text: 'Atölye', time: '17.30-19.30 ' },
					{ text: 'Atölye', time: ' 21.00-23.00' },
				]}
			></CalendarRow>
			<CalendarRow
				dayText={'Çarşamba'}
				dayNumber={'5'}
				calendarEventList={[
					{ text: 'Atölye', time: '17.30-19.30 ' },
					{ text: 'Atölye', time: ' 21.00-23.00' },
				]}
			></CalendarRow>
			<CalendarRow
				dayText={'Perşembe'}
				dayNumber={'6'}
				calendarEventList={[
					{ text: 'Atölye', time: '17.30-19.30 ' },
					{ text: 'Atölye', time: ' 21.00-23.00' },
				]}
			></CalendarRow>
			<CalendarRow
				dayText={'Cuma'}
				dayNumber={'7'}
				calendarEventList={[
					{ text: 'Gam Jam Gazileri İle Sohbet', time: '16.30' },
					{ text: 'Açılış Sunumu', time: '18.00' },
				]}
			></CalendarRow>

			<CalendarRow
				dayText={'Cumartesi'}
				dayNumber={'8'}
				calendarEventList={[{ text: 'Oyun Geliştirme', time: 'Tüm gün' }]}
			></CalendarRow>
			<CalendarRow
				dayText={'Pazar'}
				dayNumber={'9'}
				calendarEventList={[
					{ text: 'Game Jam Bitişi', time: '18:00' },
					{ text: 'Oyun Sunumları', time: '19.00 - 22.00' },
				]}
			></CalendarRow>
		</div>
	);
}

export default CalendarGrid;

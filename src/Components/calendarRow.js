import './styles.css';
function CalendarRow(props) {
	const { calendarEventList } = props;
	return (
		<div className='calendarRow'>
			<div className='calendarDateBox'>
				<div className='calendarDay'>{props.dayText}</div>
				<div className='calendarDayNumber'>{props.dayNumber}</div>
			</div>
			<div className='calendarEventsBox'>
				{calendarEventList.map((event) => (
					<div className='calendarEventRow' key={event}>
						<div className='calendarEventTime'>{event.time}</div>
						<div className='calendarEventText'>{event.text}</div>
					</div>
				))}
			</div>
		</div>
	);
}

export default CalendarRow;

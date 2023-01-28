import React from 'react';

function CountdownPill(props) {
	return (
		<div className='countdownItem'>
			<div className='dateText'>{props.date}</div>
			<div>{props.text}</div>
		</div>
	);
}

export default CountdownPill;

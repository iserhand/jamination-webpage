import React from 'react';

function CountdownPill(props) {
	return (
		<div className='countdownItem'>
			<div>{props.date}</div>
			<div>{props.text}</div>
		</div>
	);
}

export default CountdownPill;

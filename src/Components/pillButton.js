import React from 'react';

function PillButton(props) {
	if (!props.reverseColor) {
		return <button className='pillBtn'>{props.text}</button>;
	} else {
		return <button className='pillBtnReversed'>{props.text}</button>;
	}
}

export default PillButton;

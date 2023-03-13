import React from 'react';
import './styles.css';

function PillButton(props) {
	if (!props.reverseColor) {
		if (props.href) {
			return (
				<button
					className='pillBtn'
					onClick={() => {
						window.open(props.href, '_blank');
					}}
				>
					{props.text}
				</button>
			);
		} else {
			return <button className='pillBtn'>{props.text}</button>;
		}
	} else {
		if (props.href) {
			return (
				<button
					className='pillBtnReversed'
					onClick={() => {
						window.open(props.href, '_blank');
					}}
				>
					{props.text}
				</button>
			);
		} else {
			return <button className='pillBtnReversed'>{props.text}</button>;
		}
	}
}

export default PillButton;

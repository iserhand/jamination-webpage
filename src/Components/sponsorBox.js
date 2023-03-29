import React from 'react';
import './styles.css';

function sponsorBox(props) {
	return (
		<div>
			<img
				className='sponsorImg'
				src={props.source}
				alt='img'
				onError={({ currentTarget }) => {
					currentTarget.onerror = null; // prevents looping
					currentTarget.src = 'https://placehold.jp/150x150.png';
				}}
				width={150}
				height={150}
				onClick={() => {
					window.open(props.href, '_blank');
				}}
			></img>
			<h3>{props.text}</h3>
		</div>
	);
}

export default sponsorBox;

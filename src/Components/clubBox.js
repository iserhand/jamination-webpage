import React from 'react';

function ClubBox(props) {
	return (
		<div>
			<h3>{props.text}</h3>
			<img
				src={props.source}
				alt={props.text}
				width={150}
				height={150}
				onError={({ currentTarget }) => {
					currentTarget.onerror = null; // prevents looping
					currentTarget.src = 'https://placehold.jp/150x150.png';
				}}
			></img>
		</div>
	);
}

export default ClubBox;

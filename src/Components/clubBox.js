import React from 'react';
import './styles.css';

function ClubBox(props) {
	return (
		<div>
			<h3>{props.text}</h3>
			<div>
				<img
					width={150}
					src={props.source}
					alt={props.text}
					onError={({ currentTarget }) => {
						currentTarget.onerror = null; // prevents looping
						currentTarget.src = 'https://placehold.jp/150x150.png';
					}}
				></img>
			</div>
		</div>
	);
}

export default ClubBox;

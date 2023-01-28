import React from 'react';
import './styles.css';

function sponsorBox(props) {
	return (
		<div>
			<img
				src={props.source}
				alt='img'
				onError={({ currentTarget }) => {
					currentTarget.onerror = null; // prevents looping
					currentTarget.src = 'https://placehold.jp/150x150.png';
				}}
				width={150}
				height={150}
			></img>
		</div>
	);
}

export default sponsorBox;

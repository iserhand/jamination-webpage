import { useEffect } from 'react';

function Organisation() {
	useEffect(() => {
		document.title = 'Organizatörler';
	});
	return <div>Organisation</div>;
}

export default Organisation;

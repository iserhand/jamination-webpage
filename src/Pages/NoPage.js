import { useEffect } from 'react';
function NoPage() {
	useEffect(() => {
		document.title = '404';
	});
	return <div>NoPage</div>;
}

export default NoPage;

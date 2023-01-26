import { useEffect } from 'react';
function NoPage() {
	useEffect(() => {
		document.title = '404';
	});
	return (
		<div className='errorContainer'>
			<h1>404!</h1>
			<h3>
				Muhtemelen buraya yanlışlıkla geldin<br></br> lütfen yukarıdaki menüden geçerli
				sayfalardan birini seç
			</h3>
		</div>
	);
}

export default NoPage;

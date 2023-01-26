import { useEffect } from 'react';

function Contact() {
	useEffect(() => {
		document.title = 'Bize Ulaşın';
	});
	return <div>Contact us</div>;
}

export default Contact;

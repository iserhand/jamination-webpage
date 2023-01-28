import React from 'react';
import './styles.css';

function FaqBox(props) {
	return (
		<div className='faqContainer'>
			<div className='faqTextContainer'>
				<div className='faqHeader'>Soru:</div>
				<div className='faqText'>{props.question}</div>
			</div>
			<div className='faqTextContainer'>
				<div className='faqHeader'>Cevap: </div>
				<div className='faqText'>{props.answer}</div>
			</div>
			<br></br>
			<br></br>
		</div>
	);
}

export default FaqBox;

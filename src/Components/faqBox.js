import React, { useState } from 'react';
import './styles.css';

const faqData = [
	{
		id: 1,
		question: 'Game Jam nedir?',
		answer: 'Game Jam, başlangıcında paylaşılan tema çerçevesinde katılımcıların ekipler kurarak veya tek başlarına kısıtlı sürede oyun üretmeye çalıştığı etkinliktir.',
	},
	{
		id: 2,
		question: "Game Jam'e kimler katılabilir?",
		answer: 'Tecrübeli tecrübesiz oyun geliştirmeye ilgisi olan programlama, müzik, ses, görsel tasarım, çizim, modelleme veya oyun geliştirmeyle alakalı herhangi bir dalda çalışmak isteyen herkes katılabilir.',
	},
	{
		id: 3,
		question: "Oyun geliştirme ile ilgili deneyimim yok gene de Jam'e katılabilir miyim?",
		answer: 'Evet, oyun geliştirmeyle alakalı deneyiminiz olmasa bile ilginiz varsa katılabilirsiniz. Sadece diğer katılımcılara göre biraz daha zorlu bir Game Jam süreci geçirirsiniz. Game Jam sırasında diğer katılımcılardan yardım alarak veya internetten videolar ve kurslar izleyerek ilk oyununuzu yapabilirsiniz.',
	},
	{
		id: 4,
		question: "İlk defa Jam'e katılacağım bir sorun olur mu?",
		answer: "Hayır, ilk defa katılmakta bir sorun olmaz. Kısıtlı sürede sıkı çalışma koşullarını deneyimleme şansı yakalayabilirsiniz, bu sırada da bolca tecrübe edinmiş olursunuz. Birden fazla kez Game Jam'e katılmış kişilerle tanışıp tecrübelerinden faydalana dabilirsiniz.",
	},
	{
		id: 5,
		question: 'Game Jam nedir?',
		answer: 'Game Jam, başlangıcında paylaşılan tema çerçevesinde katılımcıların ekipler kurarak veya tek başlarına kısıtlı sürede oyun üretmeye çalıştığı etkinliktir.',
	},
	{
		id: 6,
		question: "Game Jam'e kimler katılabilir?",
		answer: 'Tecrübeli tecrübesiz oyun geliştirmeye ilgisi olan programlama, müzik, ses, görsel tasarım, çizim, modelleme veya oyun geliştirmeyle alakalı herhangi bir dalda çalışmak isteyen herkes katılabilir.',
	},
	{
		id: 7,
		question: "Oyun geliştirme ile ilgili deneyimim yok gene de Jam'e katılabilir miyim?",
		answer: 'Evet, oyun geliştirmeyle alakalı deneyiminiz olmasa bile ilginiz varsa katılabilirsiniz. Sadece diğer katılımcılara göre biraz daha zorlu bir Game Jam süreci geçirirsiniz. Game Jam sırasında diğer katılımcılardan yardım alarak veya internetten videolar ve kurslar izleyerek ilk oyununuzu yapabilirsiniz.',
	},
	{
		id: 8,
		question: "İlk defa Jam'e katılacağım bir sorun olur mu?",
		answer: "Hayır, ilk defa katılmakta bir sorun olmaz. Kısıtlı sürede sıkı çalışma koşullarını deneyimleme şansı yakalayabilirsiniz, bu sırada da bolca tecrübe edinmiş olursunuz. Birden fazla kez Game Jam'e katılmış kişilerle tanışıp tecrübelerinden faydalana dabilirsiniz.",
	},
	{
		id: 9,
		question: 'Game Jam nedir?',
		answer: 'Game Jam, başlangıcında paylaşılan tema çerçevesinde katılımcıların ekipler kurarak veya tek başlarına kısıtlı sürede oyun üretmeye çalıştığı etkinliktir.',
	},
	{
		id: 10,
		question: "Game Jam'e kimler katılabilir?",
		answer: 'Tecrübeli tecrübesiz oyun geliştirmeye ilgisi olan programlama, müzik, ses, görsel tasarım, çizim, modelleme veya oyun geliştirmeyle alakalı herhangi bir dalda çalışmak isteyen herkes katılabilir.',
	},
	{
		id: 11,
		question: "Oyun geliştirme ile ilgili deneyimim yok gene de Jam'e katılabilir miyim?",
		answer: 'Evet, oyun geliştirmeyle alakalı deneyiminiz olmasa bile ilginiz varsa katılabilirsiniz. Sadece diğer katılımcılara göre biraz daha zorlu bir Game Jam süreci geçirirsiniz. Game Jam sırasında diğer katılımcılardan yardım alarak veya internetten videolar ve kurslar izleyerek ilk oyununuzu yapabilirsiniz.',
	},
	{
		id: 12,
		question: "İlk defa Jam'e katılacağım bir sorun olur mu?",
		answer: "Hayır, ilk defa katılmakta bir sorun olmaz. Kısıtlı sürede sıkı çalışma koşullarını deneyimleme şansı yakalayabilirsiniz, bu sırada da bolca tecrübe edinmiş olursunuz. Birden fazla kez Game Jam'e katılmış kişilerle tanışıp tecrübelerinden faydalana dabilirsiniz.",
	},
];
function FaqBox(props) {
	const [activeIndex, setActiveIndex] = useState(null);
	const handleClick = (index) => {
		setActiveIndex(index === activeIndex ? null : index);
	};
	return (
		<div className='faqContainer'>
			<div className='accordion'>
				{faqData.map((item) => (
					<div key={item.id} className='accordion-item'>
						<div className='faqQuestion' onClick={() => handleClick(item.id)}>
							{item.question}
							{activeIndex === item.id ? (
								<i className='fas fa-chevron-up'></i>
							) : (
								<i className='fas fa-chevron-down'></i>
							)}
						</div>
						{activeIndex === item.id && (
							<p className='accordion-item__answer'>{item.answer}</p>
						)}
					</div>
				))}
			</div>
		</div>
	);
}

export default FaqBox;

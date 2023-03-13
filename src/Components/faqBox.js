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
		answer: 'Tecrübeli veya tecrübesiz oyun geliştirmeye ilgisi olan programlama, müzik, ses, görsel tasarım, çizim, modelleme veya oyun geliştirmeyle alakalı herhangi bir dalda çalışmak isteyen herkes katılabilir.',
	},
	{
		id: 3,
		question: "Oyun geliştirme ile ilgili deneyimim yok yine de Jam'e katılabilir miyim?",
		answer: 'Evet, oyun geliştirmeyle alakalı deneyiminiz olmasa bile ilginiz varsa katılabilirsiniz. Sadece diğer katılımcılara göre biraz daha zorlu bir Game Jam süreci geçirebilirsiniz. Game Jam sırasında diğer katılımcılardan yardım alarak veya internetten videolar ve kurslar izleyerek ilk oyununuzu yapabilirsiniz.',
	},
	{
		id: 4,
		question: "İlk defa Jam'e katılacağım, bir sorun olur mu?",
		answer: "Hayır, ilk defa katılmakta bir sorun olmaz. Kısıtlı sürede sıkı çalışma koşullarını deneyimleme şansı yakalayabilir, bu sırada da bolca tecrübe edinebilirsiniz. Birden fazla Game Jam'e katılmış kişilerle tanışıp tecrübelerinden faydalanma fırsatı da yakalayabilirsiniz.",
	},
	{
		id: 5,
		question: 'Game Jam ne kadar sürecek?',
		answer: "Game Jam 7 Nisan Cuma günü 19.00'da başlayıp, 9 Nisan Pazar günü saat 19.00'a kadar toplam 48 saat sürecektir.",
	},
	{
		id: 6,
		question: 'Game Jam teması ne zaman açıklanacak?',
		answer: "Temamız 7 Nisan Cuma günü saat 19.00'da başlayacak olan açılış sunumumuzun sonunda açıklanacak.",
	},
	{
		id: 7,
		question: 'Sadece eğitimlere katılabilir miyim?',
		answer: "Evet Jamination 6 etkinliğine sadece eğitimler için katılabilirsiniz, ancak eğitimlerden sonra Game Jam'e katılıp öğrendiklerinizi denemeniz ve oyun geliştirmek için çabalamanız tavsiye edilir.",
	},
	{
		id: 8,
		question: "Jam'de ödül olacak mı?",
		answer: 'Hayır, Jamination etkinliğinde bir sıralama veya ödül olmayacak. Etkinlikte paylaşımcı ve destekçi bir ortam olmasının daha faydalı olduğunu düşünüyoruz.',
	},
	{
		id: 9,
		question: 'Tek başıma katılabilir miyim?',
		answer: 'Evet, tek başınıza katılıp kendi sınırlarınızı zorlayabilirsiniz. Takım kurma gibi bir zorunluluk bulunmamaktadır. Yine de diğer katılımcılarla etkileşim halinde bulunup sosyalleşmeniz Game Jam deneyiminiz için daha faydalı olacaktır.',
	},
	{
		id: 10,
		question: 'Hazır asset kullanabilir miyiz?',
		answer: 'Evet, kullanabilirsiniz. Etkinlikte zaten bir sıralama ve ödül olmayacağı için herhangi bir adaletsizlik durumu da olmayacaktır. Sadece oyun sunumlarında ve oyunu yükleyeceğiniz itch.io sayfanızda kullandığınız hazır assetleri belirtmeniz yeterlidir.',
	},
	{
		id: 11,
		question: 'Discord sunucusuna katılmak zorunda mıyım?',
		answer: 'Hayır, katılmak zorunda değilsiniz ancak tüm katılımcıların bir arada bulunması ve birbiriyle etkileşim halinde bulunması daha faydalı olacağı için hep beraber Discord sunucumuzda toplanmak isteriz. Ayrıca eğitimlere Discord üzerinden katılmak için sunucumuzda bulunmanız gerekmektedir.',
	},
	{
		id: 12,
		question: 'Daha farklı bir konuda sorum var, size nasıl ulaşabilirim?',
		answer: 'Bize Instagram hesabımız jamination.official adresimizden, info@jamination.org e-mail adresimizden veya Jamination Discord sunucumuzdaki Topluluk Yetkilileri kısmında ulaşabilirsiniz.',
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
								<div className='faqShrinkButton'></div>
							) : (
								<div className='faqGrowButton'></div>
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

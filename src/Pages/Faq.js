import { useEffect } from 'react';
import { Grid } from '@mui/material';
import FaqBox from '../Components/faqBox';
function Faq() {
	useEffect(() => {
		window.scrollTo(0, 0);
		document.title = 'SSS';
	});

	return (
		<div className='pageContainer'>
			<div className='itemContainer'>
				<Grid container justifyContent={'center'}>
					<Grid item sm={12} md={2}>
						<div className='characterContainer'>
							<img src='kurbaga_deu.png' alt='Karakter' width={250}></img>
						</div>
					</Grid>
					<Grid item sm={8}>
						<h2>Sıkça Sorulan Sorualr</h2>
						<FaqBox
							question='Game Jam nedir?'
							answer='Game Jam, başlangıcında paylaşılan tema çerçevesinde katılımcıların
							 ekipler kurarak veya tek başlarına kısıtlı sürede oyun üretmeye çalıştığı etkinliktir.
							'
						></FaqBox>
						<FaqBox
							question="Game Jam'e kimler katılabilir?"
							answer='Tecrübeli tecrübesiz oyun geliştirmeye ilgisi olan 
							programlama, müzik, ses, görsel tasarım, çizim, modelleme veya oyun geliştirmeyle alakalı herhangi bir
							 dalda çalışmak isteyen herkes katılabilir.'
						></FaqBox>
						<FaqBox
							question="Oyun geliştirme ile ilgili deneyimim yok yine de Jam'e katılabilir miyim?"
							answer='Evet, oyun geliştirmeyle alakalı deneyiminiz
							 olmasa bile ilginiz varsa katılabilirsiniz.
							  Sadece diğer katılımcılara göre biraz daha zorlu bir Game Jam süreci geçirirsiniz.
							   Game Jam sırasında diğer katılımcılardan yardım alarak veya internetten videolar
							    ve kurslar izleyerek ilk oyununuzu yapabilirsiniz.'
						></FaqBox>
						<FaqBox
							question="İlk defa Jam'e katılacağım bir sorun olur mu?"
							answer="Hayır, ilk defa katılmakta bir sorun olmaz. Kısıtlı sürede sıkı çalışma 
							koşullarını deneyimleme şansı yakalayabilirsiniz, bu sırada da bolca tecrübe edinmiş olursunuz.
							 Birden fazla kez Game Jam'e katılmış kişilerle tanışıp tecrübelerinden faydalana dabilirsiniz."
						></FaqBox>
						<FaqBox
							question='Game Jam ne kadar sürecek?'
							answer="Game Jam 7 Nisan Cuma günü 19.00'dan 9 Nisan Pazar günü saat 19.00'a kadar toplam 48 saat sürecektir."
						></FaqBox>
						<FaqBox
							question='Game Jam teması ne zaman açıklanacak?'
							answer="Temamız 7 Nisan Cuma günü saat 19.00'da başlayacak olan açılış sunumumuzun sonunda açıklanacak."
						></FaqBox>
						<FaqBox
							question='Sadece eğitimlere katılabilir miyim?'
							answer="Evet Jamination 6 etkinliğine sadece eğitimler için katılabilirsiniz
							 ancak eğitimlerden sonra Game Jam'e katılıp öğrendiklerinizi denemeniz ve oyun geliştirmek için çabalamanız tavsiye edilir."
						></FaqBox>
						<FaqBox
							question="Jam'de ödül olacak mı?"
							answer='Hayır, Jamination etkinliğinde bir sıralama veya ödül olmayacak
							. Etkinlikte paylaşımcı ve destekçi bir ortam olmasının daha faydalı olduğunu düşünüyoruz.'
						></FaqBox>
						<FaqBox
							question='Tek başıma katılabilir miyim?'
							answer='Evet, tek başınıza katılıp kendi sınırlarınızı zorlayabilirsiniz.
							 Takım kurma gibi bir zorunluluk bulunmamaktadır. Gene de diğer katılımcılarla etkileşim halinde bulunup sosyalleşmeniz
							  Game Jam deneyiminiz için daha faydalı olacaktır.'
						></FaqBox>
						<FaqBox
							question='Hazır asset kullanabilir miyiz?'
							answer='Evet, kullanabilirsiniz. Etkinlikte zaten bir sıralama ve ödül olmayacağı için
							 herhangi bir adaletsizlik durumu da olmayacaktır.
							  Sadece oyun sunumlarında ve oyunu yükleyeceğiniz itch.io sayfanızda kullandığınız hazır assetleri belirtmeniz yeterlidir.'
						></FaqBox>
						<FaqBox
							question='Discord sunucusuna katılmak zorunda mıyım?'
							answer='Hayır, katılmak zorunda değilsiniz ancak tüm katılımcıların bir arada bulunması ve birbiriyle etkileşim halinde bulunması
							 daha faydalı olacağı için hep beraber Discord sunucumuzda toplanmak isteriz.
							  Ayrıca eğitimlere Discord üzerinden katılmak için sunucumuzda bulunmanız gerekmektedir.'
						></FaqBox>
						<FaqBox
							question='Daha farklı bir konuda sorum var. Size nasıl ulaşabilirim?'
							answer='Bize Instagram hesabımız jamination.official adresimizden,
							 info@jamination.org e-mail adresimizden veya Jamination Discord sunucumuzdaki Topluluk Yetkilileri kısmında ulaşabilirsiniz.'
						></FaqBox>
					</Grid>
					<Grid item sm={2}>
						<div className='bottomCharacterContainer'>
							<img src='kaplumbaga_beikoz.png' alt='Karakter' width={250}></img>
						</div>
					</Grid>
				</Grid>
			</div>
		</div>
	);
}

export default Faq;

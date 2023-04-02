import React from 'react';
import './styles.css';
import CalendarRow from '../Components/calendarRow';
function CalendarGrid() {
	return (
		<div className='calendarGrid'>
			<div className='calendarHeader'>Nisan 2023</div>
			<CalendarRow
				dayText={'Pazartesi'}
				dayNumber={'3'}
				calendarEventList={[
					{
						text: 'Konsol Oyunlarda Erken Konsept Aşaması \n (TaleWorlds Entertainment)',
						time: '17.30-19.30 ',
					},
					{
						text: 'Unreal Engine Level Art Atölyesi (Leartes Studios)',
						time: ' 21.00-23.00',
					},
				]}
			></CalendarRow>
			<CalendarRow
				dayText={'Salı'}
				dayNumber={'4'}
				calendarEventList={[
					{
						text: 'Platformerlarda Juicylik Atölyesi (Espale Studios)',
						time: '17.30-19.30 ',
					},
					{ text: 'Blender Modelleme Atölyesi (Leartes Studios)', time: ' 21.00-23.00' },
				]}
			></CalendarRow>
			<CalendarRow
				dayText={'Çarşamba'}
				dayNumber={'5'}
				calendarEventList={[
					{
						text: 'Atöyle',
						time: '17.30-19.30 ',
					},
					{
						text: 'Video Oyunlarda Animasyon Atölyesi (Team Machiavelli)',
						time: ' 21.00-23.00',
					},
				]}
			></CalendarRow>
			<CalendarRow
				dayText={'Perşembe'}
				dayNumber={'6'}
				calendarEventList={[
					{
						text: 'Yapay Zeka İle Oyun Müziği Üretimi \n (İTÜ Müzik Teknolojisi Kulübü)',
						time: '17.30-19.30 ',
					},
					{
						text: 'Z Brush High Poly Modelleme Atölyesi (Leartes Studios)',
						time: ' 21.00-23.00',
					},
				]}
			></CalendarRow>
			<CalendarRow
				dayText={'Cuma'}
				dayNumber={'7'}
				calendarEventList={[
					{ text: 'Gam Jam Gazileri İle Sohbet', time: '16.30' },
					{ text: 'Açılış Sunumu ve TEMA Açıklanışı', time: '18.00' },
				]}
			></CalendarRow>

			<CalendarRow
				dayText={'Cumartesi'}
				dayNumber={'8'}
				calendarEventList={[{ text: 'Oyun Geliştirme', time: 'Tüm gün' }]}
			></CalendarRow>
			<CalendarRow
				dayText={'Pazar'}
				dayNumber={'9'}
				calendarEventList={[
					{ text: 'Game Jam Bitişi', time: '18:00' },
					{ text: 'Oyun Sunumları', time: '20.30 - 23.30' },
				]}
			></CalendarRow>
		</div>
	);
}

export default CalendarGrid;

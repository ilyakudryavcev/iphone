document.addEventListener('DOMContentLoaded', () => {
	'use strict';

const tabs = () => {

const cardDetailChangeElems = document.querySelectorAll('.card-detail__change');
const cardDetailsTitleElem = document.querySelectorAll('.card-details__title');
const cardImageItemElem = document.querySelectorAll('card__image_item');
const cardDetailsPriseElem = document.querySelectorAll('.card-details__price');
const descriptionMemory = document.querySelectorAll('.description__memory');
const data = [
	{
		name: 'Смартфон Apple iPhone 12 Pro 128GB Graphite',
		img: 'img/iPhone-graphite.png',
		price: 95990,
		memoryROM: 128
	},
	{
		name: 'Смартфон Apple iPhone 12 Pro 256GB Pacific Silver',
		img: 'img/iPhone-silver.png',
		price: 120990,
		memoryROM: 256
	},
	{
		name: 'Смартфон Apple iPhone 12 Pro 128GB Pacific Blue',
		img: 'img/iPhone-blue.png',
		price: 99990,
		memoryROM: 128
		},
	];

		const deactive = () => {
		cardDetailChangeElems.forEach(btn => btn.classList.remove('active'))
		}
		
		cardDetailChangeElems.forEach((btn, i) => {
		btn.addEventListener('click', () => {
		if(!btn.classList.contains('active')) {
		deactive();
		btn.classList.add('active');
		console.log(data);
		cardDetailsTitleElem.textContent = data[i].name;
		cardImageItemElem.src = data[i].img;
		cardImageItemElem.alt = data[i].name;
		cardDetailsPriseElem.textContent = data[i].price + '₽'
		descriptionMemory.textContent = `Встроенная память (ROM) ${data[i].memoryROM} ГБ`;
		}
	});
})
};



tabs();

});
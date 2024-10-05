const header = document.getElementById('header'); // to zwraca pojedynczy obiekt bo ID jest jedno na stronie
//console.log(header);
header.classList.add('red');

const gallery = document.getElementsByClassName('gallery'); // to zwraca listę/tablicę obiektów bo KLAS może być wiele na stronie [  {..},  {..}  ]

//console.log(gallery);

//console.log(`Tekst przed modyfikacją ${gallery[0].innerHTML}`);
gallery[0].innerHTML = 'Nadpisana galeria';
//console.log(`Tekst po modyfikacji ${gallery[0].innerHTML}`);

const divs = document.getElementsByTagName('div');
//console.log(divs);

const divsByQuerySelector = document.querySelector('div'); // znajduje pierwszy element od gory do dolu i nie szuka dalej
//console.log(divsByQuerySelector);

const header2 = document.querySelector('h2');
const newDiv = document.createElement('div');
newDiv.innerHTML = 'nowy box';
header2.appendChild(newDiv); // dodaje nowy element pod bieżącym elementem
//header2.removeChild(newDiv); // usuwa element pod bieżącym elementem

//div.outerHTML --> <div class="gallery">Galeria1</div>
//div.innerHTML --> Galeria1    (tylko tekst wewnątrz tagów)

const button = document.querySelector('#calculate');
button.addEventListener('click', function () {
	let input1 = document.querySelector('#valueA');
	let input2 = document.querySelector('#valueB');

	let input1Value = Number(input1.value);
	let input2Value = Number(input2.value);
	let result = add(input1Value, input2Value);
	let input3 = document.querySelector('#result');
	input3.value = result;
});

const add = (a, b) => {
	return a + b;
};

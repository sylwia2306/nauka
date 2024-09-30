// zmienne ( variables )

// constant - stała (const) musi mieć przypisaną warość

const red = 'czerwony';
const green = 'zielony';

console.log(red);
console.log('A To moje zdanie');

console.log(`Zmienna green: ${green}`);

// typy proste
let x = 23;
let y = 34;
let name = 'Karol';
let isRed = true;
let z;
//objekt zawiera kilka typów prostych

// sposób 1 tworzenia obiektu
let object1 = new Object();
object1.name = 'Sylwia';
object1.surname = 'Rogozińska';

// obiekt zagnieżdzony
let object2 = new Object();
object2.xd = object1;

console.log(object2);

console.log(`Pole imie: ${object2.xd.name}`);
console.log(`Pole nazwisko: ${object2.xd.surname}`);

console.log(`[obiekt1] Pole imie: ${object1.name}`);
console.log(`[obiekt1] Pole nazwisko: ${object1.surname}`);

// sposób 2 tworzenia obiektu

let pizza = {
	size: '32cm',
	cake: 'thin',
	courier: {
		name: 'Jan',
		surname: 'Kowalski',
	},
};

console.log('Pizza');
console.log(pizza);

console.log(`Pole imie z pizzy: ${pizza.courier.name}`);
console.log(`Pole nazwisko z pizzy: ${pizza.courier.surname}`);
console.log(`Pole rozmiar: ${pizza.size}`);

let car = {
	brand: 'Audi',
	year: '2012',
	color: 'pink',
	motor: {
		capacity: '2l',
		isDiesel: true,
		isBensine: false,
	},
};
console.log(car);

// OPERATORY

// plus   +
// minus  -
// mnożenie *
// dzielenie /
// operator przypisania  =
// operator modulo %     np.  ( 21%10 = 1 )
// operator inkrementacji ++    (+1)
// operator dekrementacji --   (-1)

let a = 10;
let by = ++a; // by = 11
let bx = a++; // bx = 10

// PORÓWNYWANIE ZMIENNYCH  (zwraca zawsze true lub false  - wartość typu boolean )
//  większe od  >
//  mniejsze od  <
//  większe lub równe  >=
//  mniejsze lub równe  <=
//  równe-porównanie zmiennych (bez typu)  ==    np  '1' == 1    ----> true
//  równee-porównanie zmiennych  (z typem)  ===    np  '1' === 1    ----> false
//  różne-porównanie zmiennych (bez typu)  !=    np  '1' != 1    ----> false (Czy elementy są takie same nie uwzględniając typu)
//  różne-porównanie zmiennych (z typem)  !==    np  '1' !== 1    ----> true (Czy elementy są takie same uwzględniając typ)

console.log(1 != 1); // false - nie są różne
console.log('1' != 1); // false - nie są różne

console.log('1' !== 1); // true - są różne
console.log(1 !== 1); // false - nie są różne

// INSTRUKCJE WARUNKOWE

// 1. IF  ( jezeli  cos jest spełnione (warunek)   to zrób coś )

if (1 == 1) {
	// moj kod
	console.log('Jeden równa się jeden');
} else if (2 == 2) {
	console.log('Dwa równa się dwa');
} else {
	// a co jesli nie jest równe
	console.log('Jeden NIE równa się jeden');
}

// 2. SWITCH

let color = 'blue';

switch (color) {
	case 'red': {
		console.log('CZERWONY');
		break; // wyjdz ze switcha - przerwij
	}
	case 'blue': {
		console.log('NIEBIESKI');
		break; // wyjdz ze switcha - przerwij
	}
	case 'green': {
		console.log('ZIELONY');
		break; // wyjdz ze switcha - przerwij
	}
	case 'black': {
		console.log('CZARNY');
		break; // wyjdz ze switcha - przerwij
	}

	default: {
		console.log('BRAK KOLORU');
	}
}

// 3. OPERATOR WARUNKOWY - OPERATOR TRÓJ ARGUMENOWTY
let tx = 10;

tx < 20
	? console.log('tx jest mniejsze od 20')
	: console.log('tx jest większe od 20');

// stwórz:
// * zmienną o nazwie 'isEven' która mówi czy dana liczba jest parzysta
// * zmienną o nazwie 'number' i przypisz do niej dowolną liczbę np. 10

// * przypisz do zmiennej 'isEven' za pomocą operatora warunkowego wartość true lub false.
//     Operator warunkowy ma sprawdzić czy liczba pod zmienną o nazwie 'number' jest parzysta  czy nieparysta

// wypisz komunikat na konsoli o nazwie "Zmienna 'number' jest parzysta lub nieparzysta" w zaleznosic od wyniku

let isEven;
let number = 11;

isEven = number % 2 == 0;
isEven
	? console.log(`Zmienna ${number} jest parzysta`)
	: console.log(`Zmienna ${number} jest nieparzysta`);

// PĘTLE

// FOR (zmienna mozna ale nie trzeba definiowac w nawiasach okraglych)
for (let z = 0; z > 10; z = z - 1) {
	console.log(`PETLA ${z}`);
}

// WHILE (zmienna trzeba definiowac poza nawiasami okraglymi, nie mozna w)
let f = 2;

while (f < -1) {
	console.log(`WHILE ${f}`);
	f = f + 1;
}

let h = 2;

// DO-WHILE (zmienna trzeba definiowac poza nawiasami okraglymi, nie mozna w)
// Pętla DO-WHILE różni się od pętli WHILE tym, że pętla WHILE zawsze na początku sprawdzi warunek i dopiero później wykona kod w pętli, natomiast pętla DO-WHILE zawsze przynajmniej raz wykona to co jest w pętli i na końcu sprawdzi warunek
do {
	console.log(`DO-WHILE ${h}`);
	h = h + 1;
} while (h < -1);

// For of lub For each
// Przydaje się gdy chcemy wyświetlić wszytkie elementy tablicy bez użycia indeksu

const numbers = [65, 768, 45, 67];

// numbers[0] --> 65
// numbers[1] --> 768
// numbers[2] --> 45

for (let i = 0; i < numbers.length; i++) {
	// tu mamy dostep do indeksu - i  z tablicy
	console.log(`Petla for: ${numbers[i]}`);
}

// Alternatywa jesli nie potrzebujemy tego indeksu to petla For each - for of

for (let singleNumber of numbers) {
	console.log(`Petla FOR OF: ${singleNumber}`);
}

// jQUERY

$(document).ready(function () {
	let h2Text = 'tresc';

	console.log('NAGLOWEK H2');
	console.log($('h2'));

	//

	$('.square-hide').click(function () {
		$('h2').hide();
	});

	$('.square-show').click(function () {
		$('h2').show();
		//$('h2').html(h2Text);

		for (let i = 0; i < 100; i++) {
			let myh3 = $('<h3>Nowy element H3</h3>');
			$('#point').append(myh3);
		}
	});
});

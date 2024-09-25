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

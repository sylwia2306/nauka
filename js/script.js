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
object2.wlasciwosc1 = 'wartosc1';
object2.wlasciwosc2 = 'wartosc2';
object2.xd = 'wartosc3';

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

// KOLEKCJE W JAVA SCRIPT

// TABLICE
let addresses1 = ['Zwycięzców 6A', 'Janowska 29']; // pusta tablica adresów
let addresses2 = new Array(); // pusta tablica adresów
let addresses3 = new Array('Zwycięzców 6A', 'Janowska 29'); // nie pusta tablica adresów

console.log(`Moja tablica:  ${addresses1}`);

addresses1.push('Siedmiogrodzka 1A'); // dodaje element na koncu tablicy
console.log(`Moja tablica:  ${addresses1}`);

addresses1.unshift('Wrzosowa 1A'); // dodaje element na poczatku tablicy
console.log(`Moja tablica:  ${addresses1}`);

// addresses1.pop() // usuwa ostatnni element w tablicy
// console.log(`Moja tablica:  ${addresses1}`);

// addresses1.shift() // usuwa pierwszy element w tablicy
// console.log(`Moja tablica:  ${addresses1}`);
console.log(`Oryginalna tablica przed slice ${addresses1}`);
const myAdresses1 = addresses1.slice(1, 3); // zwraca z tablicy tylko elementy o indeksach 1 i 2  ( element o indeksie 3 nie zostaje zwrócony) - SLICE - NIEDESTURKCYJNY (pobiera elementy ale ich nie usuwa z tablicy)
console.log(`Oryginalna tablica po slice ${addresses1}`);
console.log(`Moje adresy ${myAdresses1}`);

console.log(`Oryginalna tablica przed splice ${addresses1}`);
const myAdresses2 = addresses1.splice(1, 3); // wycina z tablicy elementy o indeksach 1, 2 , 3 - SPLICE - DESTURKCYJNY (pobiera elementy oraz je usuwa z tablicy)
console.log(`Oryginalna tablica po splice ${addresses1}`);
console.log(`Moje adresy ${myAdresses2}`);

// ZBIÓR  (SET)
let namesX = new Set(); // nie przechowuje duplikatów tzn. że imie nie może się powtórzyć w zbiorze imion

namesX.add('Ania');
namesX.add('Kasia');
namesX.add('Ala');
namesX.add('ala');
namesX.add('Ala');
console.log(`Dane w zbiorze:`);
// Wypisanie danych za pomocą Array.from (zamiana Set na tablicę)
//console.log(`Dane w zbiorze: ${Array.from(namesX)}`);

// Można również użyć operatora spread (...) dla podobnego efektu
//console.log(`Dane w zbiorze: ${[...namesX]}`);

// Alternatywnie, można użyć metody forEach
namesX.forEach((name) => console.log(name));

namesX.delete('Ala');
console.log('Usunalem Ala');
namesX.forEach((name) => console.log(name));

console.log(`Czy Kasia istnieje w zbiorze? ${namesX.has('Kasia')}`); // has() zwraca true lub false

// MAPA  (MAP) - przechowuje wartości w postaci klucz wartość
console.log('****************     MAPY    ****************');
let people = new Map();
people.set(76682537816, 'Władymir Putin');
people.set('76682537816', 'Asia Putin'); // to jest zupełnie inny klucz
people.set(83725502938, 'Klaudia Putin');
people.set(32413241636, 'Nicole Putin');

console.log(`Osoba z peselem 76682537816 to ${people.get(76682537816)}`);
console.log(`Osoba z peselem "76682537816" to ${people.get('76682537816')}`);

// people.keys()   <-- zwraca wszystkie klucze z mapy
for (let key of people.keys()) {
	console.log(key);
}

// people.values()   <-- zwraca wszystkie wartości z mapy
for (let value of people.values()) {
	console.log(value);
}

// people.entries()   <-- zwraca wszystkie pary klucz-wartość
for (let entry of people.entries()) {
	console.log(entry);
}

console.log(
	`Czy istnieje osoba o peselu (kluczu) 76682537816: ${people.has(76682537816)}`
); // Zwroci true jesli tak i false jesli klucz nie isnieje

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

console.log('PĘTLA FOR - BREAK - PRZYKŁAD');
for (let i = 0; i < 5; i++) {
	if (i == 2) {
		console.log(`Niepoprawna warotść ${i}`);
		break; // przerwij pętle - wyjdź z niej
	}
	console.log(`i=${i}`);
	console.log('Kod pętli np. funkcje');
}

console.log('PĘTLA FOR - CONTINUE - PRZYKŁAD');
for (let i = 0; i < 5; i++) {
	if (i == 2) {
		console.log(`Niepoprawna warotść ${i} ale wykonaj kod dalej`);
		continue; // przerwij bierzącą iterację pętli - nie wykonuj kodu poniżej instruncji continue
	}
	console.log(`i=${i}`);
	console.log('Kod pętli np. funkcje');
}

for (let i = 0; i < numbers.length; i++) {
	// tu mamy dostep do indeksu - i  z tablicy
	console.log(`Petla for: ${numbers[i]}`);
}

// Alternatywa jesli nie potrzebujemy tego indeksu to petla For each - for of

for (let singleNumber of numbers) {
	console.log(`Petla FOR OF: ${singleNumber}`);
}

// Pętla For - In  --> tylko i wyłącznie do pracy z obiektami
let coffe = {
	milkType: 'Oat',
	sugar: false,
	wippedCream: true,
	sprinkles: false,
	coffeType: 'Arabica',
};

console.log(`Moja kawa ma mleko ${coffe.milkType}`);
for (let property in coffe) {
	// console.log(property); // milkType sugar wippedCream sprinkles coffeType
	console.log(coffe[property]); // Oat false true false Arabica
}

// CALLBACK - PRZYKŁAD + map()

const names = ['iga', 'lilia', 'ewa'];

const duzeLitery = (text) => {
	return text.toUpperCase();
};

const namesUppercase = names.map(duzeLitery);
console.log(namesUppercase);

// FUNKCJE

console.log('NAUKA - FUNKCJE');

// FUNKCJE STANDARODWE - PODLEGAJĄ HOISTINGOWI - WYNOSZENIU

function wypiszTekst(text) {
	console.log(`Wypisany tekst: ${text}`);
}

function love() {
	console.log(`Kocham Cię`);
}
love();

let text1 = 'Lol';
let text2 = 'xd';
let text3 = 123;

wypiszTekst(text1);
wypiszTekst(text2);
wypiszTekst(text3);

let wynik = add(10, 40);

function add(x, y) {
	return x + y;
}

wypiszTekst(wynik);

// FUNKCJE STRZAŁKOWE - NIE PODLEGAJĄ HOISTINGOWI - WYNOSZENIU (tzn. trzeba je zdefiniować-stworzyć przed użyciem)

const multiply = (a, b) => {
	return a * b;
};

const print = (text) => {
	console.log(text);
};

// WYRAŻENIA FUNKCYJNE - NIE PODLEGAJĄ HOISTINGOWI - WYNOSZENIU (tzn. trzeba je zdefiniować-stworzyć przed użyciem)

const expressionTestFunction = function (a, b) {
	return a + b;
};

// OPERATOR SPREAD  - trzy kropki ...   - rozkłada tablice na pojedyncze elementy

testSpread(2, 4, 8);
function testSpread(...c) {
	// c = [2,4,8]
	// ...c = [n-elements]
	console.log(c);
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

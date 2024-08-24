// zmienne ( variables )

// constant - stała (const) musi mieć przypisaną warość

const red = 'czerwony';
const green = 'zielony';

console.log('Zmienna red: ' + red);
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

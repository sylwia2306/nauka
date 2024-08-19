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


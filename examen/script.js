// start 5
let uno = true;
let dos = "2";
let tres = 3;
let cuatro = null;
let cinco;
let seis = {numero: 6};
let siete = [7];
console.log(typeof uno);
console.log(typeof dos); 
console.log(typeof tre);
console.log(typeof cuatro);
console.log(typeof cinco);
console.log(typeof seis);
console.log(typeof siete );
// end 5

//start 6
let nombreProducto, precio, direccionEnvio,país,costoEnvio;
nombreProducto='Monitor';
precio=1400;
direccionEnvio='Av 2 agosto final cambodromo';
país='Bolivia';
costoEnvio=50;
//end 6

//start 7
let libreria='React es una biblioteca Javascript de código abierto creada por Facebook';
//end 7

//start 8
console.log(libreria.length);
//end 8

//start 9
console.log(libreria.replace('React es una biblioteca','ReactNative es un framework'));
//end 9

//start 10
words=libreria.split(' ');
words.splice(0,1,words[0].toUpperCase());
words.splice(3,1,words[3].toUpperCase());
words.splice(6,3,words[6].toUpperCase(),words[7].toUpperCase(),words[8].toUpperCase());
words.splice(10,1,words[10].toUpperCase());
//convertir el array a texto
console.log(words.join(' '));
//end 10

//start 11
texto_11='TOYOTA, SUZUKI, BMW, FORD, KIA, ISUZU, AUDI';
console.log(texto_11.split(', '));
//end 11

//start 12
console.error('R'.charCodeAt());
//end 12

//start 13
console.log('HOLA MUNDO '.repeat((4)));
//end 13

//start 14
console.log("Hola estudio \"Sistema\" y estoy llevando la materia de: \n \tPROGRAMACION 1 \n \tTurno: Noche \nEn el grupo 2")
//end 14

//start 15
console.log(Math.round(Math.random()*(50-25)+25));
//end 15

//start 16
console.log(libreria[8]);
//end 16

//start 17
console.warn('JavaScript'[Math.round(Math.random()*'JavaScript'.length)]);
//end 17

//start 18
//Numero entero
console.log(parseInt(9.8));
//Numero Absoluto
console.log(Math.abs(-5));
//Cadena de texto
let number=62;
console.log(number.toString());
//Numero entero
console.log("28");
//Numero decimal
console.log(parseFloat("15.65"));
//end 18

//start 19
console.log(Math.max(4, 8, 16, 18, -52, -3, -1, 7))

console.log(Math.min(4, 8, 16, 18, -52, -3, -1, 7))

//end 19

//star 20
let num1 = 9.78
let num2 = 5.20
let num3 = 1.64
let num4 = 5.7
let num5 = 3.23

console.log(Math.round(num1))
console.log(Math.round(num2))
console.log(Math.round(num3))
console.log(Math.round(num4))
console.log(Math.round(num5))
//end 20
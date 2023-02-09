function greet() {
    console.log('Hello');
}

greet(); //invocar.

//  console.log(greet);

//función como parametro.
function logGreeting(fn) {
    fn();
}

logGreeting(greet);

//se esta pasando la función greet como un parametro e invocandola con el nombre del argumento fn.

//function expression.
let greetMe = function () {
    console.log('Hello from the function expression');
}

greetMe();

//console.log(greetMe);
//funcion con arrow -no se pone la palabra function-.
let greetMee = () => {console.log ('Hola Arrow');}
greetMee();

let saludo = (nombre, tratamiento) => {
    console.log('Hola ' + tratamiento + ' ' + nombre);
}
//invocar.
saludo('Miguel', 'Sr.');

//cuando se trata de un parametro no es necesario poner parentesis.
let cuadrado = numero => {
    return numero * numero;
}
console.log(cuadrado(6));

//es valida cuando la funcion solo tiene una sola linea y un solo parametro -se obvian () {} y return-.
let cuadradoo = numero => numero * numero;
console.log(cuadradoo(6));



//mala practica definir una variable para regresar un valor. 
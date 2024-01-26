
/*alert("Adivina un numero Secreto Juguemos");
let numeroSecreto = 12;
let numeroUsuario = prompt("Me indicas un n�mero  entre 1 y 20 por favor:");

console.log(numeroUsuario);

if (numeroUsuario == numeroSecreto) {
    alert('Acertaste el n�mero');
} else {
    alert("Equivocaste el numero");
}*/
//EJERCICIO
/*let porcentajeDescuento = 0;

    let cantidadMillas = prompt("Ingrese la cantidad de millas");

    if (cantidadMillas > 30000) {
        porcentajeDescuento = porcentajeDescuento + 20;
    } else {
        if (cantidadMillas > 5000) {
            porcentajeDescuento = porcentajeDescuento + 10;
        }
    }*/
//EJERCICIO OPERADOR LOGICO AND  EDAD VS CONDUCCION
/* let idad = 25;
let tieneLicencia = true;

// si la edad es mayor de 18 y tiene una licencia...
if (idad > 18 && tieneLicencia) {
  console.log("Puede conducir!");
} else {
  console.log("No puede conducir!");
}
*/
//EJERIDIO OPREADOR LOGICO  OR
/*// si tiene manzana o tiene banama…
if (tieneManzana|| tieneBanana) {
  console.log("Tienes frutas!");
} else {
  console.log("No tienes frutas.");
}
 */
//TEMPLATE STRING COMBINA VALOR LITERAL Y VARIABLES
/*alert("Adivina un numero Secreto Juguemos");
let numeroSecreto = 12;
let numeroUsuario = prompt("Me indicas un n�mero  entre 1 y 20 por favor:");

console.log(numeroUsuario);

if (numeroUsuario == numeroSecreto) {
    alert(`Acertaste el n�mero es: ${numeroUsuario}`);//lanza valor almacenado en la vaeiable
} else {
    // Agrega un console.log para verificar el valor de "numeroSecreto" cuando el jugador se equivoca
    console.log('Valor del número secreto:', numeroSecreto);
    alert('El número secreto era ' + numeroSecreto);
}*/
//DETERMINAR  IS NUMERO secreto ES MAYOR O MENOR
/*alert("Adivina un numero Secreto Juguemos");
let numeroSecreto = 12;
let numeroUsuario = prompt("Me indicas un n�mero  entre 1 y 20 por favor:");

console.log(numeroUsuario);

if (numeroUsuario == numeroSecreto) {
    alert('Acertaste el n�mero');
} else {
    if (numeroUsuario > numeroSecreto) {
        alert('El numero secreto es menor');
    } else {
        alert('El numero secreto es mayor');
    }
    //alert("Equivocaste el numero");
}*/
//LOOPS Y BUCLES  AUMENTAR INTENTOS DEL JUEGO
/*alert("Adivina un numero Secreto Juguemos");
let numeroSecreto = 12;
let numeroUsuario = 0;
while (numeroUsuario != numeroSecreto) {
    numeroUsuario = prompt("Me indicas un n�mero  entre 1 y 20 por favor:");

    console.log(numeroUsuario);

    if (numeroUsuario == numeroSecreto) {
        alert(`Acertaste el n�mero es: ${numeroUsuario}`);//lanza valor almacenado en la vaeiable
    } else {
       if (numeroUsuario > numeroSecreto) {
        alert('El numero secreto es menor');
       } else {
         alert('El numero secreto es mayor');
       }
    }
}*/
//CONTADOR DE INTENTOS
/*alert("Adivina un numero Secreto Juguemos");
let numeroSecreto = 12;
let numeroUsuario = 0;
let intentos = 1;
let palabraVeces = 'vez';
while (numeroUsuario != numeroSecreto) {
    numeroUsuario = prompt("Me indicas un n�mero  entre 1 y 20 por favor:");

    console.log(numeroUsuario);

    if (numeroUsuario == numeroSecreto) {
        alert(`Acertaste el n�mero es: ${numeroUsuario}. Lo hiciste en ${intentos} ${palabraVeces}`);//lanza valor almacenado en la vaeiable
    } else {
       if (numeroUsuario > numeroSecreto) {
        alert('El numero secreto es menor');
       } else {
         alert('El numero secreto es mayor');
       }
        intentos = intentos + 1;//incrementa contador cuando no acierta
        palabraVeces = 'veces';
    }
}*/
//CONTADOR MAXIMO  DE INTENTOS
/*alert("Adivina un numero Secreto Juguemos");
let numeroSecreto = 12;
let numeroUsuario = 0;
let intentos = 1;
let palabraVeces = 'vez';
while (numeroUsuario != numeroSecreto) {
    numeroUsuario = prompt("Me indicas un n�mero  entre 1 y 20 por favor:");

    console.log(numeroUsuario);

    if (numeroUsuario == numeroSecreto) {
        alert(`Acertaste el n�mero es: ${numeroUsuario}. Lo hiciste en ${intentos} ${palabraVeces}`);//lanza valor almacenado en la vaeiable
    } else {
       if (numeroUsuario > numeroSecreto) {
        alert('El numero secreto es menor');
       } else {
         alert('El numero secreto es mayor');
       }
        intentos = intentos + 1;//incrementa contador cuando no acierta
        palabraVeces = 'veces';
        if (intentos > 5) {
            alert('Llegaste al numero maximo de intentos');
            break;
        }
    }
}*/
//CONTADOR DE INTENTOS MAXIMOS INTENTOS
/*alert("Adivina un numero Secreto Juguemos");
let numeroSecreto = 12;
let numeroUsuario = 0;
let intentos = 1;
let palabraVeces = 'vez';
let maxIntentos = 5;
while (numeroUsuario != numeroSecreto) {
    numeroUsuario = prompt("Me indicas un n�mero  entre 1 y 20 por favor:");

    console.log(numeroUsuario);

    if (numeroUsuario == numeroSecreto) {
        alert(`Acertaste el n�mero es: ${numeroUsuario}. Lo hiciste en ${intentos} ${palabraVeces}`);//lanza valor almacenado en la vaeiable
    } else {
       if (numeroUsuario > numeroSecreto) {
        alert('El numero secreto es menor');
       } else {
         alert('El numero secreto es mayor');
       }
        //intentos = intentos + 1;//incrementa contador cuando no acierta
        //intentos += 1;
        intentos++;
        palabraVeces = 'veces';
        if (intentos > maxIntentos) {
            alert(`Llegaste al numero maximo de ${maxIntentos}intentos`);
            break;
        }
    }
}*/
//Operador Ternario CONTADOR DE INTENTOS MAXIMOS INTENTOS
/*alert("Adivina un numero Secreto Juguemos");
let numeroSecreto = 12;
let numeroUsuario = 0;
let intentos = 1;
//let palabraVeces = 'vez';
let maxIntentos = 5;
while (numeroUsuario != numeroSecreto) {
    numeroUsuario = prompt("Me indicas un n�mero  entre 1 y 20 por favor:");

    console.log(numeroUsuario);

    if (numeroUsuario == numeroSecreto) {
        //? funciona como if  y dos puntos : sera el else
        alert(`Acertaste el n�mero es: ${numeroUsuario}. Lo hiciste en ${intentos} ${intentos == 1 ? 'vez' : 'veces'}`);//lanza valor almacenado en la vaeiable
    } else {
       if (numeroUsuario > numeroSecreto) {
        alert('El numero secreto es menor');
       } else {
         alert('El numero secreto es mayor');
       }
        //intentos = intentos + 1;//incrementa contador cuando no acierta
        //intentos += 1;
        intentos++;
        //palabraVeces = 'veces';
        if (intentos > maxIntentos) {
            alert(`Llegaste al numero maximo de ${maxIntentos}intentos`);
            break;
        }
    }
}*/
//NUMERO ALEATORIO POR EL COMPUTADOR y ripo de dato
//Math.random(); arroja numero entre 0 y 1
//Math.random()*10; arroja numero decimal entre 0 y10 no incluye 10
//Math.floor(Math.random()*10); arroja entero 
//quita decimales lanzando el entero por debajo sin incluir 10
//Math.floor(Math.random()*10)+1; arroja entero incluido 10 evitando el 0

alert("Adivina un numero Secreto Juguemos");
//Numero seudo aleatorio incluido
let numeroSecreto = Math.floor(Math.random()*10)+1;
let numeroUsuario = 0;
let intentos = 1;
//let palabraVeces = 'vez';
let maxIntentos = 5;

console.log(numeroSecreto);//la consola me arroja numero secreto
while (numeroUsuario != numeroSecreto) {
    //convierte el String a un int
    numeroUsuario = parseInt(prompt("Me indicas un n�mero  entre 1 y 20 por favor:"));

    console.log(typeof(numeroUsuario));//dice cual es el tipo de dato

    if (numeroUsuario == numeroSecreto) {
        //? funciona como if  y dos puntos : sera el else
        alert(`Acertaste el n�mero es: ${numeroUsuario}. Lo hiciste en ${intentos} ${intentos == 1 ? 'vez' : 'veces'}`);//lanza valor almacenado en la vaeiable
    } else {
       if (numeroUsuario > numeroSecreto) {
        alert('El numero secreto es menor');
       } else {
         alert('El numero secreto es mayor');
       }
        //intentos = intentos + 1;//incrementa contador cuando no acierta
        //intentos += 1;
        intentos++;
        //palabraVeces = 'veces';
        if (intentos > maxIntentos) {
            alert(`Llegaste al numero maximo de ${maxIntentos}intentos`);
            break;
        }
    }
}
/* Utilizando un bucle while con la instrucción break cuando el cliente
 adivine el número.

let numeroSecreto = Math.floor(Math.random() * 10);
let intentos = 0;
while (intentos < 5) {
  let intento = parseInt(prompt("Ingrese un número del 0 al 9:"));
  intentos++;
  if (intento == numeroSecreto) {
    alert(`¡Eso es! Descubriste el número secreto ${numeroSecreto}`);
    break;
  }
}

Este código implementa correctamente un límite de 5 intentos y también
 utiliza la instrucción break cuando se adivina el número secreto.*/

 /*Usando un bucle for junto con la instrucción break cuando 
 el cliente adivine el número o cuando el número de intentos llegue a 5.

let numeroSecreto = Math.floor(Math.random() * 10);
for (let intentos = 0; intentos < 5; intentos++) {
  let intento = parseInt(prompt("Ingrese un número del 0 al 9:"));
  if (intento == numeroSecreto) {
    alert(`¡Eso es! Descubriste el número secreto ${numeroSecreto}`);
    break;
  }
}

Este código implementa correctamente un límite de 5 intentos. 
Utiliza un bucle for y finaliza el bucle cuando se adivina 
el número secreto o cuando se alcanzan 5 intentos.*/ 
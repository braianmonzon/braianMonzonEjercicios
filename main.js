//1

let nume1 = prompt("Ingresa el primer numero:2")
let nume2 = prompt("Ingresa el segundo numero:1")

if (nume1 > nume2) {
  console.log(`El numero ${nume1} es mayor que ${nume2}`)
} else {
  console.log(`El numero ${nume1} no es mayor que ${nume2}`)
}

//2

let num1 = prompt("Ingresa el primer numero:44")
let num2 = prompt("Ingresa el segundo numero:44")

if (num1 === num2) {
  console.log(`Los numeros ${num1} y ${num2} son iguales`)
} else {
  console.log(`Los numeros ${num1} y ${num2} son diferentes`)
}

//3
let numer1 = prompt("Ingresa el primer numero:5")
let numer2 = prompt("Ingresa el segundo numero:5")

if (numer1 > numer2) {
  console.log(`El numero ${numer1} es el mas grande`)
} else if (numer1 < numer2) {
  console.log(`El numero ${numer2} es el mas grande`)
} else {
  console.log(`Los numeros ${numer1} y ${numer2} son iguales`)
}

//4

let sub1 = prompt("Ingresa el primer numero:")
let sub2 = prompt("Ingresa el segundo numero:")
let sub3 = prompt("Ingresa el tercer numero:")

let minNum = sub1;

if (sub2 < minNum) {
  minNum = sub2;
}

if (sub3 < minNum) {
  minNum = sub3;
}

console.log(`El numero mas pequeño de los tres es: ${minNum}`)

//5

let persona1 = {
    nombre: "Braian",
    edad: 30,
    altura: 175
  };
  
  let persona2 = {
    nombre: "Ana",
    edad: 25,
    altura: 188
  };
  
// Determinar la persona más alta
  let tallestPersona
  if (persona1.altura > persona2.altura) {
    tallestPersona = persona1
  } else {
    tallestPersona = persona2
  }
  console.log(`La persona mas alta es ${tallestPersona.nombre} con una altura de ${tallestPersona.altura} cm.`)
  
// Determinar la persona de mayor edad
  let mayorPersona
  if (persona1.edad > persona2.edad) {
    mayorPersona = persona1
  } else {
    mayorPersona = persona2
  }
  console.log(`La persona de mayor edad es ${mayorPersona.nombre} con ${mayorPersona.edad} años.`)

//6

//ingrese su información
let nombres = prompt("Ingresa tu nombre:")
let edad = prompt("Ingresa tu edad:")
let altura = prompt("Ingresa tu altura en cm:")
let vision = prompt("Ingresa tu vision (de 0 a 10):")

// Verificar si cumple con los requisitos para conducir
let estaCapacitado = edad >= 18 && altura >= 150 && vision >= 8;

// Imprimir el resultado
if (estaCapacitado) {
  console.log(`¡Felicidades, ${nombres}! Estas capacitado para conducir.`)
} else {
  console.log(`Lo siento, ${nombres}, no estas capacitado para conducir.`)
}

//7

// Pedir al usuario que ingrese su información
let nombre = prompt("Ingresa tu nombre:")
let pase = prompt("¿Tienes un pase VIP? (si/no)")
let tieneEntrada = prompt("¿Tienes una entrada? (si/no)")

// Determinar si la persona tiene acceso libre
const tieneMismoNombre = nombre === "Braian"
const tienePaseVip = pase === "si"

// Determinar si la persona puede utilizar su entrada
const puedeUsarEntrada = tieneEntrada === "si" || tieneEntrada === "s" || tieneEntrada === "true"

// Mostrar mensaje de bienvenida si tiene acceso libre o puede utilizar su entrada
if (tieneMismoNombre || tienePaseVip) {
  console.log("¡Bienvenido/a!")
} else if (puedeUsarEntrada) {
  console.log("¡Bienvenido/a! Disfruta de tu entrada.")
} else {
// Preguntar si desea comprar una entrada
  const quiereComprar = prompt("¿Quieres comprar una entrada? (si/no)")
  if (quiereComprar === "si") {
    const dineroDisponible = prompt("¿Cuánto dinero tienes?")
    if (dineroDisponible >= 1000) {
      console.log("¡Gracias por tu compra! Disfruta de tu entrada.")
    } else {
      console.log("Lo siento, no tienes suficiente dinero para comprar una entrada.")
    }
  } else {
    console.log("¡Hasta pronto!")
  }
}

//8

// Establecer el número secreto entre 1 y 10
const numeroIncognita = "5"

// Primer intento
let numeroIngresado = prompt("Intento 1: Ingresa un numero del 1 al 10:")

if (numeroIngresado === numeroIncognita) {
  console.log("¡Ganaste, has adivinado el numero!")
} else if (numeroIngresado < numeroIncognita) {
  console.log("El numero ingresado es menor, vuelve a intentarlo.")

// Segundo intento
  numeroIngresado = prompt("Intento 2: Ingresa un numero del 1 al 10:")

  if (numeroIngresado === numeroIncognita) {
    console.log("¡Ganaste, has adivinado el numero!")
  } else if (numeroIngresado < numeroIncognita) {
    console.log("El numero ingresado es menor, vuelve a intentarlo.")

// Tercer intento
    numeroIngresado = prompt("Intento 3: Ingresa un numero del 1 al 10:")

    if (numeroIngresado === numeroIncognita) {
      console.log("¡Ganaste, has adivinado el numero!")
    } else {
      console.log(`Lo siento, has agotado tus intentos. El numero secreto era ${numeroIncognita}.`)
    }
  } else {
    console.log("El numero ingresado es mayor, vuelve a intentarlo.")

// Tercer intento
    numeroIngresado = prompt("Intento 3: Ingresa un numero del 1 al 10:")

    if (numeroIngresado === numeroIncognita) {
      console.log("¡Ganaste, has adivinado el numero!")
    } else {
      console.log(`Lo siento, has agotado tus intentos. El numero secreto era ${numeroIncognita}.`)
    }
  }
} else {
  console.log("El numero ingresado es mayor, vuelve a intentarlo.")

// Segundo intento
  numeroIngresado = prompt("Intento 2: Ingresa un numero del 1 al 10:")

  if (numeroIngresado === numeroIncognita) {
    console.log("¡Ganaste, has adivinado el numero!")
  } else if (numeroIngresado < numeroIncognita) {
    console.log("El numero ingresado es menor, vuelve a intentarlo.")

// Tercer intento
    numeroIngresado = prompt("Intento 3: Ingresa un numero del 1 al 10:")

    if (numeroIngresado === numeroIncognita) {
      console.log("¡Ganaste, has adivinado el numero!")
    } else {
      console.log(`Lo siento, has agotado tus intentos. El numero secreto era ${numeroIncognita}.`)
    }
  } else {
    console.log("El numero ingresado es mayor, vuelve a intentarlo.")

// Tercer intento
    numeroIngresado = prompt("Intento 3: Ingresa un numero del 1 al 10:")

    if (numeroIngresado === numeroIncognita) {
      console.log("¡Ganaste, has adivinado el numero!")
    } else {
      console.log(`Lo siento, has agotado tus intentos. El numero secreto era ${numeroIncognita}.`)
    }
  }
}

//9

// Solicitar la edad
const edaD = prompt("Ingresa tu edad:")

// Clasificar la edad
if (edaD >= 0 && edaD <= 12) {
  console.log("Eres un infante (0 a 12 años).")
} else if (edaD >= 13 && edaD <= 18) {
  console.log("Eres un adolescente (13 a 18 años).")
} else if (edaD >= 19 && edaD <= 45) {
  console.log("Eres un adulto (19 a 45 años).")
} else if (edaD > 45) {
  console.log("Eres un anciano (más de 45 años).")
} else if (edaD > 100) {
  console.log("¿En realidad tienes " + edaD + " años? Eso es bastante avanzado.")
} else {
  console.log("La edad ingresada no es valida. Por favor, ingresa un numero entero positivo.")
}

//10

// jugadas de los dos jugadores
const jugada1 = prompt("Jugador 1, elige: 'piedra', 'papel' o 'tijera'")
const jugada2 = prompt("Jugador 2, elige: 'piedra', 'papel' o 'tijera'")

// determinar el ganador
if (jugada1 === jugada2) {
  console.log("¡Es un empate!")
} else if (
  (jugada1 === "piedra" && jugada2 === "tijera") ||
  (jugada1 === "papel" && jugada2 === "piedra") ||
  (jugada1 === "tijera" && jugada2 === "papel")
) {
  console.log("¡El Jugador 1 ha ganado!")
} else if (
  (jugada2 === "piedra" && jugada1 === "tijera") ||
  (jugada2 === "papel" && jugada1 === "piedra") ||
  (jugada2 === "tijera" && jugada1 === "papel")
) {
  console.log("¡El Jugador 2 ha ganado!")
} else {
  console.log("¡Uno de los jugadores ha hecho trampa!")
}

//11

// ingrese un color
const color = prompt("Ingresa un color:")

// switch para mostrar el mensaje correspondiente
switch (color) {
  case "blanco":
  case "negro":
    console.log("Falta de color")
    break;
  case "verde":
    console.log("El color de la naturaleza")
    break;
  case "azul":
    console.log("El color del agua")
    break;
  case "amarillo":
    console.log("El color del sol")
    break;
  case "rojo":
    console.log("El color del fuego")
    break;
  case "marrón":
    console.log("El color de la tierra")
    break;
  default:
    console.log("Excelente eleccion, no lo teniamos pensado")
    break;
}

//12

// ingrese los dos valores numericos
const numero1 = prompt("Ingresa el primer numero:")
const numero2 = prompt("Ingresa el segundo numero:")

// ingrese la operacion
const operacion = prompt("Ingresa la operacion (+, -, *, /):")

// mostrar el resultado o un mensaje de error
switch (operacion) {
  case "+":
    console.log(`El resultado de la suma es: ${numero1 + numero2}`)
    break;
  case "-":
    console.log(`El resultado de la resta es: ${numero1 - numero2}`)
    break;
  case "*":
    console.log(`El resultado de la multiplicacion es: ${numero1 * numero2}`)
    break;
  case "/":
    if (numero2 === 0) {
      console.log("ERROR: No se puede dividir entre 0.")
    } else {
      console.log(`El resultado de la division es: ${numero1 / numero2}`)
    }
    break;
  default:
    console.log("ERROR: Operación invalida.")
    break;
} 

//13

// ingrese los datos de su documento nacional de identidad
const nombrE = prompt("Ingresa tu nombre:")
const apellido = prompt("Ingresa tu apellido:")
const dni = prompt("Ingresa tu número de DNI:")
const fechaNacimiento = prompt("Ingresa tu fecha de nacimiento (DD/MM/YYYY):")
const lugarNacimiento = prompt("Ingresa tu lugar de nacimiento:")
const domicilio = prompt("Ingresa tu domicilio:")

// preguntar si están correctos
console.log("Datos ingresados:")
console.log(`Nombre: ${nombrE}`)
console.log(`Apellido: ${apellido}`)
console.log(`DNI: ${dni}`)
console.log(`Fecha de nacimiento: ${fechaNacimiento}`)
console.log(`Lugar de nacimiento: ${lugarNacimiento}`)
console.log(`Domicilio: ${domicilio}`)

const confirmacion = prompt("¿Los datos son correctos? (si/no)")

// Crear un objeto "dni" si los datos son correctos, o mostrar un mensaje de error si no
if (confirmacion === "si") {
  const dniObj = {
    nombrE: nombrE,
    apellido: apellido,
    dni: dni,
    fechaNacimiento: fechaNacimiento,
    lugarNacimiento: lugarNacimiento,
    domicilio: domicilio
  };

  console.log("Registro exitoso:")
  console.table(dniObj)
} else {
  console.log("Vuelva a intentarlo en 1 mes.")
}

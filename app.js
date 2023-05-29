//ejercicio 1
//1- Escribir un programa que solicite la edad y si es mayor de 18 años mostrar un mensaje que ya puede conducir, si la //edad ingresada no es un número válido indicarlo en un mensaje.

//let edad = prompt("ingresar edad")

//if (edad>=18) {
//    document.write("puede conducir.")
//} else if(edad<18){
//    document.write("no puede conducir.")    
//}
//else{
//    document.write("edad ingresada no es numero valido.")

//}

/*ejercicio 2
 Escribir un programa que solicite una nota (número) de 0  a 10. Luego mostrar la calificación en un alert.

let nota = parseInt(prompt("ingresar nota"))

if (nota<0 || nota>10){
    alert("numero erroneo");
} 
else if(isNaN(nota)){
    alert("numero invalido");
 }

while(nota<0 || nota>10 || isNaN(nota)){
    nota = parseInt(prompt("ingresar nota valida(o a ////10)"));
    if(nota === null){
        break;
/   }
}
else if(nota<0 || nota>10){
    alert("numero erroneo");
}
else if(isNaN(nota)){
   alert("numero invalido");
}
 
if(nota>=0 && nota<=2){
    alert("muy deficiente");
}
else if(nota>=3 && nota<=4){
    alert("insuficiente");
}

else if(nota>=5 && nota<=6){
 alert("suficiente");
}

else if(nota == 7){
   alert("bien");
}
else if(nota>=8 && nota<=9){
  alert("notable");
}

else if(nota === 10){
  alert("sobresaliente");
}*/

//ejercicio 3
// Realiza un script que pida cadenas de texto  hasta que se pulse “cancelar”. Al salir con “cancelar” deben mostrarse /todas las cadenas concatenadas con un guión -.

/*let cadena = ""
let cadenaConcatenada = ""
let i = 0

do{
    cadena = prompt("Ingresar cadena de texto");

    if(i === 0 && cadena != null){
        cadenaConcatenada = cadena;
    }
    else if(cadena != null){
        cadenaConcatenada = cadenaConcatenada + " - " + cadena;
    }

    i++;

}while(confirm("¿Desea ingresar otra cadena de texto?") == true);

if(cadena == null){
    document.write("No se ha ingresado ninguna cadena.");
}
else{
    document.write("El resultado de las cadenas concatenadas es: " + cadenaConcatenada);
} */

// ejercicio 4
 //Realiza un script que pida números hasta que se pulse “cancelar”. Si no es un número deberá indicarse con un «alert» y seguir pidiendo números. Al salir con “cancelar” deberá indicarse la suma total de los números introducidos.

/*let sumaNumeros = 0
let numero = 0

do{
    numero = prompt("Ingresar número para la suma");

    if(numero != null){

        numero = parseInt(numero);

        while(isNaN(numero)){
            alert("NO se ingresó un número.\Por favor, ingresar número para la suma.");
            numero = parseInt(prompt("Ingresar número para la suma"));
        }

        sumaNumeros = sumaNumeros + numero;
    }

}while(numero != null);

document.write("La suma de los números ingresados es = " + sumaNumeros)*/

// ejercicio 5
//Realizar una página con un script que calcule el valor de la letra de un número de DNI (Documento nacional de identidad).

/*let dni = 0
let resto = 0
const letras = ["T", "R", "W", "A", "G", "M", "Y", "F", "P", "D", "X", "B", "N", "J", "Z", "S", "Q", "V", "H", "L", "C", "K", "E"];

do{
    dni = prompt("Ingresar número de DNI");

    if(dni != null){

        dni = parseInt(dni);

        while(dni<0 || dni>99999999 || (isNaN(dni))){
            if(isNaN(dni)){
                alert("Se solicita ingresar un DNI. Por favor, ingrese DNI nuevamente.");
            }
            else{
                alert("Número de DNI inválido. Por favor, ingrese DNI nuevamente.");
            }

            dni = prompt("Ingresar número de DNI");
            dni = parseInt(dni);
        }

        resto = dni % 23;

        alert("DNI: " + dni + " - " + letras[resto]);
    }


}while(dni != null)*/

// ejercicio 6
/* Realiza un script que escriba una pirámide del 1 al 30 de la siguiente forma :

1
22
333
4444
55555
666666*/

/*for(let i=1; i<=30; i++){
  for(let j=0; j<i; j++){
      document.write(i);
  }
  document.write("<br>");
}*/

//ejercicio 7
// Haz un script que escriba una pirámide inversa de los números del 1 al número que indique el usuario (no mayor de 50)  de la siguiente forma : (suponiendo que indica 30).

/*let numero = parseInt(prompt("Ingresar número menor de 50"))

if(numero != null && !isNaN(numero)){

    while(numero>50 || (isNaN(numero))){
        if(isNaN(numero)){
            alert("Se solicita ingresar un número. Por favor, ingresar un número." )
        }
        else{
            alert("El número ingresado debe ser menor a 50. Por favor, ingresar otro número.");
        }

        numero = parseInt(prompt("Ingresar número menor de 50"));
    }

    for(let i=numero; i>0; i--){
        for(let j=0; j<i; j++){
            document.write(i);
        }
        document.write("<br>");
    }

}*/

//ejercicio 8
//Crea script para generar pirámide siguiente con los números del 1 al número que indique el usuario (no mayor de 50) 

//1
//12
//123
//1234
//12345
//123456

/*let numero = parseInt(prompt("Ingresar número menor de 50"))

if(numero != null && !isNaN(numero)){

    while(numero>50 || (isNaN(numero))){
        if(isNaN(numero)){
            alert("Se solicita ingresar un número. Por favor, ingresar un número." )
        }
        else{
            alert("El número ingresado debe ser menor a 50. Por favor, ingresar otro número.");
        }

        numero = parseInt(prompt("Ingresar número menor de 50"));
    }

    for(let i=1; i<=numero; i++){
        for(let j=0; j<i; j++){
            document.write(j+1);
        }
        document.write("<br>");
    }

}*/


//ejercicio 9
//Crea un script que escriba los números del 1 al 500, que indique cuáles son múltiplos de 4 y de 9 y que cada 5 líneas muestre una línea horizontal.

/*for(let i=1; i<=500; i++){
  document.write(i);

  if(i % 4 === 0){
      document.write(" (Múltiplo de 4)");
  }
  else if(i % 9 === 0){
      document.write(" (Múltiplo de 9)");
  }
  else if(i % 5 === 0){
      document.write("<br><hr>");
  }

  document.write("<br>");

}*/

// ejercicio 10
//Realiza un script que pida número de filas y columnas y escriba una tabla. Dentro de cada una de las celdas deberá escribirse un número consecutivo en orden descendente. Si, por ejemplo, la tabla es de 7×5 los números irán del 35 al 1.

/*let filas = parseInt(prompt("Ingresar número de filas"));
let columnas = parseInt(prompt("Ingresar número de columnas"));
let multiplicacion = filas * columnas;

for(let i=0; i<filas; i++){
    for(let j=0 ; j<columnas; j++){
        document.write(multiplicacion);
        document.write("&nbsp");
        multiplicacion--;
        
    }
    document.write("<br>");
}*/

//ejercicio 11
//Realiza un script que pida por teclado 3 edades y 3 nombres e indique el nombre del mayor. *


/*let nombres = []
let edades = []
let edadMayor = 0
let lugar = 0

for(i=0; i<3; i++){
    nombres[i] = prompt("Ingresar " + (i+1) + "º nombre");
    edades[i] = prompt("Ingresar " + (i+1) + "º nombre");
}

edadMayor = edades[0];

for(i=0; i<3; i++){
    if(edades[i] > edadMayor){
        edadMayor = edades[i];
        lugar = i;
    }
}

document.write("El mayor de los 3 es " + nombres[lugar] + " con " + edades[lugar] + " años."); */

//ejercicio 12
//Realiza un script que genere un número aleatorio entre 1 y 99

/*function aleatorio(){
  let numeroDado = Math.floor(Math.random() * 99) + 1;

  return numeroDado;
}

let numero = aleatorio()

document.write("Número aleatorio = " + numero);*/

// ejercicio 13
//Realiza un script que pida un texto y lo muestre en mayúsculas.

/*let texto = prompt("Ingresar texto");

document.write(texto.toUpperCase())*/

//ejercicio 14
//Realiza un script que pida una cadena de texto y lo muestre poniendo el signo – entre cada carácter sin usar el método replace. Por ejemplo, si tecleo “hola qué tal”, deberá salir “h-o-l-a- -q-u-e- -t-a-l”.

/*let texto = prompt("Ingresar texto")

for(let i=0; i<(texto.length); i++){
    if(i === (texto.length)-1){
        document.write(texto[i]);
    }
    else{
        document.write(texto[i] + "-");
    }
    
}*/

//ejercicio 15
//Realiza un script que cuente el número de vocales que tiene un texto.

/*let contador = 0;
let texto = prompt("Ingresar texto")

for(let i=0; i<(texto.length); i++){
    if(texto[i] === 'a' || texto[i] === 'e' || texto[i] === 'i' || texto[i] === 'o' || texto[i] === 'u'){
        contador++;
    }
}

document.write("El texto '" + texto + "' tiene " + contador + " vocales.")*/

// ejercicio 16
//Realiza un script que pida una cadena de texto y la devuelva al revés. Es decir, si tecleo “hola que tal” deberá mostrar “lat euq aloh”.

/*let texto = prompt("Ingresar texto")

for(let i=(texto.length)-1; i>=0; i--){
    document.write(texto[i]);
}*/

//ejercicio 17
//Realiza un script que muestre la posición de la primera vocal de un texto introducido por teclado.

/*let texto = prompt("Ingresar texto")

for(let i=0; i<(texto.length); i++){
    if(texto[i] === 'a' || texto[i] === 'e' || texto[i] === 'i' || texto[i] === 'o' || texto[i] === 'u'){
        document.write("La vocal '" + texto[i] + "' está en la posición " + i);

        break;
    }
} */

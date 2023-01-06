## Respuestas al Test de JavaScript

Recuerda que estas respuestas (o al  menos la mayoría) NO SON ABSOLUTAS. Es completamente válido (en la mayoría de casos) si tienes otras respuestas. Recuerda que podemos discutirlo en la sección de comentarios del curso. :D


## Variables y operaciones

### 1️⃣ Responde las siguientes preguntas en la sección de comentarios:

- ¿Qué es una variable y para qué sirve?
Es un espacio reservado en memoria y sirve para realizar distintas operaciones 
(logicas,matematicas,condicionales) que son necesarias para el desarrollo de nuestro proyecto.

- ¿Cuál es la diferencia entre declarar e inicializar una variable?
Declarar una variable es crearla : ej var x;

Inicializar una variable es crearla y asignarle un valor: ej var x=7;

- ¿Cuál es la diferencia entre sumar números y concatenar strings?
Sumar numeros es realizar una adicion con ellos ej : 7+3 =10

Concatenar Strings es unir dos cadenas de texto. ej : "Luis " + "Alberto" = "Luis Alberto"


- ¿Cuál operador me permite sumar o concatenar?
El operador "+"

### 2️⃣ Determina el nombre y tipo de dato para almacenar en variables la siguiente información:

- Nombre: Name:String
- Apellido: Apellido:String
- Nombre de usuario en Platzi: User:String
- Edad: Edad:Int
- Correo electrónico: Email:String
- Mayor de edad Adulto:Boolean
- Dinero ahorrado Saldo:Int
- Deudas Deudas:Int

### 3️⃣ Traduce a código JavaScript las variables del ejemplo anterior y deja tu código en los comentarios.

var Name ;
var Apellido;
var User;
var Edad;
var Email;
var Adulto;
var Ahorro;
var Deudas;



### 4️⃣ Calcula e imprime las siguientes variables a partir de las variables del ejemplo anterior:

- Nombre completo (nombre y apellido)
- Dinero real (dinero ahorrado menos deudas)

var Nombre_Completo= Name + Apellido;
Dinero Real= Ahorro - Deudas;

## Funciones

### 1️⃣ Responde las siguientes preguntas en la sección de comentarios:

- ¿Qué es una función?
La funciones nos permiten encapsular (guardar) bloques de codigo para reutilizarlos y ejecutarlos en el futuro.

- ¿Cuándo me sirve usar una función en mi código?
Nos sirve cuando tenemos variables o bloques de codigo muy parecidos (con cambios que podrian ser parametros y argumentos ) que podemos encapsular para reutilizar mas de una vez en el futuro

Tambien nos sirve para mejorar la legibilidad de nuestro codigo.


- ¿Cuál es la diferencia entre parámetros y argumentos de una función?
Los parametros son aquella lista de variables que la funcion requiere para su ejecucion, mientras que los argumentos son aquellos valores que nosotros ingresamos al invocar la funcion.

 Las funciones Reciben Parametros cuando las creamos. Y les enviamos argumentos cuando las ejecutamos.

Ejemplo :

function suma (a,b){                Parametros: a + b
    resultado = a+b;                    
    return resultado
}

suma (6,5);                         Argumentos: 6 , 5


### 2️⃣ Convierte el siguiente código en una función, pero, cambiando cuando sea necesario las variables constantes por parámetros y argumentos en una función:

```
const name = "Juan David";
const lastname = "Castro Gallego";
const completeName = name + lastname;
const nickname = "juandc";

console.log("Mi nombre es " + completeName + ", pero prefiero que me digas " + nickname + ".");
```

function Saludo (name,lastname,nickname){
const completeName = name + ' ' + lastname;
console.log("Mi nombre es " + completeName + ", pero prefiero que me digas " + nickname + ".");

}


## Condicionales

### 1️⃣ Responde las siguientes preguntas en la sección de comentarios:

- ¿Qué es un condicional?
Es una condicion que dependiendo si es verdadera o falsa ejecuta determinada secuencia de codigo.

'''''
Son la forma en que ejecutamos un bloque de codigo dependiendo de alguna condicion o validaciom.
''''

- ¿Qué tipos de condicionales existen en JavaScript y cuáles son sus diferencias?
Simples, Dobles, Multiples

´´´´
IF (else y else if ), Switch 
El condicional IF (Con else y else if ) nos permite hacer validaciones completamente distintas  si asi lo queremos) en cada validacion o condicional. En cambio, en el switch todos los cases se comparan con la misma variable o condicion que definimos en el switch




- ¿Puedo combinar funciones y condicionales?
Si
 
 ''''
Si. Las funciones pueden encapsular cualquier bloque de codigo, incluyendo condicionales.

### 2️⃣ Replica el comportamiento del siguiente código que usa la sentencia switch utilizando if, else y else if:

```
const tipoDeSuscripcion = "Basic";

switch (tipoDeSuscripcion) {
   case "Free":
       console.log("Solo puedes tomar los cursos gratis");
       break;
   case "Basic":
       console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
       break;
   case "Expert":
       console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
       break;
   case "ExpertPlus":
       console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");
       break;
}



```
let tipoDeSuscripcion = "Basic";

if ( tipoDeSuscripcion === "Free"){
       console.log("Solo puedes tomar los cursos gratis");

}

    else if (tipoDeSuscripcion === "Basic"){
       console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");

}

    else if (tipoDeSuscripcion === "Expert"){
       console.log("Puedes tomar casi todos los cursos de Platzi durante un año");

    }

     else  {
        console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");


    }

    /* Operador Ternario */





### 3️⃣ Replica el comportamiento de tu condicional anterior con if, else y else if, pero ahora solo con if (sin else ni else if).

let tipoDeSuscripcion = "Basic";

if ( tipoDeSuscripcion === "Free"){
       console.log("Solo puedes tomar los cursos gratis");

}

 if (tipoDeSuscripcion === "Basic"){
       console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");

}

    if (tipoDeSuscripcion === "Expert"){
       console.log("Puedes tomar casi todos los cursos de Platzi durante un año");

    }

     if (tipoDeSuscripcion === "ExpertPlus") {
        console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");


    }



> 💡 Bonus: si ya eres una experta o experto en el lenguaje, te desafío a comentar cómo replicar este comportamiento con arrays o con objetos y un solo condicional. 😏

let TiposSuscripcion = ["Free", "Basic", "Expert", "ExpertPlus"];
let Mensajes =  ["Solo puedes tomar los cursos gratis", "Puedes tomar casi todos los cursos de Platzi durante un mes", "Puedes tomar casi todos los cursos de Platzi durante un año", "Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año"]; 
let rand = Math.floor(Math.random()*TiposSuscripcion.length);
    let tipoDeSuscripcion = TiposSuscripcion[rand]; 
    if (rand>=0){
        console.log(Mensajes[rand]);
    }

````````````````JS
let TiposSuscripcion = ["Free", "Basic", "Expert", "ExpertPlus"];

function ValidarTipoDeSuscripcion (TipoSuscripcion){
let Mensajes =  ["Solo puedes tomar los cursos gratis", "Puedes tomar casi todos los cursos de Platzi durante un mes", "Puedes tomar casi todos los cursos de Platzi durante un año", "Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año"]; 
let rand = Math.floor(Math.random()*TiposSuscripcion.length);
    let tipoDeSuscripcion = TiposSuscripcion[rand]; 
    if (rand>=0){
        console.log(Mensajes[rand]);
    }
}



````````````````


````````````````JS
let TiposSuscripcion = ["Free", "Basic", "Expert", "ExpertPlus"];

function ValidarTipoDeSuscripcion (TipoSuscripcion){
let Mensajes =  ["Solo puedes tomar los cursos gratis", "Puedes tomar casi todos los cursos de Platzi durante un mes", "Puedes tomar casi todos los cursos de Platzi durante un año", "Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año"]; 
let rand = Math.floor(Math.random()*TiposSuscripcion.length);
    let tipoDeSuscripcion = TiposSuscripcion[rand]; 
    if (rand>=0){
        console.log(Mensajes[rand]);
    }
}



````````````````


````````````````JS
let TiposSuscripcion = ["Free", "Basic", "Expert", "ExpertPlus"];
let Mensajes =  ["Solo puedes tomar los cursos gratis", "Puedes tomar casi todos los cursos de Platzi durante un mes", "Puedes tomar casi todos los cursos de Platzi durante un año", "Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año"];


function ValidarTipoDeSuscripcion (ejemploSuscripcion){
   if ( TiposSuscripcion.indexOf(ejemploSuscripcion) > -1){
    var posicion = TiposSuscripcion.indexOf (ejemploSuscripcion);
     console.log(Mensajes[posicion]);
return   ;
}

console.warn ("Verifica tu Suscripcion") 


}




````````````````

````````````````JS
let tipoDeSuscripcion = {
    Free: "Solo puedes tomar los cursos gratis",
    Basic: "Puedes tomar casi todos los cursos de Platzi durante un mes",
    Expert: "Puedes tomar casi todos los cursos de Platzi durante un año",
    ExpertPlus: "Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año"

    } 



function ValidarTipoDeSuscripcion (ejemploSuscripcion){
if (tipoDeSuscripcion [ejemploSuscripcion]){
console.log(tipoDeSuscripcion[ejemploSuscripcion]);
return   ;
}

console.warn ("Verifica tu Suscripcion") 


}

````````````````

````````````````JS

function ImprimirObjetoPorElemento (objeto){
const arr = Object.values(objeto); //Convierte los valores de un objeto en un array    
for (i=0; i< arr.length; i++){
console.log(`Tu suscripcion es ${this.[i]} `)
console.log (arr[i]);
}
}


````````````````



````````````````JS
function ConseguirTipoDeSuscripcion (tipoDeSuscripcion){
if ( tipoDeSuscripcion === "Free"){
       console.log("Solo puedes tomar los cursos gratis");
        return;
}

 if (tipoDeSuscripcion === "Basic"){
       console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
        return;
}

    if (tipoDeSuscripcion === "Expert"){
       console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
        return;
    }

     if (tipoDeSuscripcion === "ExpertPlus") {
        console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");
        return;

    }
        console.warn ("Ese tipo de Suscripcion no Existe")    

}

````````````````








## Ciclos

### 1️⃣ Responde las siguientes preguntas en la sección de comentarios:

- ¿Qué es un ciclo?
Es una ejecucion de todo un bloque de codigo determinado numero de veces

La forma de ejecutar un bloque de codigo hasta que se cumpla cierta condicion.

- ¿Qué tipos de ciclos existen en JavaScript?
FOR, WHILE, DO WHILE.

'''
While,  Do While, For.

- ¿Qué es un ciclo infinito y por qué es un problema?
Una repeticion indefinida de un bloque de codigo porq la condicional esta mal estructurada.

Es cuando la validacion de nuestros condicionales nunca se cumple y termina toteando (dañando) la aplicacion ( e.j cuando el navegador ya no puede mas de tanta ejecucion de ese bloque de codigo)

- ¿Puedo mezclar ciclos y condicionales?
Si, aunque los ciclos son una especie de condicionales, nada nos impide agregar mas condicionales dentro del ciclo

### 2️⃣ Replica el comportamiento de los siguientes ciclos for utilizando ciclos while:

```
for (let i = 0; i < 5; i++) {
    console.log("El valor de i es: " + i);
}

let i=0;
while (i<5){  
    console.log("El valor de i es: " + i);
    i++;
}
 


for (let i = 10; i >= 2; i--) {
    console.log("El valor de i es: " + i);
}

let i=10;
while (i>=2){  
    console.log("El valor de i es: " + i);
    i--;
}


```

### 3️⃣ Escribe un código en JavaScript que le pregunte a los usuarios cuánto es `2 + 2`. Si responden bien, mostramos un mensaje de felicitaciones, pero si responden mal, volvemos a empezar.

> 💡 Pista: puedes usar la función prompt de JavaScript.

let resultado =  0;
while (resultado != 4){
        resultado =  prompt("Cuanto es 2+2" );     
        console.log ("Felicidades respondiste correctamente")
       
}


## Listas

### 1️⃣ Responde las siguientes preguntas en la sección de comentarios:

- ¿Qué es un array?
Es una lista de elementos 

const  array [1, "Luis", true, false]
 

- ¿Qué es un objeto?
Es una lista de elementos PERO cada elemento tiene un nombre clave.

````js
let obj = {
    nombre: 'Luis'
    edad : 33    
}

````
- ¿Cuándo es mejor usar objetos o arrays?

Arrays Cuando lo que haremos en un elemento es lo mismo que en todos los demas ( la regla se puede incmplir). Mientras que un objeto cuando los nombres de cada elemento son importantes para nuestro algoritmo.

- ¿Puedo mezclar arrays con objetos o incluso objetos con arrays?

Si. Los arrays pueden guardar objetos. Y los objetos pueden guardar arrays entre sus propiedades.


Ej:
````js

let obj = {
    nombre: 'Luis'
    edad : 33    
    comidasFavoritas: ["pollo frito", "vegetales"]
}


const  array [1, "Luis", true, false,{nombre: "luis", edad: 3}]

````


### 2️⃣ Crea una función que pueda recibir cualquier array como parámetro e imprima su primer elemento.
let TiposSuscripcion = ["Free", "Basic", "Expert", "ExpertPlus"];
function Suscripcion (TiposSuscripcion) {
return (TiposSuscripcion[0] )
}

````JS
Function PrimerElemento (arrai){
console.log (arrai [0])
}
````




### 3️⃣ Crea una función que pueda recibir cualquier array como parámetro e imprima todos sus elementos uno por uno (no se vale imprimir el array completo).
let TiposSuscripcion = ["Free", "Basic", "Expert", "ExpertPlus"];
var longitud = TiposSuscripcion.length;

function Suscripcion (array) {
let i=0;   
while (i<longitud){
console.log (TiposSuscripcion[i]);
i++
}
}

````JS
function imprimirElementoPorElemento (array) {
let i=0;   
let longitud = array.length;
while (i<longitud){
console.log (array[i]);
i++
}
}

````

````js
function imprimirElementoPorElemento (array) {
let i=0;   
while (i<array.length){
console.log (array[i]);
i++
}
}


````
````js
function imprimirElementoPorElemento (array) { 
for (i=0; i<array.length; i++){
console.log (array[i]);
i++
}
}


````

### 4️⃣ Crea una función que pueda recibir cualquier objeto como parámetro e imprima todos sus elementos uno por uno (no se vale imprimir el objeto completo).

````JS

var MiAuto = {
    Marca: "Honda",
    Modelo: "Accord",
    annio: 2009, 
    DetalleDelAuto : function (){
        console.log(`Auto ${this.modelo} ${this.annio}`)
    } 
}

function ImprimirObjetoPorElemento (objeto){
for (i=0; i< Object.keys(objeto); i++){
console.log (this[i]);
i++
}
}

````

````js
function ImprimirObjetoPorElemento (objeto){
const arr = Object.values(objeto); //Convierte los valores de un objeto en un array    
for (i=0; i< arr.length; i++){
console.log (arr[i]);
}
}






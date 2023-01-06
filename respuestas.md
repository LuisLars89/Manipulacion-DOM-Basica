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
- Edad: Edad:number
- Correo electrónico: Email:String
- Mayor de edad Adulto:Boolean
- Dinero ahorrado Saldo:number
- Deudas Deudas:number 

### 3️⃣ Traduce a código JavaScript las variables del ejemplo anterior y deja tu código en los comentarios.

let Name = "Luis" ;
let Apellido= "Ramirez;
let User "lar8912";
let Edad = 33;
let Email = "lar_8912@hotmail.com;
let esMayorDeEdad = true;
let Ahorro = 1000;
let Deudas =100;



### 4️⃣ Calcula e imprime las siguientes variables a partir de las variables del ejemplo anterior:

- Nombre completo (nombre y apellido)
- Dinero real (dinero ahorrado menos deudas)

var Nombre_Completo= Name + '' + Apellido;
Dinero Real= Ahorro - Deudas;

## Funciones

### 1️⃣ Responde las siguientes preguntas en la sección de comentarios:

- ¿Qué es una función?
Es un conjunto de sentencias que calculan un valor o realizan una tarea. 

- ¿Cuándo me sirve usar una función en mi código?
Cuando requiero reutilizar facilmente un conjunto de instrucciones que ejecutan una tareza en especifico

- ¿Cuál es la diferencia entre parámetros y argumentos de una función?
Los parametros son aquella lista de variables que la funcion requiere para su ejecucion, mientras que los argumentos son aquellos valores que nosotros ingresamos al invocar la funcion.

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
const completeName = name + lastname;
console.log("Mi nombre es " + completeName + ", pero prefiero que me digas " + nickname + ".");

}


## Condicionales

### 1️⃣ Responde las siguientes preguntas en la sección de comentarios:

- ¿Qué es un condicional?
Es una condicion que dependiendo si es verdadera o falsa ejecuta determinada secuencia de codigo.

- ¿Qué tipos de condicionales existen en JavaScript y cuáles son sus diferencias?
Simples, Dobles, Multiples



- ¿Puedo combinar funciones y condicionales?
Si


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



> 💡 Bonus: si ya eres una experta o experto en el lenguaje, te desafío a comentar cómo replicar este comportamiento con arrays y un solo condicional. 😏

let TiposSuscripcion = ["Free", "Basic", "Expert", "ExpertPlus"];
let Mensajes =  ["Solo puedes tomar los cursos gratis", "Puedes tomar casi todos los cursos de Platzi durante un mes", "Puedes tomar casi todos los cursos de Platzi durante un año", "Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año"]; 
let rand = Math.floor(Math.random()*TiposSuscripcion.length);
    let tipoDeSuscripcion = TiposSuscripcion[rand]; 
    if (rand>=0){
        console.log(Mensajes[rand]);
    }










## Ciclos

### 1️⃣ Responde las siguientes preguntas en la sección de comentarios:

- ¿Qué es un ciclo?
Es una ejecucion de todo un bloque de codigo determinado numero de veces

- ¿Qué tipos de ciclos existen en JavaScript?
FOR, WHILE, DO WHILE, SWITCH

- ¿Qué es un ciclo infinito y por qué es un problema?
Una repeticion indefinida de un bloque de codigo porq la condicional esta mal estructurada.


- ¿Puedo mezclar ciclos y condicionales?
Si

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

let resultado =  prompt("Cuanto es 2+2" );
if (resultado == 4){
    console.log ("Felicidades Respondiste correctamente")
}

else {
    console.log ("La respuesta correcta es 4")
}

'''''''

let resultado =  0;
while (resultado != 4){
        if (resultado != 4){
        resultado =  prompt("Cuanto es 2+2" );
      
        
}

else if (resultado =4) {
    
    console.log ("Intenta de Nuevo --Cuanto es 2 + 2")
}

}


## Listas

### 1️⃣ Responde las siguientes preguntas en la sección de comentarios:

- ¿Qué es un array?
Es unab estructura de datos tambien conocida como lista de datos que almacenara ciertos valores.

- ¿Qué es un objeto?

- ¿Cuándo es mejor usar objetos o arrays?
Es una entidad independiente con diferentes propiedades

Los arrays se usan para series que poseen valores simples, mientras que los objetos son utilizadas para las series en que hay distintos objetos y propiedades con diferentes valores. 


- ¿Puedo mezclar arrays con objetos o incluso objetos con arrays?
SI

### 2️⃣ Crea una función que pueda recibir cualquier array como parámetro e imprima su primer elemento.
let TiposSuscripcion = ["Free", "Basic", "Expert", "ExpertPlus"];
function Suscripcion (TiposSuscripcion) {
return (TiposSuscripcion[0] )
}

### 3️⃣ Crea una función que pueda recibir cualquier array como parámetro e imprima todos sus elementos uno por uno (no se vale imprimir el array completo).
let TiposSuscripcion = ["Free", "Basic", "Expert", "ExpertPlus"];
var longitud = TiposSuscripcion.length;

function Suscripcion (TiposSuscripcion) {
let i=0;   
while (i<longitud){
console.log (TiposSuscripcion[i]);
i++
}
}

### 4️⃣ Crea una función que pueda recibir cualquier objeto como parámetro e imprima todos sus elementos uno por uno (no se vale imprimir el objeto completo).
let TiposSuscripcion = {
    1: "Free",
    2: "Basic",
    3: "Expert", 
    4: "ExpertPlus"
  }
let longitud = Object.keys(TiposSuscripcion).length;


    function  Imprimir(TiposSuscripcion){
    let i=1;
    while (i<longitud){    
    console.log (TiposSuscripcion[i]);
    i++
    
  }  
  }       
    
let longitud = Object.keys(TiposSuscripcion);

function Suscripcion (TiposSuscripcion) {
let i=0;   
while (i<longitud){
console.log (TiposSuscripcion[i]);
i++
}
}


var MiAuto = {
    Marca: "Honda",
    Modelo: "Accord",
    annio: 2009, 
    DetalleDelAuto : function (){
        console.log(`Auto ${this.modelo} ${this.annio}`)
    } 
}
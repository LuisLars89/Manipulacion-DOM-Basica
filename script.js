const h1 = document.querySelector ("h1");
const form = document.querySelector ("#form");
const input1 =document.getElementById ("calculo1");
const input2 =document.getElementById ("calculo2");
const btn = document.getElementById ("btnCalcular");
const pResult=document.getElementById ("result");
const pResult2=document.getElementById ("result2");

form.addEventListener('submit', sumarInputValues);
input1.addEventListener('focus', ponerClase1)
input2.addEventListener('focus', ponerClase2)
input1.addEventListener('focusout', quitarClase1)
input2.addEventListener('focusout', quitarClase2)
input1.addEventListener('change', valida1)
input2.addEventListener('change', valida2)
form.addEventListener('submit', vacios1)
form.addEventListener('submit', vacios2)
btn.addEventListener('mousemove', ClaseBtn)
btn.addEventListener('mouseleave', ClaseBtnDown)

function vacios1 (event){
   event.preventDefault();
   num1=input1.value;
   if (num1 == ""){
      alert("Ingresa Un Valor")
      input1.value= "";
      input1.classList.remove('hover');
      input1.classList.add('rojo');
      input1.focus()
   }
}

function vacios2 (event){
   event.preventDefault();
   num2=input2.value;
   if (num2 == ""){
      alert("Ingresa Un Valor")
      input2.value= "";
      input2.classList.remove('hover');
      input2.classList.add('rojo');
      input2.focus()
   }
}


function ponerClase1 (){
   input1.classList.add('hover')
}


function ponerClase2 (){
   input2.classList.add('hover')
 }
 

function quitarClase1 (){
      input1.classList.remove('hover') 
   }
   
   function quitarClase2 (){
      input2.classList.remove('hover') 
   }  
   
   function valida1 (){
      num1=input1.value
      if (isNaN(num1)){
         alert("Ingresa Solo Numeros");
         input1.value= "";
         input1.classList.add('rojo');
     
        
      }
         else{
            input1.value = input1.value  
            input1.classList.remove('rojo');
         }
   }  

   function valida2 (){
      num2=input2.value
      if (isNaN(num2)){
         alert("Ingresa Solo Numeros");
         input2.value= "";
         input2.classList.add('rojo');
         input2.focus;
      }
         

         else  {
            input2.value = input2.value  
            input2.classList.remove('rojo');
         }
   }  

   function ClaseBtn (){
      btn.classList.add('button')
   }

   function ClaseBtnDown (){
      btn.classList.remove('button')
   }


function sumarInputValues (event){
   num1 = input1.value;
   num2 = input2.value;
if(num1 != ""  &&  num2!= "") {
event.preventDefault();
const sumaInputs = input1.value + input2.value;
const sumaInputs2 = Number(input1.value) + Number(input2.value);
pResult.innerText = "El resultado de concatenar Strings es: " + sumaInputs
pResult2.innerText = "El resultado de sumar los inputs es: " + sumaInputs2 
}

else{

   console.log ("error")

}
}



var numeroUno=prompt ('Ingrese un número'), hola = prompt('Escriba la plabra Hola:'), numeroDos= prompt('ingrese un número del 0 al 100:');
if (parseInt(numeroUno)>1000){
    alert("El número ingresado es mayor a 1000");
};

if (hola=="Hola"){
    console.log ("Usted hizo caso a la consigna")
};

if (parseInt(numeroDos)>10 && parseInt(numeroDos)<50){
    alert("El número está entre 10 y 50");
};
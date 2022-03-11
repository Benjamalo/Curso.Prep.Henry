// No cambies los nombres de las funciones.

function devolverPrimerElemento(array) {
  // Devuelve el primer elemento de un  array (pasado por parametro)
  // Tu código:
  
  return array[0]
}
var newArray= ["Primero","Segundo"]
devolverPrimerElemento(newArray)

function devolverUltimoElemento(array) {
  // Devuelve el último elemento de un array
  // Tu código:
  return array[array.length-1]
}
var new2= ["Primero","Segundo","tres"]
devolverUltimoElemento(new2)

function obtenerLargoDelArray(array) {
  // Devuelve el largo de un array
  // Tu código:
  return array.length
}
var dar = ["Primero","Segundo","tres"] 
obtenerLargoDelArray(dar)

function incrementarPorUno(array) {
  // "array" debe ser una matriz de enteros (int/integers)
  // Aumenta cada entero por 1
  // y devuelve el array
  // Tu código:
  var arrayNuevo = [] 
  for (let i = 0; i <= array.length-1; i++) {
    arrayNuevo.push(array[i]+1 )
    
  }
  return arrayNuevo
}
var arrayMul = [2,3,4,5] 
incrementarPorUno(arrayMul)


function agregarItemAlFinalDelArray(array, elemento) {
  // Añade el "elemento" al final del array
  // y devuelve el array
  // Tu código:
    array.push(elemento)
    return array
}
var nuevoArray = [2,3,4,5] 
agregarItemAlFinalDelArray(nuevoArray, "Carlos")


function agregarItemAlComienzoDelArray(array, elemento) {
  // Añade el "elemento" al comienzo del array
  // y devuelve el array
  // Pista: usa el método `.unshift`
  // Tu código:
  array.unshift(elemento)
  return array
}
var agregarele = [2,3,4,5] 
agregarItemAlComienzoDelArray(agregarele, 433)

function dePalabrasAFrase(palabras) {
  // "palabras" es un array de strings/cadenas
  // Devuelve un string donde todas las palabras estén concatenadas
  // con espacios entre cada palabra
  // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'
  // Tu código:
  
 
  
  return palabras.join(" ")
}
var arrayPalabras = ["Henry", "Javascript", "Class"]
dePalabrasAFrase(arrayPalabras)
//"Henry JavaScript Class"

function arrayContiene(array, elemento) {
  // Comprueba si el elemento existe dentro de "array"
  // Devuelve "true" si está, o "false" si no está
  // Tu código:
  
  var variable = ""
  for (let i = 0; i <= array.length; i++) {
    if (array[i] === elemento) {
      
      variable= true
      return variable
    }else { 
      variable =false
    }
  }
  return variable
}
var arrayCont = ["Martina","Cabrera","Castilla"]
arrayContiene(arrayCont,"Cabrera")

function agregarNumeros(numeros) {
  // "numeros" debe ser un arreglo de enteros (int/integers)
  // Suma todos los enteros y devuelve el valor
  // Tu código:
  
  var num = 0
  for (let i = 0; i <= numeros.length-1; i++) {
    num += numeros[i]  
    
    
  }
  return num
}
var arrayNumber =  [2,2,2,2]
agregarNumeros(arrayNumber)


function promedioResultadosTest(resultadosTest) {
  // "resultadosTest" debe ser una matriz de enteros (int/integers)
  // Itera (en un bucle) los elementos del array, calcula y devuelve el promedio de puntajes
  // Tu código:
  var suma = 0 
  var prom = 0
 
  for (let i = 0; i < resultadosTest.length; i++) {
    suma +=resultadosTest[i]
  }prom = suma / resultadosTest.length
  
  return prom

}
var arrayTest = [10,10,5,2]
promedioResultadosTest(arrayTest)


function numeroMasGrande(numeros) {
  // "numeros" debe ser una matriz de enteros (int/integers)
  // Devuelve el número más grande
  // Tu código:
  var mayor = Math.max.apply(null, numeros)
  
  return mayor
}
var arrayNumGran = [7,6,6,5]
numeroMasGrande(arrayNumGran)

function multiplicarArgumentos() {
  // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto
  // Si no se pasan argumentos devuelve 0. Si se pasa un argumento, simplemente devuélvelo
  // Escribe tu código aquí:
 
    var result = 0;
    var args = [...arguments]
    if(args.length===0){ return 0 };
    for(let i = 0; i <= args.length-1 ; i++){
      result *= args[i];
    }
    return result;
  }



function cuentoElementos(arreglo){
  //Realiza una función que retorne la cantidad de los elementos del arreglo cuyo valor es mayor a 18.
  //Escribe tu código aquí
  var cant =[]
  

  for (let i = 0; i < arreglo.length; i++) {
    if (arreglo[i]>18){
      cant.push(arreglo[i])
    }var canti = cant.length

    
    
    
    
  }
  return canti
  
}
var arrayMayorA18=[25,33,4,18,19]
cuentoElementos(arrayMayorA18)


function diaDeLaSemana(numeroDeDia) {
  //Suponga que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente. 
  //Realiza una función que dado el número del día de la semana, retorne: Es fin de semana
  //si el día corresponde a Sábado o Domingo y “Es dia Laboral” en caso contrario. 
  //Escribe tu código aquí  
  switch (numeroDeDia) {
    case 1:
   
      return "Es fin de semana"  
      break;
    case 2:
     
      return "Es dia Laboral"
      break;
    case 3:
    
      return "Es dia Laboral"
      break;
    case 4:
     
      return "Es dia Laboral"
      break;
    case 5:
      
      return "Es dia Laboral"
      break;
    case 6:
      
      return "Es dia Laboral"
      break;
    case 7:
     
      return "Es fin de semana"
      break;  
  } 
  
} 

diaDeLaSemana(1)

function empiezaConNueve(n) {
  //Desarrolle una función que recibe como parámetro un número entero n. Debe retornar true si el entero 
  //inicia con 9 y false en otro caso.
  //Escribe tu código aquí
  var num9 = String(n);
  var primerNumeroEs9 = false;
  if (num9.charAt(0)==9){
    primerNumeroEs9 = true
    
    
  }
  return primerNumeroEs9
}
empiezaConNueve(992)

function todosIguales(arreglo) {
  //Escriba la función todosIguales, que indique si todos los elementos de un arreglo son iguales:
  //retornar true, caso contrario retornar false.
  //Escribe tu código aquí  
  var verdades = false
  var arrayInicial= arreglo[0]
  for (let i = 0; i < arreglo.length; i++) {
    if (arreglo[i]===arrayInicial){
      verdades = true
      
    }else
      verdades = false
   
    
  }return verdades
  
} 
var arrayIgualdad= ["Chau","Chau","Chau"]
todosIguales(arrayIgualdad)


function mesesDelAño(array) {
  //Dado un array que contiene algunos meses del año desordenados, recorrer el array buscando los meses de 
  // "Enero", "Marzo" y "Noviembre", guardarlo en nuevo array y retornarlo.
  //Si alguno de los meses no está, devolver: "No se encontraron los meses pedidos"
  // Tu código:
  var arrayMesesOrdenados = []
  for (let i = 0; i < array.length; i++) {
    if (array[i]==="Enero" || array[i]==="Marzo" || array[i]==="Noviembre" ){
      arrayMesesOrdenados.push(array[i])
    }}
  if (arrayMesesOrdenados.length<3){
    return "No se encontraron los meses pedidos"}
  
   
  
  return arrayMesesOrdenados
  }
var arrayMeses= ["Marzo", "Diciembre", "Abril", "Junio", "Julio", "Noviembre", "Enero", "Mayo", "Febrero"]
mesesDelAño(arrayMeses)


function mayorACien(array) {
  //La función recibe un array con enteros entre 0 y 200. Recorrer el array y guardar en un nuevo array sólo los
  //valores mayores a 100 (no incluye el 100). Finalmente devolver el nuevo array.
  // Tu código:
  var arrayNuevoMayoresA100 =[];
  for (let i = 0; i < array.length; i++) {
    if (array[i]>100) {
      arrayNuevoMayoresA100.push(array[i]);
    }
  }
  
  return arrayNuevoMayoresA100;



}
var arrayNumberss = [52, 54, 56, 58, 60, 62, 101, 66, 68, 70]
mayorACien(arrayNumberss)




function breakStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array. 
  //Devolver el array
  //Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse la ejecución y 
  //devolver: "Se interrumpió la ejecución"
  //Pista: usá el statement 'break'
  // Tu código:
  
  var arry = []
  var suma = numero
  
  for (var i = 0; i < 10; i++) {
    suma += 2
    if (suma === i) break
    else{
      arry.push(suma)
    }
  }
  if(i<10){
    return "Se interrumpió la ejecución"
  } else {
    return arry
  }

//  do {
 //   n+=1
   // suma += numero+2

    
   
    //if (suma === n)break; {
      //return "Se interrumpió la ejecución"
   // }  
  //}while (n = 10);
  
}
breakStatement(3)

function continueStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array.    
  //Devolver el array
  //Cuando el número de iteraciones alcance el valor 5, no se suma en ese caso y se continua con la siguiente iteración
  //Pista: usá el statement 'continue'
  // Tu código:
  suma = numero;
  var ary = [];
  for (let i = 0; i < 10; i++) {
    if (i===5)continue;
    suma+=2
    ary.push(suma)
    
   
  }return ary
}
// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  devolverPrimerElemento,
  devolverUltimoElemento,
  obtenerLargoDelArray,
  incrementarPorUno,
  agregarItemAlFinalDelArray,
  agregarItemAlComienzoDelArray,
  dePalabrasAFrase,
  arrayContiene,
  agregarNumeros,
  promedioResultadosTest,
  numeroMasGrande,
  multiplicarArgumentos,
  cuentoElementos,
  diaDeLaSemana,
  empiezaConNueve,
  todosIguales,
  mesesDelAño,
  mayorACien,
  breakStatement,
  continueStatement
};

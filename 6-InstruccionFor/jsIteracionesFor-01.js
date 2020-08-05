/* EJERCICIO 1 DEL FOR
function mostrar()
{
	for(var numero = 1 ; numero < 11 ; numero++)
	{
		document.write(numero + "<br>");
	}
}
*/

/*                                                           ----EJERCICIO QUE MOSTRO EL PROFE----
Ingresar 5 numeros(entre -100 y 500). Se pide mostrar:
*la suma de todos los numeros
*el promedio 
*cuantos numeros son pares
*el maximo numero
*el minimo numero
*/

function mostrar()
{
	var i;
	var numero;
	var suma;
	var promedio;
	var contadorPares;
	var bandera;
	var maximo;
	var minimo;

	suma = 0;
	contadorPares = 0;
	bandera = true;

	for(i=0; i<5; i++)
	{
		numero = prompt("Ingrese un numero: ");
		numero = parseInt(numero);
		while(numero<-100 || numero>500)
		{
			numero = prompt("Error!, reingrese un numero: ");
			numero = parseInt(numero);
		}

		suma = suma + numero;

		if((numero%2)==0)
		{
			contadorPares++;
		}

		if(bandera == 0 || numero<minimo)
		{
			minimo = numero;
		}
		if(bandera == 0 || numero>maximo)
		{
			maximo = numero;
		}
		bandera = false;

		/*if(bandera == true)
		{
			maximo = numero;
			minimo = numero;
		}
		else
		{
			if(numero<minimo)
			{
				minimo = numero;
			}
			if(numero>maximo)
			{
				maximo = numero;
			}
		}
		bandera = false;*/

	}

	promedio = suma/i;


	document.write("La suma es: " + suma + "<br>");
	document.write("El promedio es: " + promedio + "<br>");
	document.write("La cantidad de pares es: " + contadorPares + "<br>");
	document.write("El maximo es: " + maximo + "<br>");
	document.write("El minimo es: " + minimo + "<br>");


}


/*CONOCEMOS LA CANTIDAD DE ITERACIONES: FOR
NO CONOCEMOS LA CANTIDAD DE ITERACIONES: WHILE*/
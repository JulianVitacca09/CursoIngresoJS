//al presionar el botón pedir un número. mostrar los numeros pares desde el 1 al número ingresado, y mostrar la cantidad de numeros pares encontrados.
function mostrar()
{
	var ingreseNumero;
	var contadorNumerosPares = 0;
//--------------------------------

	ingreseNumero = prompt("Ingrese un numero");
	ingreseNumero = parseInt(ingreseNumero);

	for(var i = 1; i <= ingreseNumero ; i++)
	{
		if(i % 2 == 0)
		{
			document.write("Los numeros pares ingresados son: " + i + "</br>");
			contadorNumerosPares++;
		}
	}
	
	document.write("La cantidad de numeros pares es de: " + contadorNumerosPares);

}//FIN DE LA FUNCIÓN
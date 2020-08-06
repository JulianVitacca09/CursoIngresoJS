//Al presionar el botón pedir 5 números e informar la suma acumulada y el promedio.
function mostrar()
{
	var i;
	var acumulador;
	var numeroIngresado;
//------------------------------
	i = 0;
	acumulador = 0;

	while(i < 5)
	{
		numeroIngresado = prompt("Ingrese un numero");
		numeroIngresado = parseInt(numeroIngresado);

		acumulador =  acumulador + numeroIngresado ;
		i++;
	}
	
	txtIdSuma.value = acumulador;
	txtIdPromedio.value = acumulador / 5;
}//FIN DE LA FUNCIÓN
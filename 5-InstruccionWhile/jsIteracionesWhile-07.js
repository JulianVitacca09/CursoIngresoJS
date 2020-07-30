/*
Al presionar el botón pedir  números  hasta que el USUARIO QUIERA 
e informar la suma acumulada y el promedio.
*/
function mostrar()
{
	var contador = 0;
	var acumulador = 0;
	var respuesta;
	var numeroIngresado;
	var promedio;
	contador =0;
	acumulador =0;
	respuesta = true;
//------------------------

	while (respuesta == true)
	{
		numeroIngresado = prompt("Ingrese un numero");
		numeroIngresado = parseInt(numeroIngresado);

		acumulador = numeroIngresado + acumulador;

		contador++;

		respuesta = confirm("Desea ingresar otro numero? ");
	}

	promedio = acumulador / contador;

	txtIdSuma.value=acumulador;
	txtIdPromedio.value= promedio;

}//FIN DE LA FUNCIÓN
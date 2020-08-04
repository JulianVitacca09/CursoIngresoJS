/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
sumar los que son positivos y multiplicar los negativos.*/
function mostrar()
{
	var ingresarNumero;
	var respuesta = true;
	var acumuladorPositivos= 0;
	var acumuladorNegativos= 1;
//-----------------------------

	while ( respuesta == true)
	{
		ingresarNumero = prompt("Ingrese un numero");
		ingresarNumero = parseInt(ingresarNumero);

		if(ingresarNumero > 0)
		{
			acumuladorPositivos = ingresarNumero + acumuladorPositivos;
		}
		else
		{
			if(ingresarNumero < 0)
			{
			acumuladorNegativos = ingresarNumero * acumuladorNegativos;
			}
		}

		respuesta = confirm("¿Desea ingresar otro numero?");
	}

    
	txtIdSuma.value = acumuladorPositivos ;
	txtIdProducto.value = acumuladorNegativos;

}//FIN DE LA FUNCIÓN
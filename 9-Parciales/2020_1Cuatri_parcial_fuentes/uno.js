/*Debemos realizar la carga de 5(cinco) productos de prevención de contagio,
de cada una debo obtener los siguientes datos:
el tipo (validar "barbijo" , "jabón" o "alcohol") ,
el precio (validar entre 100 y 300),
la cantidad de unidades (no puede ser 0 o negativo y no debe superar las 1000 unidades),
la Marca y el fabricante.
Se debe Informar al usuario lo siguiente:
a) Del más barato de los alcohol, la cantidad de unidades y el fabricante
b) Del tipo con mas unidades, el promedio por compra
c) Cuántas unidades de jabones hay en total*/
function mostrar()
{
	var tipo;
	var precio;
	var cantidadUnidades;
	var marca;
	var fabricante;
	var precioAlcoholBarato;
	var cantidadUnidadesAlcoholBarato;
	var fabricanteAlcoholBarato;
	var banderaAlcoholBarato = true;
	var acumuladorBarbijo = 0;
	var acumuladorJabon = 0;
	var acumuladorAlcohol = 0;
	var promedio;
	var cantidadUnidadesJabon;
	var unidadesTotales;
//--------------------------------

	for(i = 0; i < 5; i++)
	{
		tipo = prompt("Ingrese un producto");
		
		while(tipo != "barbijo" && tipo != "jabon" && tipo != "alcohol")
		{
			tipo = prompt("Producto invalido, ingrese barbijo, jabon o alcohol");
		}

		precio = prompt("Ingrese un precio");
		precio = parseInt(precio);

		while(precio < 100 || precio > 300)
		{
			precio = prompt("Precio invalido, ingrese un precio entre 100 y 300");
			precio = parseInt(precio);
		}

		cantidadUnidades = prompt("Ingrese la cantidad de unidades");
		cantidadUnidades = parseInt(cantidadUnidades);

		while(cantidadUnidades <= 0 || cantidadUnidades > 1000)
		{
			cantidadUnidades = prompt("Cantidad invalida, ingrese una cantidad entre 1 y 1000");
			cantidadUnidades = parseInt(cantidadUnidades);
		}

		marca = prompt("Ingrese la marca");

		fabricante = prompt("Ingrese el fabricante");
    
		if((tipo == "alcohol" && precio < precioAlcoholBarato) || (tipo == "alcohol" && banderaAlcoholBarato == true))
		{
			precioAlcoholBarato = precio;
			cantidadUnidadesAlcoholBarato = cantidadUnidades;
			fabricanteAlcoholBarato = fabricante;
			banderaAlcoholBarato = false;
		}

		switch(tipo)
		{
			case "barbijo":
				acumuladorBarbijo = cantidadUnidades + acumuladorBarbijo;
			break;
			case "jabon":
				acumuladorJabon = cantidadUnidades + acumuladorJabon;
			break;
			case "alcohol":
				acumuladorAlcohol = cantidadUnidades + acumuladorAlcohol;
			break;
		}

		if(tipo == "jabon")
		{
			cantidadUnidadesJabon = cantidadUnidades;
		}

	}//Fin del for

	unidadesTotales = acumuladorJabon + acumuladorBarbijo + acumuladorAlcohol;

	if (acumuladorAlcohol > acumuladorJabon && acumuladorAlcohol > acumuladorBarbijo)
	{
		promedio = acumuladorAlcohol / unidadesTotales;
	}
	else
	{
		if(acumuladorBarbijo > acumuladorJabon && acumuladorBarbijo > acumuladorAlcohol)
		{
			promedio = acumuladorBarbijo / unidadesTotales;
		}
		else
		{
			if(acumuladorJabon > acumuladorBarbijo && acumuladorJabon > acumuladorAlcohol)
			{
				promedio = acumuladorJabon / unidadesTotales;
			}
		}
	}

	document.write("a) La cantidad de unidades del alcohol mas barato es de: " + cantidadUnidadesAlcoholBarato + " y su fabricante es " + fabricanteAlcoholBarato + "<br>");
	document.write("b) Del tipo con mas unidades, su promedio por compra es de: " + promedio.toFixed(2) + "<br>");
	document.write("c) Hay en total " + cantidadUnidadesJabon + " de unidades de jabon");
}


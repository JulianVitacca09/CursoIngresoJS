//Al selecionar un destino , indicar el punto cardinal de nuestro pais en donde se encuentra Norte, Sur, Este u Oeste
function mostrar()
{
	var destinoIngresado 
//----------------------------
	destinoIngresado =txtIdDestino.value;

	switch(destinoIngresado)
	{
		case "Bariloche":
		case "Cordoba":
			alert("Su punto cardinal es el Sur");
			break;
		case "Cataratas":
		case "Mar del plata":
			alert("Su punto cardinal es el Este");
			break;
	}
	
}//FIN DE LA FUNCIÓN
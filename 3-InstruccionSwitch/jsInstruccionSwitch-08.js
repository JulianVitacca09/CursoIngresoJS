function mostrar()
{
	var destinoIngresado 
//----------------------------
	destinoIngresado =txtIdDestino.value;

	switch(destinoIngresado)
	{
		case "Bariloche":
		case "Cordoba":
			alert("Alli hace frio");
			break;
		case "Cataratas":
		case "Mar del plata":
			alert("Alli hace calor");
			break;
	}
	

}//FIN DE LA FUNCIÓN
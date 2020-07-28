function mostrar()
{
	var mesDelAño =txtIdMes.value;
//---------------------------------------

	switch(mesDelAño)
	{
		case "Febrero":
			alert("Tiene 29 días");
			break;
		case "Enero":
		case "Marzo":
		case "Mayo":
		case "Julio":
		case "Agosto":
		case "Octubre":
		case "Diciembre":
			alert("Tiene 31 días");
			break;
		default:
			alert("Tiene 30 dias");
			break;
	}
	
}//FIN DE LA FUNCIÓN
function mostrar()
{
	var nota;
//---------------------
	
	nota = Math.floor(Math.random() * 10) + 1;

	if(nota > 8)
	{
      alert("EXCELENTE");
	}
	else
	{
	    if(nota > 3)
		{
			alert("APROBO");
		}
		else
		{
			alert("VAMOS QUE SE PUEDE");
		}
	}
}//FIN DE LA FUNCIÓN
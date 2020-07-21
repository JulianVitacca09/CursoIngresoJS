function mostrar()
{
	var nota;
//---------------------
	
	nota = Math.floor(Math.random() * 10) + 1;

	if(nota >= 9)
	{
      alert("Su nota es: " + nota + " EXCELENTE");
	}
	else
	{
		if(nota >= 4)
		{
			alert("Su nota es: " + nota + " APROBO");
		}
		else
		{
			alert("Su nota es: " + nota + " VAMOS QUE SE PUEDE");
		}
	}
}//FIN DE LA FUNCIÓN
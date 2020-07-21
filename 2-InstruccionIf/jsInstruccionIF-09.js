//Vitacca Julian
//Al presionar el Botón, mostrar un número Random del 1 al 10 inclusive
function mostrar()
{
	var numero;
//---------------------

	numero = Math.floor(Math.random() * 10) + 1;
	
	alert("Su numero random es: " + numero);
}//FIN DE LA FUNCIÓN
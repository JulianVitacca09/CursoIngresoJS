function mostrar()
{
	var edad;
//--------------

	edad = txtIdEdad.value;
	edad = parseInt(edad);

	if(edad < 13  || edad > 17) {
		alert("Esa persona NO es adolescente");
	}

}//FIN DE LA FUNCIÓN
function mostrar()
{
	var edad;
//---------------

	edad = txtIdEdad.value;
	edad = parseInt(edad);

	if(edad >= 18) {
		alert("Esa persona es mayor de edad");	
	}
    else {
		alert("Esa persona es menor de edad");
	}
	
}//FIN DE LA FUNCIÓN
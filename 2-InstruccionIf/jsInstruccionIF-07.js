// Vitacca Julian
//Al ingresar una edad menor a 18 años y un estado civil distinto a "Soltero", mostrar el siguiente mensaje: 'Es muy pequeño para NO ser soltero.'
function mostrar()
{
	var edad;
	var Civil;
//----------------------

	edad = txtIdEdad.value;
	edad = parseInt(edad);
	
	Civil = estadoCivil.value;
	

	if(edad < 18  && Civil != "Soltero") {
		alert("Es muy pequeño para NO ser soltero");
	}

}//FIN DE LA FUNCIÓN
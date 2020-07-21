function mostrar()
{
	var edad;
//--------------
 /* Forma 1

	edad = txtIdEdad.value;
	edad = parseInt(edad);

	if(edad < 13  || edad > 17) {
		alert("Esa persona NO es adolescente");
	}
*/
// Forma 2
	edad = txtIdEdad.value;
	edad = parseInt(edad);
	
	if(!(edad >=13 && edad < 18)) {
		alert("Esa persona NO es adolescente");
	}
}//FIN DE LA FUNCIÓN
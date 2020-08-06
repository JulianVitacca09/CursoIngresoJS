// Julian Vitacca

/*RISING BTL. Empresa dedicada a la toma de datos para realizar estadísticas y censos nos pide realizar una carga de datos validada e ingresada por ventanas emergentes solamente (para evitar hacking y cargas maliciosas) y luego asignarla a cuadros de textos. 
12.   Los datos requeridos son los siguientes:
A.	Edad, entre 18 y 90 años inclusive.
B.	Sexo, “M” para masculino y “F” para femenino
C.	Estado civil, 1-para soltero, 2-para casados, 3-para divorciados y 4-para viudos
D.	Sueldo bruto, no menor a 8000.
E.	Número de legajo, numérico de 4 cifras, sin ceros a la izquierda.
F.	Nacionalidad, “A” para argentinos, “E” para extranjeros, “N” para nacionalizados.
 */
function ComenzarIngreso () 
{
 	var edadIngresada;
 	var sexoIngresado;
	var estadoCivilIngresado;
	var sueldoBruto;
	var numeroLegajo;
	var nacionalidad;
//------------------------------------

//----------A
	edadIngresada = prompt("Ingrese una edad entre 18 y 90");
	
	while(edadIngresada <18 || edadIngresada > 90)
	{
		edadIngresada = prompt("Edad no valida. Ingrese una edad entre 18 y 90");
	}

	txtIdEdad.value = edadIngresada;

//-----------B	
	sexoIngresado = prompt("Ingrese sexo. M para masculino, F para femenino");

	while(sexoIngresado != "f" && sexoIngresado != "m" && sexoIngresado != "F" && sexoIngresado != "M")
	{
		sexoIngresado = prompt("Sexo no valido. Ingrese M para masculino, F para femenino");
	}

	switch(sexoIngresado)
	{
		case "M":
		case "m":
			sexoIngresado = "Masculino";
		break;
		case "F":
		case "f":
			sexoIngresado = "Femenino";
		break;
	}
	
	txtIdSexo.value = sexoIngresado;

//-----------C
	estadoCivilIngresado = prompt("Ingrese estado civil. 1 si es soltero, 2 si es casado, 3 si es divorsiado y 4 si es viudo");

	while(estadoCivilIngresado < 1 || estadoCivilIngresado > 4)
	{
		estadoCivilIngresado = prompt("Estado civil incorrecto. Ingrese estado civil. 1 si es soltero, 2 si es casado, 3 si es divorsiado y 4 si es viudo");
	}
	
	switch(estadoCivilIngresado)
	{
		case "1":
			estadoCivilIngresado = "Soltero";
		break;
		case "2": 
			estadoCivilIngresado = "Casado";
		break;
		case "3":
			estadoCivilIngresado = "Divorsiado";
		break;
		case "4":
			estadoCivilIngresado = "Viudo";
		break;
	}

	txtIdEstadoCivil.value = estadoCivilIngresado;

//-----------D

	sueldoBruto = prompt("Ingrese sueldo bruto. NO MENOR A 8000");
	
	while(sueldoBruto <8000 || isNaN(sueldoBruto))
	{
		sueldoBruto = prompt("Sueldo bruto incorrecto. Ingrese sueldo bruto. NO MENOR A 8000");
	}

	txtIdSueldo.value = sueldoBruto;

//-----------E

	numeroLegajo = prompt("Ingrese un numero de legajo de 4 cifras, sin ceros a la izquierda");
	
	while(isNaN(numeroLegajo) || numeroLegajo < 1000 || numeroLegajo > 9999)
	{
		numeroLegajo = prompt("Numero de legajo no valido. Ingrese un numero de legajo de 4 cifras, sin ceros a la izquierda");
	}

	txtIdLegajo.value = numeroLegajo;

//-----------F

	nacionalidad = prompt("Ingrese su nacionalidad. A para argentinos, E para extranjeros, N para nacionalizados");
	
	while (nacionalidad != "a" && nacionalidad != "A" && nacionalidad != "e" && nacionalidad != "E" && nacionalidad != "n" && nacionalidad != "N")
	{
		nacionalidad = prompt("Nacionalidad incorrecta. Ingrese su nacionalidad. A para argentinos, E para extranjeros, N para nacionalizados");
	}

	switch(nacionalidad)
	{
		case "a":
		case "A":
			nacionalidad = "Argentino";
		break;
		case "e":
		case "E":
			nacionalidad = "Extranjero";
		break;
		case "N":
		case "n":
			nacionalidad = "Nacionalizado";
		break;
	}

	txtIdNacionalidad.value = nacionalidad;

}

//tolowercase
//touppercase
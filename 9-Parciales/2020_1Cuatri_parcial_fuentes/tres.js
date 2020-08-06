/*En el ingreso a un viaje en avion nos solicitan nombre , edad, sexo("f" o "m") y estado civil("soltero", "casado" o "viudo")y temperatura corporal.
a) El nombre de la persona con mas temperatura.
b) Cuantos mayores de edad estan viudos
c) La cantidad de hombres que hay solteros o viudos.
d) cuantas personas de la tercera edad( mas de 60 años) , tienen mas de 38 de temperatura
e) El promedio de edad entre los hombres solteros.*/
function mostrar()
{
	var nombre;
	var edad;
	var sexo;
	var estadoCivil;
	var temperatura;
	var respuesta = true;
	var banderaTemperatura = true;
	var temperaturaMasAlta;
	var personaConMasTemperatura;
	var mayoresEdadViudos = 0;
	var hombresSolterosViudos = 0;
	var terceraEdadConTemperatura = 0;
	var acumuladorEdad = 0;
	var contadorHombres = 0;
	var promedio;
//--------------------------

	do
	{
		nombre = prompt("Ingrese su nombre");

		edad = prompt("Ingrese su edad");
		edad = parseInt(edad);
		while(edad < 1 || edad > 102 || isNaN(edad))
		{
			edad = prompt("Edad invalida, ingrese su edad");
			edad = parseInt(edad);
		}

		sexo = prompt("Ingrese su sexo. f o m");
		while(sexo != "f" && sexo != "m")
		{
			sexo = prompt("Sexo invalido, Ingrese su sexo. f o m");
		}

		estadoCivil = prompt("Ingrese su estado civil. soltero, casado o viudo");
		while(estadoCivil != "soltero" && estadoCivil != "casado" && estadoCivil != "viudo")
		{
			estadoCivil = prompt("Estado civil invalido, ingrese su estado civil. soltero, casado o viudo");
		}

		temperatura = prompt("Ingrese su temperatura corporal");
		temperatura = parseInt(temperatura);
		while(isNaN(temperatura))
		{
			temperatura = prompt("Temperatura invalida, ingrese su temperatura corporal");
			temperatura = parseInt(temperatura);
		}

		if((temperatura > temperaturaMasAlta) || (banderaTemperatura == true))
		{
			personaConMasTemperatura = nombre;
			temperaturaMasAlta = temperatura;
			banderaTemperatura = false;
		}

		if(edad > 18 && estadoCivil == "viudo")
		{
			mayoresEdadViudos++;
		}

		if(sexo == "m" && (estadoCivil == "soltero" || estadoCivil == "viudo"))
		{
			hombresSolterosViudos++;
		}

		if(edad >= 60 && temperatura >= 38)
		{
			terceraEdadConTemperatura++;
		}

		if(sexo == "m" && estadoCivil == "soltero")
		{
			contadorHombres++;
			acumuladorEdad = edad + acumuladorEdad;
		}

		respuesta = confirm("Desea ingresar otro pasajero?");
	}while(respuesta == true)

	promedio = acumuladorEdad / contadorHombres;

	document.write("A) El nombre de la persona con mas temperatura es: " + personaConMasTemperatura + "<br>");
	document.write("B) La cantidad de mayores de edad viudos es de: " + mayoresEdadViudos + "<br>");
	document.write("C) La cantidad de hombres solteros o viudos es de: " + hombresSolterosViudos + "<br>");
	document.write("D) La cantidad de personas de tercera edad con temperatura mayor a 38 es de: " + terceraEdadConTemperatura + "<br>");
	document.write("E) El promedio de edad entre los hombres solteros es de: " + promedio);
 
}

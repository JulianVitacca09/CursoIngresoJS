/*una agencia de viajes debe sacar las tarifas de los viajes , se cobra $15.000 por cada estadia como base, se pide el ingreso de una estacion del año y 
localidad para vacacionar para poder calcular el precio final

en Invierno: bariloche tiene un aumento del 20% cataratas y Cordoba tiene un descuento del 10% Mar del plata tiene un descuento del 20%

en Verano: bariloche tiene un descuento del 20% cataratas y Cordoba tiene un aumento del 10% Mar del plata tiene un aumento del 20%

en Otoño y Primavera: bariloche tiene un aumento del 10% cataratas tiene un aumento del 10% Mar del plata tiene un aumento del 10% y Cordoba tiene el precio sin descuento*/

function mostrar()
{
	var estacionIngresada;
	var destinoIngresado;
	var precio = 15000;
	var precioFinal;
//-----------------------------------
    estacionIngresada = txtIdEstacion.value;
	destinoIngresado = txtIdDestino.value;
//                                                                   CODIGO MAS OPTIMIZADO
	switch(estacionIngresada)
	{
		case "Invierno":
			switch(destinoIngresado)
			{
				case "Bariloche":
					precioFinal = precio + ((precio * 20) / 100);
				break;
				case "Mar del plata":
					precioFinal = precio - ((precio * 20) / 100);
				break;
				case "Cataratas":
			    case "Cordoba":
					precioFinal = precio - ((precio * 10) / 100);
				break;
			}
		break;

		case "Verano":
			switch(destinoIngresado)
			{
				case "Bariloche":
					precioFinal = precio - ((precio * 20) / 100);
				break;
				case "Mar del plata":
					precioFinal = precio + ((precio * 20) / 100);
				break;
				case "Cataratas":
				case "Cordoba":
					precioFinal = precio + ((precio * 10) / 100);
				break;
			}
		break;
		
		case "Otoño":
		case "Primavera":
			switch(destinoIngresado)
			{
				case "Bariloche":
				case "Mar del plata":
				case "Cataratas":
					precioFinal = precio + ((precio * 10) / 100);
				break;
				case "Cordoba":
					precioFinal = precio;
				break;
			}
		break;
	}

	alert (precioFinal);
	
}//FIN DE LA FUNCIÓN







//                                                                                         CODIGO MAL OPTIMIZADO (pero bien)
/*    
switch(estacionIngresada)
	{
		case "Invierno":
			switch(destinoIngresado)
			{  
				case "Bariloche":
					aumento = ((precio * 20) / 100);
					precioFinal = precio + aumento;
					alert("Bariloche, en invierno, tiene un aumento del 20% y su precio final es de: " + precioFinal);
				break;
				case "Mar del plata":
					descuento = ((precio * 20) / 100);
					precioFinal = precio - descuento;
					alert("Mar del plata, en invierno, tiene un descuento del 20% y su precio final es de: " + precioFinal);
				break;
				case "Cataratas":
				case "Cordoba":
					descuento = ((precio * 10) / 100);
					precioFinal = precio - descuento;
					alert("Cataratas y Cordoba, en invierno, tienen un descuento del 10% y su precio final es de: " + precioFinal);
				break;
			}
		break;
		
		case "Verano":
			switch(destinoIngresado)
			{
				case "Bariloche":
					descuento = ((precio * 20) / 100);
					precioFinal = precio - descuento;
					alert("Bariloche, en invierno, tiene un descuento del 20% y su precio final es de " + precioFinal);
				break;
				case "Mar del plata":
					aumento = ((precio * 20) / 100);
					precioFinal = precio + aumento;
					alert("Mar del plata, en verano, tiene un aumento del 20% y su precio final es de " + precioFinal);
				break;
				case "Cataratas":
				case "Cordoba":
					aumento = ((precio * 10) / 100);
					precioFinal = precio + aumento;
					alert("Cataratas y Cordoba, en verano, tienen un aumento del 10% y su precio final es de " + precioFinal);
				break;
			}
		break;
		
		case "Otoño":
		case "Primavera":
			switch(destinoIngresado)
			{
				case "Bariloche":
				case "Mar del plata":
				case "Cataratas":
					aumento = ((precio * 10) / 100);
					precioFinal = precio + aumento;
					alert("Bariloche, Mar del plata y Cataratas, en otoño y primavera, tienen un aumento del 10% y su precio final es de " + precioFinal);
				break;
			    case "Cordoba":
					precioFinal = precio;
					alert("Cordoba, en otoño y primavera, tiene un precio final de " + precioFinal);
				break;
			}
        break;
	}

*/
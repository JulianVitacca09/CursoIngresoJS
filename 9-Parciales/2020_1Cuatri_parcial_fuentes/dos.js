/* Realizar el algoritmo que permita ingresar los datos de una compra productos de la construccion, hasta que el cliente quiera:
Tipo validad("arena";"cal";"cemento")
Cantidad de bolsas,
Precio por bolsa (más de cero ),

Si compro más de 10 bolsas en total tenes 15% de descuento sobre el total a pagar.
Si compro más de 30 bolsas en total tenes 25% de descuento sobre el total a pagar.
a) El importe total a pagar , bruto sin descuento y...
b) el importe total a pagar con descuento(solo si corresponde)
d) Informar el tipo con mas cantidad de bolsas.
f) El tipo mas caro*/
function mostrar()
{
    var tipo;
    var cantidadBolsas;
    var precioPorBolsa;
    var respuesta = true;
    var descuento;
    var acumuladorBolsasCal = 0;
    var acumuladorBolsasArena = 0;
    var acumuladroBolsasCemento = 0;
    var precioCal = 0;
    var precioArena = 0;
    var precioCemento = 0;
    var importeBruto;
    var importeConDescuento;
    var tipoConMasBolsas;
    var tipoMasCaro;
    var acumuladorCantidadBolsas = 0;
//------------------------------------

    do{
      tipo = prompt("Ingrese un producto de construccion");
      while (tipo != "cal" && tipo != "cemento" && tipo != "arena")
      {
        tipo = prompt("Producto invalido, ingrese cal, arena o cemento");
      }

      cantidadBolsas = prompt("Ingrese la cantidad de bolsas");
      cantidadBolsas = parseInt(cantidadBolsas);
      while (cantidadBolsas <= 0)
      {
        cantidadBolsas = prompt("Cantidad invalida, ingrese una cantidad mayor a 0");
        cantidadBolsas = parseInt(cantidadBolsas);
      }

      acumuladorCantidadBolsas = cantidadBolsas + acumuladorCantidadBolsas;
  
      precioPorBolsa = prompt("Ingrese el precio de la bolsa");
      precioPorBolsa = parseInt(precioPorBolsa);
      while (precioPorBolsa <= 0)
      {
        precioPorBolsa = prompt("Precio invalido, ingrese un precio mayor a 0");
        precioPorBolsa = parseInt(precioPorBolsa);
      }

      switch(tipo)
      {
        case "cal":
          acumuladorBolsasCal = acumuladorBolsasCal + cantidadBolsas;
          precioCal = precioCal + precioPorBolsa;
        break;
        case "cemento":
          acumuladroBolsasCemento = acumuladroBolsasCemento + cantidadBolsas;
          precioCemento = precioCemento + precioPorBolsa;
        break;
        default:
          acumuladorBolsasArena = acumuladorBolsasArena + cantidadBolsas;
          precioArena = precioArena + precioPorBolsa;
        break; 
      }

      respuesta = confirm("Desea ingresar otro producto?");

    }while (respuesta == true);

    importeBruto = precioCal + precioArena + precioCemento;

    if(acumuladorCantidadBolsas >= 10 && acumuladorCantidadBolsas < 30)
    {
      descuento = ((importeBruto * 15) /100);
      importeConDescuento = importeBruto - descuento;
    }
    else
    {
      if(acumuladorCantidadBolsas >= 30)
      {
        descuento = ((importeBruto * 25) /100);
        importeConDescuento = importeBruto - descuento;
      }
      else
      {
        importeConDescuento = importeBruto;
      }
    }

    if(acumuladorBolsasCal > acumuladorBolsasArena && acumuladorBolsasCal > acumuladroBolsasCemento)
    {
      tipoConMasBolsas = "Cal";
    }
    else
    {
      if(acumuladroBolsasCemento > acumuladorBolsasCal && acumuladroBolsasCemento > acumuladorBolsasArena)
      {
        tipoConMasBolsas = "Cemento";
      }
      else 
      {
        if(acumuladorBolsasArena > acumuladorBolsasCal && acumuladorBolsasArena > acumuladroBolsasCemento)
        {
        tipoConMasBolsas = "Arena";
        }
      }
    }

    if(precioCal > precioArena && precioCal > precioCemento)
    {
      tipoMasCaro = "Cal";
    }
    else
    {
      if(precioArena > precioCal && precioArena > precioCemento)
      {
        tipoMasCaro = "Arena";
      }
      else
      {
        if(precioCemento > precioArena && precioCemento > precioCal)
        {
          tipoMasCaro = "Cemento";
        }
      }
    }

    document.write("A) El importe total a pagar, bruto sin descuento, es de: " + importeBruto + "<br>");
    document.write("B) El importe total a pagar, con descuento, es de: " + importeConDescuento.toFixed(2) + "<br>");
    document.write("C) El tipo con mas cantidad de bolsas es: " + tipoConMasBolsas + "<br>");
    document.write("D) El tipo mas caro es: " + tipoMasCaro);

}

//JULIAN VITACCA
//EJERCICIO 4
//Las lámparas están al mismo precio de $35 pesos final.
//A. Si compra 6 o más lamparitas bajo consumo tiene un descuento del 50%.
//B. Si compra 5 lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
//C. Si compra 4 lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
//D. Si compra 3 lamparitas bajo consumo marca "ArgentinaLuz" el descuento es del 15%, si es “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
//E. Si el importe final con descuento suma más de $120 se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje: ”IIBB Usted pago X”, siendo X el impuesto que se pagó.

function CalcularPrecio () 
{
    var precioLamparitas;
    var cantidadLamparitas;
    var marcaLamparitas;
    var descuento;
    var precioTotal;
    var precioConDescuento;
    var iibb;
    var costoIibb;
        
    precioLamparitas = 35;
    iibb = 0.1;
    costoIibb = 0;
    cantidadLamparitas = txtIdCantidad.value;
    cantidadLamparitas = parseInt(cantidadLamparitas);
    marcaLamparitas = Marca.value;
    precioTotal = cantidadLamparitas * precioLamparitas;

    if(cantidadLamparitas>2)
     {
         switch(cantidadLamparitas)
         {
             case 3:
                if(marcaLamparitas == "ArgentinaLuz")
                {
                    descuento = 0.85;
                }
                else
                {
                    if(marcaLamparitas == "FelipeLamparas")
                    {
                        descuento = 0.9;
                    }
                    else
                    {
                        descuento = 0.95;
                    }
                }
                break;

            case 4:
                if(marcaLamparitas == "ArgentinaLuz" || marcaLamparitas == "FelipeLamparas")
                {
                    descuento = 0.75;
                }
                else
                {
                    descuento = 0.80;
                }
                break;  

            case 5:
                if(marcaLamparitas == "ArgentinaLuz")
                {
                    descuento = 0.60;
                }
                else
                {
                    descuento = 0.70;
                }
                break;

            default:
                descuento = 0.5;
         }
         precioConDescuento = precioTotal * descuento;
        }

        if(precioConDescuento > 120)
        {
            costoIibb = precioConDescuento * iibb;      
            alert("Usted pago $" + costoIibb.toFixed(2) + " de IIBB.")
            precioTotal = precioConDescuento + costoIibb;
     }
     
    txtIdprecioDescuento.value = precioTotal.toFixed(2);

}



/*
var cantidadDeLamparitas;
var precioTotalLamparitas;
var descuento;
var precio;
var marca;
var ingresosBrutos;
var precioIngresosBrutos;
//-----------------------------

cantidadDeLamparitas = txtIdCantidad.value;
cantidadDeLamparitas = parseInt(cantidadDeLamparitas);
precioTotalLamparitas = cantidadDeLamparitas * 35;
marca = Marca.value;

//                                                                                                          A) Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
if(cantidadDeLamparitas >= 6)
{
    descuento = ((precioTotalLamparitas * 50)/100);
    precio = (precioTotalLamparitas - descuento);
}

//                                                                                                              B) Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un
//                                                                                                                    descuento del 40 % y si es de otra marca el descuento es del 30%.
else
{
    if(cantidadDeLamparitas == 5)
    {
        if(marca == "ArgentinaLuz")
        {
            descuento = ((precioTotalLamparitas * 40)/100);
            precio = (precioTotalLamparitas - descuento);
        }
    
        else
        {
            descuento = ((precioTotalLamparitas * 30)/100);
            precio = (precioTotalLamparitas - descuento);
        }

    }

//                                                                                            C) Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un 
//                                                                                                                     descuento del 25 % y si es de otra marca el descuento es del 20%.
    else
    {
        if(cantidadDeLamparitas == 4)
        {
            if(marca == "ArgentinaLuz" || marca == "FelipeLamparas")
            {
                descuento = ((precioTotalLamparitas * 25)/100);
                precio = (precioTotalLamparitas - descuento);
            }

            else
            {
                descuento = ((precioTotalLamparitas * 20)/100);
                precio = (precioTotalLamparitas - descuento);
            }
        }

//                                                                                                D) Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, 
//                                                                                                    si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
        else
        {
            if(cantidadDeLamparitas == 3)
            {
                if(marca == "ArgentinaLuz")
                {
                    descuento = ((precioTotalLamparitas * 15)/100);
                    precio = (precioTotalLamparitas - descuento);
                }
            }

            else 
            {
                if(marca == "FelipeLamparas")
                {
                    descuento = ((precioTotalLamparitas * 10)/100);
                    precio = (precioTotalLamparitas - descuento);
                }

                else
                {
                    descuento = ((precioTotalLamparitas * 5)/100);
                    precio = (precioTotalLamparitas - descuento);
                }
            }
        }
    }
}//fin del else grande.

//                                                                                       E) Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos 
//                                                                                 en informar del impuesto con el siguiente mensaje: ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó.
if(precio > 120)
{
    ingresosBrutos = ((precio * 10)/100);
    alert ("Usted pago " + ingresosBrutos + " de IIBB");
}

txtIdprecioDescuento.value = precio + ingresosBrutos;

*/
//JULIAN VITACCA
//EJERCICIO 4

function CalcularPrecio () 
{
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
}

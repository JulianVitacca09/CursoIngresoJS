//JULIAN VITACCA
//EJERCICIO 4

function CalcularPrecio () 
{
    var cantidadDeLamparitas;
    var lamparitas;
    var descuento;
    var precio;
    var marca;
    var ingresosBrutos;
    var precioIngresosBrutos;
//-----------------------------
    
    cantidadDeLamparitas = txtIdCantidad.value;
    cantidadDeLamparitas = parseInt(cantidadDeLamparitas);
    marca = Marca.value;

//----A) Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 

    if(cantidadDeLamparitas >= 6)
    {
        lamparitas = cantidadDeLamparitas * 35;
        descuento = ((lamparitas * 50)/100);
        precio = (lamparitas - descuento);
        
        txtIdprecioDescuento.value = precio;
    }

//----B) Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
    
    if(cantidadDeLamparitas == 5)
    {
        if(marca == "ArgentinaLuz")
        {
            lamparitas = cantidadDeLamparitas * 35;
            descuento = ((lamparitas * 40)/100);
            precio = (lamparitas - descuento);

            txtIdprecioDescuento.value = precio;
        }
       
        else
        {
            lamparitas = cantidadDeLamparitas * 35;
            descuento = ((lamparitas * 30)/100);
            precio = (lamparitas - descuento);

            txtIdprecioDescuento.value = precio;
        }

    }

//----C) Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.

    if(cantidadDeLamparitas == 4)
    {
        if(marca == "ArgentinaLuz" || marca == "FelipeLamparas")
        {
            lamparitas = cantidadDeLamparitas * 35;
            descuento = ((lamparitas * 25)/100);
            precio = (lamparitas - descuento);

            txtIdprecioDescuento.value = precio; 
        }

        else
        {
            lamparitas = cantidadDeLamparitas * 35;
            descuento = ((lamparitas * 20)/100);
            precio = (lamparitas - descuento);

            txtIdprecioDescuento.value = precio; 
        }
    }

//----D) Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.

    if(cantidadDeLamparitas == 3)
    {
        if(marca == "ArgentinaLuz")
        {
            lamparitas = cantidadDeLamparitas * 35;
            descuento = ((lamparitas * 15)/100);
            precio = (lamparitas - descuento);

            txtIdprecioDescuento.value = precio; 
        }
    }

    else 
    {
        if(marca == "FelipeLamparas")
        {
            lamparitas = cantidadDeLamparitas * 35;
            descuento = ((lamparitas * 10)/100);
            precio = (lamparitas - descuento);

            txtIdprecioDescuento.value = precio;
        }

        else
        {
            lamparitas = cantidadDeLamparitas * 35;
            descuento = ((lamparitas * 5)/100);
            precio = (lamparitas - descuento);

            txtIdprecioDescuento.value = precio;
        }
    }
 
//----E) Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
//”Usted pago X de IIBB.”, siendo X el impuesto que se pagó.

    if(precio > 120)
    {
        ingresosBrutos = ((precio * 10)/100);
        precioIngresosBrutos = precio + ingresosBrutos;

        alert ("Usted pago " + precioIngresosBrutos + " de IIBB");

    }

}

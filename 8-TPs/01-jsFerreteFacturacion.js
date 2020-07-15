/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
    var precioUno;
    var precioDos;
    var precioTres;
    var suma;
//----------------------
    
    precioUno = txtIdPrecioUno.value;
    precioDos = txtIdPrecioDos.value;
    precioTres = txtIdPrecioTres.value;

    precioUno = parseInt (precioUno);
    precioDos = parseInt (precioDos);
    precioTres = parseInt (precioTres);

    suma = precioUno + precioDos + precioTres;

    alert("El precio de los tres productos es de: $" + suma);
}

function Promedio () 
{
    var precioUno;
    var precioDos;
    var precioTres;
    var promedios;
//----------------------
    
    precioUno = txtIdPrecioUno.value;
    precioDos = txtIdPrecioDos.value;
    precioTres = txtIdPrecioTres.value;

    precioUno = parseInt (precioUno);
    precioDos = parseInt (precioDos);
    precioTres = parseInt (precioTres);

    promedios = (precioUno + precioDos + precioTres) / 3;

    alert("El promedio de los tres productos es de: " + promedios);	
}

function PrecioFinal () 
{
    var precioUno;
    var precioDos;
    var precioTres;
    var preciosFinales;
    var iva = ((21*10)/100);
//----------------------
    
    precioUno = txtIdPrecioUno.value;
    precioDos = txtIdPrecioDos.value;
    precioTres = txtIdPrecioTres.value;

    precioUno = parseInt (precioUno);
    precioDos = parseInt (precioDos);
    precioTres = parseInt (precioTres);

    preciosFinales = precioUno + precioDos + precioTres;
    preciosFinales = preciosFinales + iva;

    alert("El precio final (mas IVA 21%) de los tres productos es de: $" + preciosFinales);
}
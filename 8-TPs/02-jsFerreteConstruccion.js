/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
    var largo;
    var ancho;
    var perimetro;
//----------------

    largo = txtIdLargo.value;
    ancho = txtIdAncho.value;

    largo = parseInt(largo);
    ancho = parseInt(ancho);

    perimetro = ((largo  + ancho )*2)
    perimetro = (perimetro * 3)

    alert("Se tiene que comprar una cantidad de " + perimetro );
}

function Circulo () 
{
    var radio;
    var cantidad;
//----------------
    
    radio = txtIdRadio.value;
    radio = parseInt(radio);

    cantidad = (radio / 6.28);  // 6.28 = 2π
    cantidad = (cantidad * 3)

    alert("La cantidad de alambre a comprar es de " + cantidad);
}

function Materiales () 
{
    var cemento = 2;
    var cal = 3;
    var largo;
    var ancho;
    var superficie;
//----------------

    largo = txtIdLargo.value;
    ancho = txtIdAncho.value;

    largo = parseInt(largo);
    ancho = parseInt(ancho);

    superficie = (ancho * largo);
    
    cemento = (superficie * cemento);
    cal = (superficie * cal);


    alert("Se deben comprar " + cemento + " bolsas de cemento y " + cal + " bolsas de cal");
}
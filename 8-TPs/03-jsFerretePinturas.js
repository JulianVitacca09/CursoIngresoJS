/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados () 
{
    var temperatura;
    var gradosCentigrados;
//------------------------------

    temperatura = txtIdTemperatura.value;
    temperatura = parseInt(temperatura);

    gradosCentigrados = ((temperatura - 32) / 1.8);

    alert("La temperatura en grados centigrados es de " + gradosCentigrados);
    
    
}

function CentigradosFahrenheit () 
{
    var temperatura;
    var gradosFahrenheit;
//-------------------------------

    temperatura = txtIdTemperatura.value;
    temperatura = parseInt(temperatura);

    gradosFahrenheit = ((temperatura * 1.8) + 32);

    alert("La temperatura en grados fahrenheit es de " + gradosFahrenheit);
}

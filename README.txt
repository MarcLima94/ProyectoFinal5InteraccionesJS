Proyecto Museo: Foto Museo Cuatro Caminos
Exposición: Doble Play: Fotografía Cubana de Hoy

1.// Cambio de color en header con id='nosotros'.
const nosotros = document.getElementById('nosotros');

Al dar clic en "Quienes Somos", la parte del fondo del Header cambiará de color verde azulado a 
verde limón.

2.// Manipular audio
const audioMarc = document.getElementById('audioMarc');
const empieza = document.getElementById('empieza');
const termina = document.getElementById('termina');

En la parte de hasta abajo aparecen las opciones de "Reproducir Ambientación" y "Detener Ambientación",
la idea es que al ver las imágenes, de clic en "Reproducir Ambientación" para una mejor experiencia para
el usuario y la pueda detener en el momento que prefiera con "Detener Ambientación". 
(Lo puede reproducir y detener cuantas veces quiera y volvera al principio de la música).

3.// Animaciones tarjetas.
const actividades = document.getElementById('actividades');
const tarjetas = document.getElementsByClassName('size');

Al dar clic en "Actividades", todas las imágenes cambiarán su altura y anchura, a un 50% en ambos casos.  

4.// Cambio de color al presionar.
const textCambio = document.getElementsByClassName('cambioColor');
const arrTextCambio = Array.prototype.slice.call(textCambio);

Al dar clic en el título de cada imagen, cambiará de color verde(predeterminado) a azul.

5.// Aparece número de la empresa al dar clic en Unete a Nosotros
const unete = document.getElementById('unete');

Al dar clic en "Unete Al Equipo", aparecerá el número para ponerte en contacto con el museo: "Comunícate 
al: 24-56-78-90" y poder trabajar con ellos o realizar tu servicio social.

NOTA: Para volver a ver una interacción a la que ya se dio clic es necesario darle F5 (Excepto en la 
parte de "Reproducir Ambientación y Detener Ambientación", en estas no es necesario darles F5).
Hice 6 interacciones con JavaScript si se cuenta que "Reproducir y Detener Ambientación" son 2, 
unicamente las transiciones que se dan al pasar el mouse en cada imagen, esas fueron con CSS. 
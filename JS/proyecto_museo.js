// Cambio de color en header con id='nosotros'.
const nosotros = document.getElementById('nosotros');
// Manipular audio
const audioMarc = document.getElementById('audioMarc');
const empieza = document.getElementById('empieza');
const termina = document.getElementById('termina');
// Animaciones tarjetas.
const actividades = document.getElementById('actividades');
const tarjetas = document.getElementsByClassName('size');

nosotros.addEventListener('click', function () {
    const header = document.getElementById('header');
    header.style.backgroundColor = "#AED581";
});

empieza.addEventListener('click', function () {
    audioMarc.play();
})

termina.addEventListener('click', function () {
    audioMarc.load();
});

actividades.addEventListener('click', function() {
	const arrTarjetas = Array.prototype.slice.call(tarjetas);
	arrTarjetas.forEach(function(element) {
		element.style.width = '50%';
		element.style.height = '50%';
	})
});

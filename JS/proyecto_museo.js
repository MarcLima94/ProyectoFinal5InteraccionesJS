// Cambio de color en header con id='nosotros'.
const nosotros = document.getElementById('nosotros');
// Manipular audio
const audioMarc = document.getElementById('audioMarc');
const empieza = document.getElementById('empieza');
const termina = document.getElementById('termina');
// Animaciones tarjetas.
const actividades = document.getElementById('actividades');
const tarjetas = document.getElementsByClassName('size');
// Cambio de color al presionar.
const textCambio = document.getElementsByClassName('cambioColor');
const arrTextCambio = Array.prototype.slice.call(textCambio);
// Aparece número de la empresa al dar clic en Unete a Nosotros
const unete = document.getElementById('unete');
const digital = document.getElementById('digital');

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
// Al presionar generar cambio de color en <p/>.
arrTextCambio.forEach(function(element) {
	element.addEventListener('click', function(e) {
		e.target.style.color = '#01579B';
    });
});
// Aparece número de la empresa al dar clic en Unete a Nosotros
function changeText(id) {
    id.innerHTML = "Comunícate al: 24-56-78-90";
}
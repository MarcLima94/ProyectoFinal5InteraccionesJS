/**Declarar variables */
const nosotros = document.getElementById('nosotros');
const audioMarc = document.getElementById('audioMarc');
const empieza = document.getElementById('empieza');
const termina = document.getElementById('termina');

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
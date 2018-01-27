/**Declarar variables */
const nosotros = document.getElementsById('nosotros');
console.log(nosotros);
nosotros.addEventListener('click', function () {
    const header = document.getElementsByTagName('header');
    header.style.backgroundColor = "#AED581";
});
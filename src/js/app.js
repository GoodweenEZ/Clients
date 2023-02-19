const burgerIcon = document.querySelector('.burger__icon');
const bodyMenu = document.querySelector('.menu__body');
if (burgerIcon) {
	burgerIcon.addEventListener('click', function (e) {
		document.body.classList.toggle('lock');
		burgerIcon.classList.toggle('_acitve');
		bodyMenu.classList.toggle('_acitve');
	});
}

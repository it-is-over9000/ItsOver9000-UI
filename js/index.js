let knightHead = document.querySelector('.knight-head');
console.log(knightHead);
let knightBody = document.querySelector('.knight-body');
console.log(knightBody);

window.addEventListener('load', () => knightHeadAnimation());
window.addEventListener('load', () => knightBodyAnimation());

function knightHeadAnimation() {
	TweenMax.from(knightHead, 2, {
		x: -100,
		y: 100,
		opacity: 0,
		ease: Back.easeOut,
	});
}

function knightBodyAnimation() {
	TweenMax.from(knightBody, 2, {
		x: 100,
		y: -100,
		opacity: 0,
		ease: Back.easeOut,
	});
}
let knightHead = document.querySelector('.knight-head');
let knightBody = document.querySelector('.knight-body');
let knightSeperator = document.querySelector('.knight-seperator');

window.addEventListener('load', () => knightSeperatorAnimation());

function knightSeperatorAnimation() {
	TweenMax.from(knightSeperator, 1, {
		x: -200,
		y: 200,
		opacity: 0,
		ease: Back.easeOut,
		onComplete: () => {
			knightHead.style.opacity = 1;
			knightBody.style.opacity = 1;
			knightHeadAnimation();
			knightBodyAnimation();
		},

	});
}

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
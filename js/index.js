let knightHead = document.querySelector('.knight-head');
let knightBody = document.querySelector('.knight-body');
let knightSeperator = document.querySelector('.knight-seperator');
let leftSection = document.querySelector('.left-section');
let logInPanel = document.querySelector('.log-in-panel');
let logInBtn = document.querySelector('.log-in-btn');
let logo = document.querySelector('.logo');

window.addEventListener('load', () => knightSeperatorAnimation());
logInBtn.addEventListener('click', () => {
	logInPanel.style.opacity = 1;
	logInPanelAnimation();
});

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
	TweenMax.from(knightHead, 1.2, {
		x: -100,
		y: 100,
		opacity: 0,
		ease: Back.easeOut,
	});
}

function knightBodyAnimation() {
	TweenMax.from(knightBody, 1.2, {
		x: 100,
		y: -100,
		opacity: 0,
		ease: Back.easeOut,
		onStart: () => {
			leftSection.style.opacity = 1;
			logInBtn.style.opacity = 1;
			titleInAnimation();
			logInBtnAnimation();
		}
	});
}

function titleInAnimation() {
	TweenMax.from(leftSection, 1.2, {
		x: -100,
		opacity: 0,
		ease: Back.easeOut,
	});
}

function logInPanelAnimation() {
	if(logInPanel.classList.contains('active')) {
		TweenMax.to(logInPanel, 1.2, {
			y: -100,
			rotationY: 360,
			opacity: 0,
			ease: Back.easeOut,
			onStart: () => {rotateKnight()},
			onComplete: () => {
				TweenMax.to(logInPanel, 0.1, {y:0,rotationY:0});
			},
		});
		logInPanel.classList.toggle('active');
	} else {
		TweenMax.from(logInPanel, 1.2, {
			y: -100,
			rotationY: -360,
			opacity: 0,
			ease: Back.easeOut,
			onStart: () => {rotateKnight()},
		});
		logInPanel.classList.toggle('active');
	}
}

function logInBtnAnimation() {
	TweenMax.from(logInBtn, 1.2, {
		y: -100,
		opacity: 0,
		ease: Back.easeOut,
	});
}

let knightActive = false;

function rotateKnight() {
	if (knightActive === false) {
		TweenMax.to(logo, .4, {
			rotationY: 180,
			marginRight: -16,
		});
		knightActive = true;
	} else {
		TweenMax.to(logo, .4, {
			rotationY: 0,
			marginRight: 16,
		});
		knightActive = false;
	}
}
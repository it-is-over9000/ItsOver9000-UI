
class Card {
	constructor(element) {
		this.card = element;

		this.content = this.card.querySelector('.content');

		this.card.addEventListener('click', () => {
	      this.toggleContent();
	    });
	}

    toggleContent() {
   		if (this.content.classList.contains('hidden')) {
   			this.content.classList.toggle('hidden');
   			TweenMax.from(this.content, .5, {
		        height: 0,
		    });
   		} else {
		    this.content.classList.toggle('hidden');
   		}

    }
}

let cards = document.querySelectorAll('.card');
Array.from(cards).map(card => { new Card(card)});

//Randomizer - rearranges the order of team members.
let nums = [];

//fill the nums array with random numbers (0-100)
for (let i=0; i<8; i++) {
	nums.push(Math.floor(Math.random()*Math.floor(100)));
}

//assigns an order value to each card / person.
Array.from(cards).forEach(card => { card.style.order = nums.pop()});


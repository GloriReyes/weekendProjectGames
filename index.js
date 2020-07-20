let readlineSync = require('readline-sync');

let userName = readlineSync.question(
	"POOR SOULS: Welcome to your first Web Dev INTERVIEW! What's your name hot shot? I'll let them know you've arrived. "
);
console.log(`Ok ${userName}. Drink while you wait? Tea or Wine?`);
const drinkSelection = readlineSync.keyInSelect([ 'Green Tea, please, kindly, smile', 'Pinot' ], 'What you guzzlin?');
if (drinkSelection === 0) {
	console.log('"I knew you were one of the good ones. Remind me of my newphew. Wait right here."');
} else {
	console.log('"Aha! A Junior with a sense of sense of humor. I dig it. Hahahaha...I\'ll be right back."');
}
console.log(
	'Gabriel leaves to get your beverage. Your phone stays in your pocket, you want to look engaged after all! You walk around the waiting room and see a framed award hanging on the wall for Best Business Conduct. Hmmm...'
);
const waitingRoom = readlineSync.keyInSelect(
	[ "Fix it, it's crooked", 'Let Gabriel catch you taking a photo to earn you some sweet, sweet brownie points' ],
	'Your better judgment:'
);
if (waitingRoom === 0) {
	console.log(
		'Shit! It fell! Quick kick it under the table! \n "....Hey sugar, they\'re ready for you. I\'ll drink this tea for you"'
	);
} else if (waitingRoom === 1) {
	console.log(
		`"\nThat's just precious. Nail the interview and you might win your own award ${userName}. They're ready for you."`
	);
}

console.log(' ');

console.log(
	`"${userName} - it's good to meet you and finally put a face to the name. Names alone can be so hard to remember..."`
);
console.log("Shit, what's her name?\n");

const guess = readlineSync.keyInSelect(
	[ 'Guess!', 'Smile harder and distract her with your excitement!!!!' ],
	'No going back:\n'
);
if (guess === 0) {
	let randomNames = [ 'Jody ', 'Anferny', 'Ratalia' ];
	let myGuess = Math.floor(Math.random() * randomNames.length - 1);
	console.log(randomNames[myGuess]);
} else if (guess === 1) {
}

console.log('\nPhew - you got through the door. You have a nice chat and manage to keep your sweat on the inside.');

//wanted to add a loop with array of objects here but running out of time!

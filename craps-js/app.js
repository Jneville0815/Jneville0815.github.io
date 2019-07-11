var bet, total = 500, roll, target, gamePlaying, firstRoll;
document.getElementById('total').textContent = total;

function init() {
	gamePlaying = true;
	firstRoll = true;
	bet = 0;
	roll = 0;
	target = 0;

	document.getElementById('bet').textContent = '0';
}

function enterBet() {
	init();
	bet = document.getElementById('form-0').value;
	bet = parseInt(bet);

	if(bet <= 0 || bet > total || isNaN(bet)) {
		alert('Enter a bet between 1 and ' + total);
	} else {
		document.getElementById('bet').textContent = bet;
		document.querySelector('.bet-container').style.display = 'none';
		document.querySelector('.btn-roll').style.display = 'inline-block';
	}
}

document.querySelector('.btn-roll').addEventListener('click', function() {
	if(gamePlaying && bet > 0) {
		document.querySelector('.dice-container').style.display = 'block';

		var dice1 = Math.floor(Math.random() * 6) + 1;
		var dice2 = Math.floor(Math.random() * 6) + 1;

		var dice = dice1 + dice2;

		document.getElementById('d-1').src = 'dice-' + dice1 + '.png';
		document.getElementById('d-2').src = 'dice-' + dice2 + '.png';

		document.getElementById('rolled').style.display = 'block';
		document.getElementById('current-roll').textContent = dice;
		if(firstRoll === true){
			if(dice === 2){
				total -= bet;
				changeScore('snake-eyes', '-');
			} else if(dice === 12){
				total -= bet;
				changeScore('box-cars', '-');
			} else if(dice === 7){
				total += bet;
				changeScore('lucky-7', '+');
			} else if(dice === 11){
				total += bet;
				changeScore('lucky-11', '+');
			} else {
				target = dice;
				document.getElementById('current').style.display = 'block';
				document.getElementById('current-target').textContent = target;
				firstRoll = false;
			}
		} else if(dice === target) {
			total += bet;
			changeScore('success', '+');
		} else if(dice === 7){
			total -= bet;
			document.getElementById('current').style.display = 'none';
			changeScore('unlucky-7', '-');
		}
	}
});

function changeScore(diceRoll, sign) {
	document.getElementById('amount-changed').style.display = 'inline-block';
	document.getElementById('amount-changed').textContent = sign + '$' + bet;
	document.getElementById(diceRoll).style.display = 'block';
	document.getElementById('total').textContent = total;
	gamePlaying = false;
	document.querySelector('.play-again').style.display = 'inline-block';
	document.querySelector('.btn-roll').style.display = 'none';
}

document.querySelector('.play-again').addEventListener('click', function() {
	init();
	playAgain();
	startOver();
});

function playAgain() {
	document.getElementById('current').style.display = 'none';
	document.getElementById('rolled').style.display = 'none';
	document.querySelector('.btn-roll').style.display = 'none';
	document.querySelector('.dice-container').style.display = 'none';
	document.querySelector('.play-again').style.display = 'none';
	document.querySelector('.bet-container').style.display = 'inline-block';
	document.getElementById('amount-changed').style.display = 'none';
	document.getElementById('target-hit').style.display = 'none';
	document.getElementById('snake-eyes').style.display = 'none';
	document.getElementById('box-cars').style.display = 'none';
	document.getElementById('lucky-7').style.display = 'none';
	document.getElementById('unlucky-7').style.display = 'none';
	document.getElementById('lucky-11').style.display = 'none';
	document.getElementById('success').style.display = 'none';
}

function startOver() {
	if(total <= 0){
		total = 500;
		document.getElementById('total').textContent = total;
		alert('Try your luck again! Game restarting...');
	}
}
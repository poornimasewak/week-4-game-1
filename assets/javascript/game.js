$(document).ready(function() {

	var starWars={
		darth: {
			name: 'Darth Vader',
			image: '../images/darthvaderlego.png',
	    	healthPoints: 120,
	   		attackPower: 9,
	    	counterAttackPower: 6,
	},

		yoda: {
			name: 'Yoda',
			image: '../images/yodalego.png',
	    	healthPoints: 180,
	    	attackPower: 12,
	    	counterAttackPower: 10,
	},

		kylo: {
			name: 'Kylo Ren',
			image: '../images/kyloren.png',
	    	healthPoints: 100,
	    	attackPower: 8,
	    	counterAttackPower: 10,
	},

	 	leia: {
			name: 'Princess Leia',
			image: '../images/princessleialego.png',
	    	healthPoints: 150,
	   		attackPower: 10,
	    	counterAttackPower: 11,
	},
};

	var darthCharacter = $('#darth');
	var yodaCharacter = $('#yoda');
	var kyloCharacter = $('#kylo');
	var leiaCharacter = $('#leia');

	var currentCharacter;
	var currentEnemy;

	//Getting the healthPoints to display under the character
	$(darthCharacter).find('.caption-HP').html(starWars.darth.healthPoints);
	$(yodaCharacter).find('.caption-HP').html(starWars.yoda.healthPoints);
	$(kyloCharacter).find('.caption-HP').html(starWars.kylo.healthPoints);
	$(leiaCharacter).find('.caption-HP').html(starWars.leia.healthPoints);
	//When a character is chosen, the other 3 get put into enemies

	$('#characterSection').on('click', '#darth', function() {
	    $('#darth, #kylo, #leia #yoda').removeClass('unassigned-character');
	    $('#yoda, #kylo, #leia').addClass('enemy-character');
	    $('#darth').addClass('selected-character');
	    $('#yoda, #kylo, #leia').appendTo('#enemiesSection');
	    currentCharacter = starWars.darth;
	});
	$('#characterSection').on('click', '#yoda', function() {
	    $('#darth, #kylo, #leia #yoda').removeClass('unassigned-character');
	    $('#darth, #kylo, #leia').addClass('enemy-character');
	    $('#yoda').addClass('selected-character');
	    $('#darth, #kylo, #leia').appendTo('#enemiesSection');
	    currentCharacter = starWars.yoda;
	});
	$('#characterSection').on('click', '#kylo', function() {
	    $('#yoda, #darth, #leia, #kylo').removeClass('unassigned-character');
	    $('#yoda #darth #leia').addClass('enemy-character');
	    $('#kylo').addClass('selected-character');
	    $('#darth, #yoda, #leia').appendTo('#enemiesSection');
	    currentCharacter = starWars.kylo;
	});
	$('#characterSection').on('click', '#leia', function() {
	    $('#yoda, #kylo, #darth, #leia').removeClass('unassigned-character');
	    $('#yoda #kylo #darth').addClass('enemy-character');
	    $('#leia').addClass('selected-character');
	    $('#darth, #yoda, #kylo').appendTo('#enemiesSection');
	    currentCharacter = starWars.leia;
	});

	//Choosing your enemy and moving that character into defender section
	$('#enemiesSection').on('click', '#darth', function() {
	    $('#darth, #yoda, #kylo, #leia').removeClass('enemy-character');
	    $('#yoda, #kylo, #leia').addClass('waiting-enemies');
	    $('#darth').addClass('current-enemy');
	    $('.current-enemy').appendTo('#defenderSection');
	    currentEnemy = starWars.darth;
	});

	$('#enemiesSection').on('click', '#yoda', function() {
	    $('#darth, #yoda, #kylo, #leia').removeClass('enemy-character');
	    $('#darth, #kylo, #leia').addClass('waiting-enemies');
	    $('#yoda').addClass('current-enemy');
	    $('.current-enemy').appendTo('#defenderSection');
	    currentEnemy = starWars.yoda;
	});

	$('#enemiesSection').on('click', '#kylo', function() {
	    $('#darth, #yoda, #kylo, #leia').removeClass('enemy-character');
	    $('#darth, #yoda, #leia').addClass('waiting-enemies');
	    $('#kylo').addClass('current-enemy');
	    $('.current-enemy').appendTo('#defenderSection');
	    currentEnemy = starWars.kylo;
	});

	$('#enemiesSection').on('click', '#leia', function() {
	    $('#darth, #yoda, #kylo, #leia').removeClass('enemy-character');
	    $('#darth, #yoda, #kylo').addClass('waiting-enemies');
	    $('#leia').addClass('current-enemy');
	    $('.current-enemy').appendTo('#defenderSection');
	    currentEnemy = starWars.leia;
	});

	$('#attack').on('click', function() {
		// alert ('Attack!!!!');
	    currentEnemy.healthPoints = currentEnemy.healthPoints - currentCharacter.attackPower;
	    currentCharacter.healthPoints = currentCharacter.healthPoints - currentEnemy.counterAttackPower;
	    $('.caption-HP', '#defenderSection').html(currentEnemy.healthPoints);
	    $('.caption-HP', '#characterSection').html(currentCharacter.healthPoints);
	});

	if (currentCharacter.healthPoints <= 0) {
		alert ('Game Over!');
	}
	else {
		alert ('Pick a New Defender!');
	}
});





















function round5(x) {
    return Math.ceil(x/5)*5;
};

function populateWeight(week, weight, perc) {
	for(let i = 0; i < 3; i++) {
		let arg = "#fw";
		arg += i;
		$(arg).text(round5(perc*weight));
		perc += .10;
	}
}

function populateReps(num1, num2) {
	$("#r0").text(num1);
	$("#r1").text(num2);
}

function makeTables() {
	var week = document.getElementById("i0").value;
	var weight = document.getElementById("i1").value;
	weight *= 0.90;

	let perc = 0.40;
	for(let i = 0; i < 3; i++) {
		let arg = "#w";
		arg += i;
		$(arg).text(round5(perc*weight));
		perc += .10;
	}
	if(week == 1){
		populateReps(5, 5);
		populateWeight(week, weight, 0.65);
	}
	else if(week == 2){
		populateReps(3, 3);
		populateWeight(week, weight, 0.70);	
	}
	else if(week == 3){
		populateReps(5, 3);
		populateWeight(week, weight, 0.75);
	}
	else if(week == 4){
		populateReps(5, 5);
		populateWeight(week, weight, 0.40);

		document.getElementById("t1").style.display = "none";
		document.getElementById("uf").innerHTML = 5;
	}
};
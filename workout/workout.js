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

// -----------------------------------------------------------------------------------

Date.prototype.getWeekNumber = function(){
  var d = new Date(Date.UTC(this.getFullYear(), this.getMonth(), this.getDate()));
  var dayNum = d.getUTCDay() || 7;
  d.setUTCDate(d.getUTCDate() + 4 - dayNum);
  var yearStart = new Date(Date.UTC(d.getUTCFullYear(),0,1));
  return Math.ceil((((d - yearStart) / 86400000) + 1)/7)
};

let inaccurateWeek = new Date().getWeekNumber() % 4 + 1;

if(inaccurateWeek === 3){
	inaccurateWeek = 2;
} else if(inaccurateWeek === 4){
	inaccurateWeek = 3;
} else if(inaccurateWeek === 1){
	inaccurateWeek = 4;
} else if(inaccurateWeek === 2){
	inaccurateWeek = 1;
}

$("#cur-week").text(inaccurateWeek);

// -----------------------------------------------------------------------------------
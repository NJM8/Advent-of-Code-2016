let input = 'R4, R4, L1, R3, L5, R2, R5, R1, L4, R3, L5, R2, L3, L4, L3, R1, R5, R1, L3, L1, R3, L1, R2, R2, L2, R5, L3, L4, R4, R4, R2, L4, L1, R5, L1, L4, R4, L1, R1, L2, R5, L2, L3, R2, R1, L194, R2, L4, R49, R1, R3, L5, L4, L1, R4, R2, R1, L5, R3, L5, L4, R4, R4, L2, L3, R78, L5, R4, R191, R4, R3, R1, L2, R1, R3, L1, R3, R4, R2, L2, R1, R4, L5, R2, L2, L4, L2, R1, R2, L3, R5, R2, L3, L3, R3, L1, L1, R5, L4, L4, L2, R5, R1, R4, L3, L5, L4, R5, L4, R5, R4, L3, L2, L5, R4, R3, L3, R1, L5, R5, R1, L3, R2, L5, R5, L3, R1, R4, L5, R4, R2, R3, L4, L5, R3, R4, L5, L5, R4, L4, L4, R1, R5, R3, L1, L4, L3, L4, R1, L5, L1, R2, R2, R4, R4, L5, R4, R1, L1, L1, L3, L5, L2, R4, L3, L5, L4, L1, R3';


let inputArray = input.split(', ');


let me = {
	direction: 'N',
	position: [0,0]    // [ X, Y ]
}

let directions = ['N', 'E', 'S', 'W'];

function move(me, instruction){
	translateDirection(me, instruction[0]);
	
	switch (me.direction){
		case 'N':
			me.position[1] += parseInt(instruction.substring(1));
			break;
		case 'E':
			me.position[0] += parseInt(instruction.substring(1));
			break;
		case 'S':
			me.position[1] -= parseInt(instruction.substring(1));
			break;
		case 'W':
			me.position[0] -= parseInt(instruction.substring(1));
			break;
	}
}

function translateDirection(me, newDirection){
	if (newDirection === 'L') {
		if (me.direction === 'N'){
			me.direction = 'W';
			return me.direction;
		} else {
			me.direction = directions[directions.indexOf(me.direction) - 1];
		}
	}

	if (newDirection === 'R') {
		if (me.direction === 'W') {
			me.direction = 'N';
			return me.direction;
		} else {
			me.direction = directions[directions.indexOf(me.direction) + 1];
		}
	}

	return me.direction;
}

inputArray.forEach(function(element){
	move(me, element);
});

console.log(me);



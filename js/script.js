
///-------1.USE CALL METHODS-----/////


const car = {
	name: 'car',
		start() {
			console.log('Start the ' + this.name);
		},
		speedUp() {
			console.log('Speed up the ' + this.name);
		},
		stop() {
			console.log('Stop the ' + this.name);
		},
	};

const aircraft = {
	name: 'aircraft',
		fly() {
			console.log('Fly');
		},
	};
	car.start.call( aircraft)
	car.speedUp.call(aircraft)
	car.stop.call(aircraft)
	aircraft.fly()


///--------//////


///------2------///


let arr = [1, 2, 3];
	let numbers = [4, 5, 6];
	
		arr.push.apply(arr,numbers)
			console.log(arr)


////----------/////////


/////------3-------/////


const computer = {
    name: 'MacBook',
		isOn: false,
			turnOn() {
				this.isOn = true;
				return `The ${this.name} is On`;
			},
			turnOff() {
				this.isOn = false;
				return `The ${this.name} is Off`;
			}
};

const server = {
    name: 'Dell PowerEdge T30',
		isOn: false
};

	const turnOnServer = computer.turnOn.apply(server);
		console.log(turnOnServer);


///------------/////


///------4-------////


let runner = {
    name: 'Runner',
		run: function(speed) {
			console.log(this.name + ' runs at ' + speed + ' mph.');
		}
};

let flyer = {
    name: 'Flyer',
		fly: function(speed) {
			console.log(this.name + ' flies at ' + speed + ' mph.');
		}
};

	
	let boundFlyerFly = runner.run.bind(flyer);
		boundFlyerFly(20);
		
///----------//////



















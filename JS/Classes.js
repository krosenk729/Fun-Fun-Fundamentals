/********************************************* 
OG Class 
*/

function Car(wheels, engine, seats){
  this.wheels = wheels;
  this.engine = engine;
  this.seats = seats;

  this.talk = function(){
  	return "Vroom!";
  }
}

let audi = new Car(4, true, 4);

Car.prototype.speed = function(){
	return true;
}

/********************************************* 
Constructor 
*/

class Car{
	constructor(wheels, engine, seats){
		this.wheels = wheels;
		this.engine = engine;
		this.seats = seats;
	}

	talk(){
		return "Vroom!";
	}
}


class Mini extends Car{
	constructor(wheels, engine, seats, mininess){
		super(wheels, engine, seats);
		this.mininess = mininess;
	}

	zoom(){
		return "Always";
	}
}

let vw = new Car(4, true, 4);
let lilcar = new Mini(4, true, 2, "100%");
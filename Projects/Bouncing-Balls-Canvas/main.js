var canvas = document.querySelector('canvas');
var ctx = canvas.getContext('2d');

var width = canvas.width = window.innerWidth;
var height = canvas.height = window.innerHeight;

var balls = [];

function myRandom(min, max) {
	return Math.floor( Math.random() * (max-min) + min);
}

function Ball(x, y, velX, velY, color, size){
	this.x = x;
	this.y = y;
	this.velX = velX;
	this.velY = velY;
	this.color = color;
	this.size = size;
}

Ball.prototype.draw = function(){
	ctx.beginPath();
	ctx.fillStyle = this.color;
	ctx.arc(this.x, this.y, this.size, 0, 2*Math.PI);
	ctx.fill();
}

Ball.prototype.move =  function(){
	// bounce off of right wall || bounce off left wall
	if((this.x + this.size) >= width || (this.x - this.size) <= 0 ){
		this.velX *= -1;
	}
	// bounce off of bottom || bounce off of top
	if((this.y + this.size) >= height || (this.y - this.size) <= 0){
		this.velY *= -1;
	}

	this.x += this.velX;
	this.y += this.velY;
}

Ball.prototype.bounceCollide = function(){
	for(let i=0, m=balls.length; i<m; i++){
		//check all except for self 
		if(this != balls[i]){
			let dx = this.x - balls[i].x;
			let dy = this.y - balls[i].y;
			let distance = Math.sqrt(dx*dx + dy*dy);

			if(distance < this.size + balls[i].size){
				balls[i].color = this.color = 'rgb(' + myRandom(0,255) + ',' + myRandom(0,255) + ','+ myRandom(0,255) + ')';
			}

			
			/* for balls to rebound off each other */
			/*if(dx === 0 || dy === 0){
				this.velX *= -1;
				this.velY *= -1;
				balls[i].velX *= -1;
				balls[i].velY *= -1;
			}*/
		}
	}
}

function ballloop(){
	ctx.fillStyle = 'rgba(0, 0, 0, 0.25)';
	ctx.fillRect(0, 0, width, height);

	while(balls.length < 25){
		let ball = new Ball( 
			myRandom(0, width), 
			myRandom(0, height),
			myRandom(-10,10),
			myRandom(-10, 10),
			'rgb(' + myRandom(0,255) + ',' + myRandom(0,255) + ','+ myRandom(0,255) + ')' ,
			myRandom(10,20)
		);
		balls.push(ball);
	}

	for(let i=0, m=balls.length; i<m; i++){
		balls[i].draw();
		balls[i].move();
		balls[i].bounceCollide();
	}

	requestAnimationFrame(ballloop);
}
ballloop();
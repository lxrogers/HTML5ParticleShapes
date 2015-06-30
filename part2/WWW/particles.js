//PARTICLE PARAMS
var NUM_PARTICLES = 50;
var PARTICLE_BASE_SIZE = 35;

//ADVANCED PARTICLE PARAMS
var VELOCITY = 1.3;
var colors = [ "#F27979", "#FFD6D6", "#B31717", "#E6FFFF", "#DA95ED", "#95EDC9"];

var particles;
var context; 

var canvas = document.getElementById('projector');
var backgroundColor = '#000';

if (canvas && canvas.getContext) {
	context = canvas.getContext('2d');

	resizeCanvas();
	clearCanvas();
	initParticles();
	setInterval(TimeUpdate, 29);
}

function resizeCanvas(e) {
	canvas.width = canvas.parentNode.offsetWidth;
	canvas.height = canvas.parentNode.offsetHeight;

}

function clearCanvas() {
	context.clearRect(0,0, canvas.width, canvas.height);
	context.fillStyle = backgroundColor;
	context.fillRect(0,0, canvas.width, canvas.height);

}

//ADVANCED PARTICLES
function initParticles() {
	particles = [];
	for (var i = 0; i < NUM_PARTICLES; i++) {
		particles.push({
			xPos : Math.random() * canvas.width,
			yPos : Math.random() * canvas.height,
			xVel : ((Math.random() * (VELOCITY * 2)) - VELOCITY) + 2,
			yVel : ((Math.random() * (VELOCITY * 2)) - VELOCITY) + 2,
			currentSize : Math.random() * PARTICLE_BASE_SIZE,
			color : colors[Math.floor(Math.random() * colors.length)]
		});
	}
}

/* BASIC PARTICLES
function initParticles() {
	particles = [];
	for (var i = 0; i < NUM_PARTICLES; i++) {
		particles.push({
			xPos : Math.random() * canvas.width,
			yPos : Math.random() * canvas.height,
			currentSize : Math.random() * PARTICLE_BASE_SIZE,
			xVel : 3,
			yVel : 3,
			color : '#F00'
		});
	}
}
*/

function TimeUpdate(e) {
	clearCanvas();

	for (var i = 0; i < NUM_PARTICLES; i++) {
		particle = particles[i];
		moveParticle(particle);
		drawParticle(particle);
	}
}


function moveParticle(particle) {
	border(particle);
	particle.xPos += particle.xVel;
	particle.yPos += particle.yVel;
}

function drawParticle(particle) {
	context.fillStyle = particle.color;
	context.beginPath();
	context.arc(particle.xPos, particle.yPos, particle.currentSize, 0, Math.PI * 2, true);		
	context.closePath();
	context.fill();

}

function border(particle) {
	if (particle.xPos - particle.currentSize > canvas.width) {
		particle.xPos = 0 - particle.currentSize;
		particle.yPos = Math.random() * canvas.height;
	}

	if (particle.yPos - particle.currentSize > canvas.height) {
		particle.yPos = 0 - particle.currentSize;
		particle.xPos = Math.random() * canvas.width;
	} 
}


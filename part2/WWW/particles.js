var canvas = document.getElementById('projector');
var backgroundColor = '#000';

if (canvas && canvas.getContext) {
	context = canvas.getContext('2d');

	resizeCanvas();
	clearCanvas();
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
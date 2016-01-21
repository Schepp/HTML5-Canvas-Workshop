(function() {

	var canvas = document.querySelector('#main'),
		context = canvas.getContext('2d'),
		width = window.innerWidth,
		height = window.innerHeight;

	canvas.setAttribute('width', width);
	canvas.setAttribute('height', height);

	draw();

})();
$(function() {

	var canvas = document.querySelector('#main'),
		ctx = canvas.getContext('2d'),
		width = window.innerWidth,
		height = window.innerHeight,
		stars = [],
		count = 50,
		speed = 3,

		random = function random(max) {
			var doubleRangeValue = Math.max(0.5, Math.random() * max * 2),
				value = doubleRangeValue - max;

			return value;
		},

		createStar = function createStar() {
			return {
				position: {
					x: Math.round(width / 2), // start at the center
					y: Math.round(height / 2) // start at the center
				},
				movement: {
					x: random(speed), // value between -speed and +speed
					y: random(speed) // value between -speed and +speed
				}
			}
		},

		draw = function draw() {

			ctx.clearRect(0, 0, width, height);

			stars.forEach(function(star, index) {

				// draw the star at its current position at 1px size
				ctx.fillRect(star.position.x, star.position.y, 1, 1);

				// modify its position for next time
				star.position.x += star.movement.x;
				star.position.y += star.movement.y;

				// if new position is outside canvas, reset position
				if (
					star.position.x < 0 ||
					star.position.x > width ||
					star.position.y < 0 ||
					star.position.y > height
				) {
					stars[ index ] = createStar();
				}
			});

			requestAnimationFrame(draw);
		};

	canvas.width = width;
	canvas.height = height;

	ctx.fillStyle = 'white';

	// Create stars
	while (stars.length < count) {
		stars.push(createStar());
	}

	// Start animation
	draw();

});

//ctx.globalAlpha = 0.1;
//ctx.fillStyle = 'black';
//ctx.fillRect(0, 0, width, height);
//ctx.globalAlpha = 1;
//ctx.fillStyle = 'white';

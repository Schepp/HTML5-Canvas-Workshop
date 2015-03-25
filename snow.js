(function() {

	var canvas = document.querySelector('#main'),
		ctx = canvas.getContext('2d'),
		width = window.innerWidth,
		height = window.innerHeight,
		snowflakes = [],
		count = 300,
		speed = 3,

		random = function random(min, max) {
			return Math.max(0.5, Math.random() * (max - min));
		},

		createSnowflake = function createSnowflake() {
			return {
				position: {
					x: random(0, width), // starts somewhere in the horizontal
					y: 0 // starts at the top
				},
				speed: random(-speed, speed) // value between -speed and +speed
			}
		},

		draw = function draw() {

			ctx.clearRect(0, 0, width, height);

			snowflakes.forEach(function(snowflake, index) {

				// draw the snowflake at its current position at a size relative to its speed
				ctx.beginPath();
				ctx.arc(snowflake.position.x, snowflake.position.y, snowflake.speed, 0, Math.PI * 2);
				// fill the color with a brightness relative to its speed
				ctx.fillStyle = 'rgba(255, 255, 255, ' + ((snowflake.speed / speed) * 1) + ')';
				ctx.fill();

				// modify its position for next time
				snowflake.position.y += snowflake.speed;

				// if new position is outside canvas, reset position
				if (snowflake.position.y > height) {
					snowflakes[ index ] = createSnowflake();
				}
			});

			requestAnimationFrame(draw);
		};

	canvas.width = width;
	canvas.height = height;

	// Create snowflakes
	while (snowflakes.length < count) {
		snowflakes.push(createSnowflake());
	}

	// Start animation
	draw();

})();

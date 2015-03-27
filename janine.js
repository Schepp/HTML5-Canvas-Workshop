(function() {
	var canvas = document.querySelector('#main'),
		context = canvas.getContext('2d'),
		canvas2 = document.querySelector('#gradient'),
		context2 = canvas2.getContext('2d'),
		width = window.innerWidth,
		height = window.innerHeight,
		stars = [],
		colors = [
			'green',
			'blue',
			'red',
			'yellow',
			'white',
			'#b4d455'
		],
		count = 200,
		speed = 5,
		grd,

		createStar = function createStar() {
			var movementX = (Math.random() * speed * 2) - speed,
				movementY = (Math.random() * speed * 2) - speed;

			return {
				position: {
					x: width / 2,
					y: height / 2
				},
				movement: {
					x: movementX,
					y: movementY
				},
				size: Math.max(Math.abs(movementX), Math.abs(movementY)),
				color: colors[ Math.floor(Math.random() * colors.length) ]
			}
		},

		draw = function draw() {
			context.fillStyle = 'rgba(0, 0, 0, 0.25)';
			context.fillRect(0, 0, width, height);

			stars.forEach(function(star, index) {
				star.position.x += star.movement.x;
				star.position.y += star.movement.y;

				if (
					star.position.x < 0 ||
					star.position.x > width ||
					star.position.y < 0 ||
					star.position.y > height
				) {
					stars[ index ] = createStar();
				}

				context.fillStyle = star.color;
				context.fillRect(star.position.x, star.position.y, star.size, star.size);
			});

			requestAnimationFrame(draw);
		};

	canvas.setAttribute('width', width);
	canvas.setAttribute('height', height);
	canvas2.setAttribute('width', width);
	canvas2.setAttribute('height', height);

	while (stars.length <= count) {
		stars.push(createStar());
	}

	grd = context2.createRadialGradient(
		width / 2,
		height / 2,
		30,
		width / 2,
		height / 2,
		300
	);
	context2.rect(0, 0, width, height);
	grd.addColorStop(0, 'rgba(0, 0, 0, 1)');
	grd.addColorStop(1, 'rgba(0, 0, 0, 0)');
	context2.fillStyle = grd;
	context2.fill();

	draw();
})();
(function() {

	var canvas = document.querySelector('#main'),
		context = canvas.getContext('2d'),
		width = window.innerWidth,
		height = window.innerHeight,
		stars = [],
		speed = 10,

		createStar = function createStar() {
			return {
				position: {
					x: width / 2,
					y: height / 2
				},
				movement: {
					x: (Math.random() * speed * 2) - speed,
					y: (Math.random() * speed * 2) - speed
				}
			}
		},

		draw = function draw() {
			//context.clearRect(0, 0, width, height);


			context.fillStyle = 'rgba(0, 0, 0, 0.2)'
			context.fillRect(0, 0, width, height);
			context.fillStyle = 'white';

			stars.forEach(function(star, index) {
				var size = Math.max(Math.abs(star.movement.x), Math.abs(star.movement.y));

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

				context.fillRect(star.position.x, star.position.y, size, size);
			});

			context.beginPath();
			context.arc(width / 2, height / 2, 100, 0, Math.PI * 2);
			context.fillStyle = 'white';
			context.fill();

			context.beginPath();
			context.arc(100, 100, 50, 0, Math.PI * 2);
			context.fillStyle = 'red';
			context.fill();

			requestAnimationFrame(draw);
		};

	canvas.setAttribute('width', width);
	canvas.setAttribute('height', height);

	while (stars.length < 20) {
		stars.push(createStar());
	}

	draw();

})();
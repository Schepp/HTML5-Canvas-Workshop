(function () {

    var canvas = document.querySelector('#main'),
        context = canvas.getContext('2d'),
        width = window.innerWidth,
        height = window.innerHeight,
        stars = [],
        createStar = function createStar() {
            var size = Math.random() * 10 + 1,
                movement = {
                    x: (Math.random() * 2 - 1) * size,
                    y: (Math.random() * 2 - 1) * size
                },
                star = {
                    size: size,
                    position: {
                        x: width / 2 + (movement.x * 10),
                        y: height / 2 + (movement.y * 10)
                    },
                    movement: movement,
                    gravity: 0
                };

            return star;
        },
        draw = function draw() {
            context.fillStyle = 'rgba(0,0,0,0.2)';
            context.fillRect(0, 0, width, height);
            // context.clearRect(0, 0, width, height);
            context.fillStyle = '#fff';

            stars.forEach(function (star, index) {
                star.gravity++;
                star.position.x += star.movement.x;
                star.position.y += star.movement.y + star.gravity;

                if (
                    star.position.x < 0 ||
                    star.position.x > width ||
                    star.position.y < 0 ||
                    star.position.y > height
                ) {
                    star = createStar();
                    stars[index] = star;
                }

                context.beginPath();
                context.arc(
                    star.position.x,
                    star.position.y,
                    star.size,
                    0,
                    Math.PI * 2
                );
                context.fill();
            });

            requestAnimationFrame(draw);
        };

    for (var i = 0; stars.length < 50; i++) {
        stars.push(createStar());
    }

    canvas.setAttribute('width', width);
    canvas.setAttribute('height', height);

    draw();


})();
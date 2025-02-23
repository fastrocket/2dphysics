let isDrawing = false;
let points = [];

// Drawing mode toggle
document.getElementById('draw-mode').addEventListener('click', function() {
    isDrawing = !isDrawing;
    this.style.backgroundColor = isDrawing ? '#ff4444' : '#4CAF50';
});

// Clear canvas
document.getElementById('clear').addEventListener('click', function() {
    World.clear(world, true);
    World.add(world, [ground, leftWall, rightWall]);
    points = [];
});

// Add motor functionality
document.getElementById('add-motor').addEventListener('click', function() {
    const motor = Bodies.circle(400, 300, 20, {
        friction: 0.5,
        restitution: 0.7,
        render: {
            fillStyle: '#f39c12'
        }
    });
    
    const motorConstraint = Constraint.create({
        pointA: { x: 400, y: 300 },
        bodyB: motor,
        length: 0,
        stiffness: 0.9,
        angularStiffness: 0.1
    });

    World.add(world, [motor, motorConstraint]);
});

// Handle drawing
canvas.addEventListener('mousedown', startDrawing);
canvas.addEventListener('mousemove', draw);
canvas.addEventListener('mouseup', endDrawing);

function startDrawing(e) {
    if (!isDrawing) return;
    const rect = canvas.getBoundingClientRect();
    points = [{
        x: e.clientX - rect.left,
        y: e.clientY - rect.top
    }];
}

function draw(e) {
    if (!isDrawing || !points.length) return;
    const rect = canvas.getBoundingClientRect();
    points.push({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top
    });
}

function endDrawing() {
    if (!isDrawing || points.length < 2) return;
    
    const body = Bodies.fromVertices(
        points[0].x,
        points[0].y,
        [points],
        {
            friction: 0.5,
            restitution: 0.6,
            render: {
                fillStyle: '#3498db'
            }
        }
    );
    
    World.add(world, body);
    points = [];
}

// Initialize Matter.js modules
const Engine = Matter.Engine,
    Render = Matter.Render,
    World = Matter.World,
    Bodies = Matter.Bodies,
    Constraint = Matter.Constraint;

// Create engine and world
const engine = Engine.create();
const world = engine.world;

// Create renderer
const canvas = document.getElementById('physics-canvas');
const render = Render.create({
    canvas: canvas,
    engine: engine,
    options: {
        width: 800,
        height: 600,
        wireframes: false
    }
});

// Start the engine and renderer
Engine.run(engine);
Render.run(render);

// Add ground
const ground = Bodies.rectangle(400, 590, 800, 20, { 
    isStatic: true,
    render: {
        fillStyle: '#666'
    }
});
World.add(world, ground);

// Add walls
const leftWall = Bodies.rectangle(10, 300, 20, 600, { isStatic: true });
const rightWall = Bodies.rectangle(790, 300, 20, 600, { isStatic: true });
World.add(world, [leftWall, rightWall]);

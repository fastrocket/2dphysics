# 2D Physics Sandbox

An interactive physics sandbox game that enables users to design and test mechanical systems through intuitive drawing and physics simulation, with advanced motor control mechanics.

## Features

- Real-time physics simulation using Matter.js
- Intuitive drawing interface for creating objects
- Dynamic motor system with zero-torque design mode
- Support for both touch and mouse input
- Real-time physics simulation with collision detection
- Detailed level editing capabilities

## Requirements

- Python 3.x
- Flask
- Modern web browser with HTML5 support

## Project Structure

```
├── app.py                 # Flask application entry point
├── static
│   ├── css
│   │   └── style.css     # Application styling
│   └── js
│       ├── drawing.js    # Drawing interface implementation
│       └── physics.js    # Physics engine integration
├── templates
│   └── index.html        # Main application template
```

## Installation

1. Clone the repository:
```bash
git clone https://github.com/fastrocket/2dphysics.git
cd 2dphysics
```

2. Install Python dependencies:
```bash
pip install flask
```

## Running the Application

1. Start the Flask server:
```bash
python app.py
```

2. Open your web browser and navigate to:
```
http://localhost:5000
```

## Usage

1. **Drawing Mode**: Click the "Draw Mode" button to start drawing shapes. Click and drag to create custom shapes.

2. **Adding Motors**: Click the "Add Motor" button to place a motor in the simulation. Motors can be used to create dynamic mechanical systems.

3. **Clear All**: Use the "Clear All" button to reset the simulation.

## Technical Details

- The physics simulation is powered by Matter.js, a 2D physics engine for the web
- Custom shape creation is implemented using Matter.js body creation from vertices
- Motor constraints use angular stiffness for smooth rotation
- The canvas is responsive and adapts to different screen sizes

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

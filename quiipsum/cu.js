const canvas = document.getElementById('myCanvas');
const context = canvas.getContext('2d');

function drawEllipse(x, y, radiusX, radiusY) {
  context.beginPath();
  context.moveTo(x + radiusX, y);
  context.ellipse(x, y, radiusX, radiusY, 0, 0, 2 * Math.PI);
  context.stroke();
}

// Example usage:
drawEllipse(100, 100, 50, 30);

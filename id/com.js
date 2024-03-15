function handleTouchMove(evt) {
  evt.preventDefault();
  if (evt.touches.length === 1) {
    const touch = evt.touches[0];
    const {x, y} = touch;
    const dx = x - lastX;
    const dy = y - lastY;
    lastX = x;
    lastY = y;
    if (Math.abs(dx) > Math.abs(dy)) {
      // Move horizontally
      if (dx > 0) {
        // Move right
        handleRight(dx);
      } else {
        // Move left
        handleLeft(dx);
      }
    } else {
      // Move vertically
      if (dy > 0) {
        // Move down
        handleDown(dy);
      } else {
        // Move up
        handleUp(dy);
      }
    }
  }
}

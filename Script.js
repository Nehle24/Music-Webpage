// Animate the pink box horizontally
let box = document.getElementById("box");
let pos = 0;
let direction = 1;

function animateBox() {
    if (pos > 200 || pos < 0) direction *= -1; // Reverse direction
    pos += direction * 2;
    box.style.transform = `translateX(${pos}px)`;
    requestAnimationFrame(animateBox);
}

animateBox();

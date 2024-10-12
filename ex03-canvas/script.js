const canvas = document.getElementById('canvas');
const clear = document.getElementById('clear');
const ctx = canvas.getContext('2d');
let isPresed = false;

canvas.width = canvas.offsetWidth;
canvas.height = canvas.offsetHeight;

function startDrawing(event) {
    isPresed = true;
    draw(event);  
}

function stopDrawing() {
    isPresed = false;
    ctx.beginPath();  
}

function draw(event) {
    if (!isPresed) return;

    const rect = canvas.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    ctx.lineWidth = 5;
    ctx.lineCap = 'round';
    ctx.strokeStyle = '#000'; 

    ctx.lineTo(x, y);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(x, y);  
}

canvas.addEventListener('mousedown', startDrawing);
canvas.addEventListener('mousemove', draw);
canvas.addEventListener('mouseup', stopDrawing);
canvas.addEventListener('mouseout', stopDrawing);

clear.addEventListener("click", () => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
});
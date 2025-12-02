const colors = ["#ff4d4d", "#f9d423", "#3ac569", "#4cb5f5", "#b15cff", "#ff66c4"];

function createConfettiPiece(x, y, explosion = false) {
    const piece = document.createElement("div");
    piece.className = "confetti-piece";
    piece.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];

    // Posición inicial
    piece.style.left = x + "px";
    piece.style.top = y + "px";

    // Ángulo aleatorio para caída diagonal
    const angle = (Math.random() * Math.PI) - (Math.PI / 2); // entre -90 y +90 grados
    const speed = 1 + Math.random() * 2;

    let vx = Math.cos(angle) * speed;
    let vy = Math.sin(angle) * speed + 1; // ligera gravedad inicial

    // En explosión se altera el vector
    if (explosion) {
        const radius = 5 + Math.random() * 10;  // radio más pequeño
        const dir = Math.random() * Math.PI * 2;
        vx = Math.cos(dir) * (radius * 0.15);
        vy = Math.sin(dir) * (radius * 0.15);
    }

    let rot = Math.random() * 360;
    let rotSpeed = (Math.random() - 0.5) * 6;

    let life = 0;
    const lifetime = 900 + Math.random() * 600; // 0.9–1.5s

    function animate() {
        life += 16;
        if (life >= lifetime) {
            piece.remove();
            return;
        }

        // Movimiento
        x += vx;
        y += vy;

        // Gravedad leve
        vy += 0.05;

        // Rotación
        rot += rotSpeed;

        // Actualizar posición real
        piece.style.left = x + "px";
        piece.style.top = y + "px";
        piece.style.transform = `rotate(${rot}deg)`;

        requestAnimationFrame(animate);
    }


    document.body.appendChild(piece);
    requestAnimationFrame(animate);
}

// Suelta confeti suave al mover mouse
let lastTime = 0;
document.addEventListener("mousemove", (e) => {
    const now = Date.now();
    if (now - lastTime > 35) {
        createConfettiPiece(e.clientX, e.clientY, false);
        lastTime = now;
    }
});

// Explosión radial al clic
document.addEventListener("click", (e) => {
    for (let i = 0; i < 18; i++) {
        createConfettiPiece(e.clientX, e.clientY, true);
    }
});

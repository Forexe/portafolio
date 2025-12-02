const letterContainer = document.querySelector("#letterContainer");

let enableMessages = false;

const messages = [
    "¡Feliz cumpleaños!",
    "Happy Birthday!",
    "Joyeux Anniversaire!",
    "Frohen Geburtstag!",
    "Buon Compleanno!",
    "Feliz Aniversário!",
    "生日快乐！",
    "お誕生日おめでとう！",
    "생일 축하해!",
    "С Днём Рождения!",
    "Alles Gute!",
    "Feliz Cumple!",
];

// Función que crea un mensaje en posición aleatoria
function createFloatingMessage() {
    if(!enableMessages) return;
    const msg = document.createElement("span");
    msg.classList.add("text");

    // Mensaje aleatorio
    msg.textContent = messages[Math.floor(Math.random() * messages.length)];

    // Calcular posición aleatoria dentro del letterContainer
    const heroRect = letterContainer.getBoundingClientRect();
    const x = Math.random() * (heroRect.width - 100);  // margen para evitar desbordes
    const y = Math.random() * (heroRect.height - 40);

    msg.style.left = `${x}px`;
    msg.style.top = `${y}px`;

    // Duración aleatoria para que no se sienta repetitivo
    const dur = 2000 + Math.random() * 3000; // 3–5 segundos
    msg.style.animation = `floatFade ${dur}ms ease-in-out forwards`;

    // insertar
    letterContainer.appendChild(msg);

    // eliminar cuando termine
    setTimeout(() => {
        msg.remove();
    }, dur);
}

// Crear un mensaje cada cierto tiempo
setInterval(createFloatingMessage, 500); // cada 0.8s aparece uno


function handleToggleLetterContainer(){
    const letterContainer = document.getElementById("letterContainer");

    if(!letterContainer) return console.log('xd');

    letterContainer.classList.toggle("active");
    if(letterContainer.classList.contains("active")) enableMessages = true;
}

function handleCloseLetterContainer(){
    const letterContainer = document.getElementById("letterContainer");
    if(!letterContainer) return console.log('xd');
    letterContainer.classList.remove("active");
}
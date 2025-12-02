// Cada item del array es una página completa
const pages = [
    `
    <h2>Querida Judys 💖</h2>
    <p>Por este medio me gustaría dedicarte unas palabras por la celebración anual de tu día de
        nacimiento
        🎂. </p>
    <p>Hoy hace varios ayeres, y varias vueltas menos de
        la Tierra alrededor del sol, nació una infante sin libre decisión, que fue
        creciendo y aprendiendo sobre la vida, poco a poco fuiste ganando experiencia
        hasta convertirse en quién eres hoy en día, una chica con un
        un carácter firme, alegre, divertido, tan único (y cukis), amante del color rosa no mexicano, de
        las rosas color durazno 🍑, temerosa a las cucaracha e insectos voladores,
        con gusto en los videojuegos, anime y husbandos ✨ (y dar nalgadas 7/u/7),
        una chica, simpática, fiel a sus seres queridos, una preciosa ser humano 💖 que tenemos
        el placer de tener en nuestras vidas 🌲.</p>
    <p>
        Judys, me complace poder desearte y compartir un ¡Feliz cumpleaños!, hoy
        eres un año con más experiencia, haz subido de nivel 😎, es un honor para mi
        poder ser participe de estos momentos en tu vida 💖 de mi persona favorita :3.
        Un cumpleaños no significaba nada hasta que el ser humano le dió significado, el
        poder celebrar y agradecer a Dios y a la vida poder tener a nuestro ser amado con
        nosotros 💖, así que es momento para dejar que te consientan tus seres queridos 🥰,
        como diría Josh Nicols "Solo gózalo" 😏 jajaja.
    </p>
    `,
    `
    <p>
        Espero que este detalle haya sido de vuestro agrado, mi dulce amante, y que mis
        más sinceros deseos y alegría por tu día hayan sido recibidos en su cálido corazón 💖
        y si no es mucha indiscreción, le seguiré robando su hermoso corazón.
    </p> 
    <p class="love" style="text-align:center">
        Mi querida Judys <br />
        Ti Amu
    </p> 
    <p class="heart" style="text-align:center">
        <svg xmlns="http://www.w3.org/2000/svg" width="1200" height="1200" viewBox="0 0 1200 1200"><path fill="currentColor" d="M1176.629 250.347c54.502 168.401 8.89 339.761-87.232 468.872c-63.446 87.553-139.273 163.012-216.796 228.983c-71.322 66.39-230.933 197.753-273.241 201.402c-37.394-7.148-79.353-49.433-109.039-71.196C323.503 951.599 143.93 797.388 52.878 628.779c-76.34-161.871-76.48-362.086 42.333-486.189C249.271 3.702 481.533 30.841 599.359 175.944q47.466-61.575 116.737-96.853c187.213-74.728 381.972 1.418 460.533 171.256"/></svg>
    </p> 
    <video class="vidLuciAl" src="./vids/LuciAlastor.mp4" controls muted autoplay></video>

    `,
    `
    <p>Última página. con un besito UuU💖</p>
    <video class="vidLuciAl" src="./vids/LuciAlastorKiss.mp4" controls muted autoplay></video>
    `
];

let currentPage = 0;
const pageContent = document.getElementById("pageContent");

function updatePage() {
    pageContent.innerHTML = pages[currentPage];
}

// botones
function nextPage() {
    if (currentPage < pages.length - 1) {
        currentPage++;
        updatePage();
        scrollLetterTop();
    }
}

function prevPage() {
    if (currentPage > 0) {
        currentPage--;
        updatePage();
        scrollLetterTop(); 
    }
}

// cargar primera página
updatePage();

function scrollLetterTop() {
    const target = document.getElementById("letterContainer");
    if (!target) return;

    target.scrollIntoView({
        behavior: "smooth",
        block: "start"
    });
}
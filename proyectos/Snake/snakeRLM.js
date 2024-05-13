//Variables globales
//Velocidad en la qe va a correr la serpiente
var velocidad = 80;
//Tamaño que va a tener la serpiente por cuadro así como la comida
var tamano = 10;

//Variable que almacena la puntuación
var score = 0;
var maxScore = sessionStorage.getItem("snakeMaxScore") ? sessionStorage.getItem("snakeMaxScore") : 0;

//Clase padre que va a heredar sus atributos y funciones a los demás objetos
class objeto {
    //Constructor que llama a la variable tamaño
	constructor(){
		this.tamano = tamano;
	}
    //Metodo que permite detectar las colisiones 
	choque(obj){
        //Variable para calcular la diferencia de x, se usa Math.abs para que no quede un valor negativo
		var difx = Math.abs(this.x - obj.x);
        //Variable para calcular la diferencia de y, se usa Math.abs para que no quede un valor negativo
		var dify = Math.abs(this.y - obj.y);
        //Se evalua si la diferencia de "x" es mayor a cero y "y" mayor a 0 con tamaño menor a tamano para cuando esten solamente una al lado de la otra
		if(difx >= 0 && difx < tamano && dify >= 0 && dify < tamano){
			return true;
		} else {
			return false;
		}
	}
}

//Objeto hijo de la clase objeto
class Cola extends objeto {
    //Constructor de las variables x y "y"
	constructor(x,y){
        //con super se manda a llamar el constructor de la clase padre
		super();
		this.x = x;
		this.y = y;
        //
		this.siguiente = null;
	}
    
	dibujar(ctx){
        //Si siguiente es diferente de null se ejecuta
		if(this.siguiente != null){
			this.siguiente.dibujar(ctx);
		}
        //Color de la serpiente
		ctx.fillStyle = "#0000FF";
        //Se crea el cuadro que forma la serpiente
		ctx.fillRect(this.x, this.y, this.tamano, this.tamano);
	}
    //Si siguiente es diferente de null se crea un cuadro que lo sigue
	setxy(x,y){
		if(this.siguiente != null){
			this.siguiente.setxy(this.x, this.y);
		}
        //Antes de que se de una posición x o y nueva la posicion anterior se almacena en siguiente
		this.x = x;
		this.y = y;
	}
    //Función que agrega la cola
	meter(){
        //si es igual a null se crea una nueva cola
		if(this.siguiente == null){
			this.siguiente = new Cola(this.x, this.y);
		} 
        //Si ya tiene un valor se va a meter el número de cuadros que se tienen a la cabeza 
        else {
			this.siguiente.meter();
		}
	}
    //Retorna el valor siguiente
	verSiguiente(){
		return this.siguiente;
	}
}

class Comida extends objeto {
    //Se crea el constructor
	constructor(){
        //Se manda a llamar el constructor de clase padre
		super();
        //Se guarda en x el valor que se genera con la función generar
		this.x = this.generar();
		this.y = this.generar();
	}
    //Con math.floor se redondea el número, con Math.random se generan numeros aleatorios del 0 al 59 donde 59 no esta incluido, al multiplicarlo por 10 se generan el número entre 0 y 590
	generar(){
		var num = (Math.floor(Math.random() * 39))*10;
		return num;
	}
    //Se manda a llamar solo cuando hay una colición, cuando la serpiente se lo come
	colocar(){
		this.x = this.generar();
		this.y = this.generar();
	}
    //Aquí se colorea y se da tamaño a la comida
	dibujar(ctx){
		ctx.fillStyle = "#FF0000";
		ctx.fillRect(this.x, this.y, this.tamano, this.tamano);
	}
}
//Objetos del juego

//se crea la cabeza y se le da una posición
var cabeza = new Cola(20,20);
var comida = new Comida();
//Las variables booleanas nos permite controlar en que eje se mueve la serpiente
var ejex = true;
var ejey = true;
//Variables para manipular la dirección del movimiento
var xdir = 0;
var ydir = 0;

//Función que nos permite dar el movimiento
function movimiento(){
    
	var nx = cabeza.x+xdir;
	var ny = cabeza.y+ydir;
	cabeza.setxy(nx,ny);
}

//Función que permite ser llamada a traves de los eventos de tecla, el objeto "event" nos permite acceder a la información de un evento en específico
function control(event){
    //Variable que guarda la propiedad que es el código de la tecla
	var cod = event.keyCode;
    //Condicion que evalua si se esta moviendo en el eje x, para que solo se pueda mover en el eje "y"
	if(ejex){
        //Si la tecla de arriba es presionada
		if(cod == 38){
			ydir = -tamano;
            // xdir =0 impide que se mueva en diagonal
			xdir = 0;
			ejex = false;
			ejey = true;
		}
        //Si la tecla de abajo es presionada
		if(cod == 40){
			ydir = tamano;
            // xdir =0 impide que se mueva en diagonal
			xdir = 0;
			ejex = false;
			ejey = true;
		}
	}
    //Condicion que evalua si se esta moviendo en el eje y, para que solo se pueda mover en el eje "x"
	if(ejey){
        //Si la tecla derecha es presionada
		if(cod == 37){
            // ydir =0 impide que se mueva en diagonal
			ydir = 0;
			xdir = -tamano;
			ejey = false;
			ejex = true;
		}
        //Si la tecla izquierda es presionada
		if(cod == 39){
            // ydir =0 impide que se mueva en diagonal
			ydir = 0;
			xdir = tamano;
			ejey = false;
			ejex = true;
		}
	}
}
//Retorna todas las variables a su valor inicial y manda un mensaje de que perdió
function findeJuego(){
	score = 0;
	document.getElementById('current-score').innerHTML = score;

	xdir = 0;
	ydir = 0;
	ejex = true;
	ejey = true;
	cabeza = new Cola(20,20);
	comida = new Comida();
	alert("Perdiste");
}

function puntuar(){
	score++;
	if(score > maxScore){
		maxScore = score;
		sessionStorage.setItem("snakeMaxScore", maxScore);
		document.getElementById('max-score').innerHTML = maxScore;
	}
	document.getElementById('current-score').innerHTML = score;
}

document.addEventListener('DOMContentLoaded', function(){
	document.getElementById('max-score').innerHTML = maxScore;
})

//Función que valida si la cabeza ha chocado con la pared verifica si el valor "x" de la cabeza sobrepasa el marco del juego
function choquepared(){
	if(cabeza.x < 0 || cabeza.x > 390 || cabeza.y < 0 || cabeza.y > 390){
		findeJuego();
	}
}
//Función que evalua la colición con el cuerpo de la serpiente
function choquecuerpo(){
	var temp = null;
    //Se usa el try catch para dar un valor a temp de null cuando no se ejecute el try
	try{
        //Se devuelve el valor de la función siguiente que no tenga null
		temp = cabeza.verSiguiente().verSiguiente();
	}catch(err){
		temp = null;
	}
    //Cuando la cabeza choque con temp se termina el juego, verifica que en cada momento no choque la cabeza con el cuerpo
	while(temp != null){
		if(cabeza.choque(temp)){
			//fin de juego
			findeJuego();
		} else {
			temp = temp.verSiguiente();
		}
	}
}

//La función que nos permite dibujar en el canvas
function dibujar(){
    //Variable que obtiene la etiqueta canvas por su ID "canvas
	var canvas = document.getElementById("canvas");
    //Se obtiene el contexto gráfico del canvas para poder dibujar en el
	var ctx = canvas.getContext("2d");
    
    //Instrucción que nos permite limpiar el espacio del canvas
	ctx.clearRect(0,0, canvas.width, canvas.height);
	//se le manda el contexto gráfico a la cabeza y al dibujo
	cabeza.dibujar(ctx);
	comida.dibujar(ctx);
}

//Función principal que permite la animación, se llaman todas las funciones del juego
function main(){
	choquecuerpo();
	choquepared();
	dibujar();
	movimiento();
    //Si la comida se encuentra con la cabeza se ejecuta la opción
	if(cabeza.choque(comida)){
		comida.colocar();
		cabeza.meter();
		puntuar();
	}
}
//Función que nos permite mandar a llamar la función cada cierto tiempo
setInterval("main()", velocidad);



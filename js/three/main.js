import * as THREE from "three";
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

let section_portafolio = document.getElementById("portafolio");
let modelContainer = document.getElementById("model1");
let modelContainerWidth = modelContainer.clientWidth;
let modelContainerHeight = modelContainer.clientHeight;

const camera = new THREE.PerspectiveCamera(
    15,
    window.innerWidth / window.innerHeight,
    0.1,
    130
);

camera.aspect = modelContainerWidth/modelContainerHeight;
camera.updateProjectionMatrix();

// document.getElementById("proyectos").addEventListener("click", function(event){
//     console.log(event.target)
//     console.log(event);
// })

const scene = new THREE.Scene();
const renderer = new THREE.WebGLRenderer( {alpha: true });
renderer.setSize(modelContainerWidth, modelContainerHeight);

modelContainer.appendChild(renderer.domElement);
renderer.render(scene, camera);

const ambientLight = new THREE.AmbientLight("#ffffff", 1.5);
scene.add(ambientLight);

const topLight = new THREE.DirectionalLight("#ffffff", 3);
topLight.position.set(500, 500, 500);
scene.add(topLight);

camera.position.x = 0.5;
camera.position.y = 3;
camera.position.z = 11;
camera.rotation.y = 0;
camera.rotation.x = -0.2;

const loader = new GLTFLoader();
const textureLoader = new THREE.TextureLoader();
let Desktop_src = "img/Desktop2.png";
let Desktop_img = textureLoader.load(Desktop_src);
Desktop_img.colorSpace = THREE.SRGBColorSpace;
Desktop_img.flipY = false;

let laptop;
loader.load("assets/models/Laptop.glb",
    function(gltf){
        laptop = gltf.scene;
        // laptop.scale.set(2,2,2);
        laptop.position.x = -0.25
        laptop.rotation.y = Math.PI/4;
        
        // laptop.position.y = 0;
        
        scene.add(laptop);
        // console.log(laptop.children[0].children[0].children[2].material);
        let laptop_mat = laptop.children[0].children[0].children;
        laptop_mat[3].material = new THREE.MeshBasicMaterial({map:Desktop_img});
        laptop_mat[2].material = laptop_mat[1].material;
        
        // console.log(laptop);
        // let text = "";
        // for( let mat of laptop_mat){
        //     text = text + mat.material.name + ", "
        // }
        // console.log(text);
    },
    function(carga){
        if(Math.floor(carga.loaded*100/carga.total) >= 99){
            console.log("Laptop loaded");
        }else{
            console.log("Loading laptop...");
        }
    },
    function(error){
        console.log("Error loading Laptop\n");
        console.log(error);
    }
);

let maceta;
loader.load("assets/models/Maceta2.glb",
    function(gltf){
        maceta = gltf.scene;
        // maceta.scale.set(2,2,2);
        maceta.position.x = 0
        // maceta.position.y = 0;
        
        scene.add(maceta);
        
        resizeModels();
    },
    function(carga){
        if(Math.floor(carga.loaded*100/carga.total) >= 99){
            console.log("Maceta loaded");
        }else{
            console.log("Loading maceta...");
        }
    },
    function(error){
        console.warn("Error loading Maceta\n");
        console.log(error);
    }
);

const renderScene = () =>{
    requestAnimationFrame(renderScene);
    renderer.render(scene,camera);
}


renderScene();

// console.log(section_portafolio.clientWidth+ " "+ section_portafolio.clientHeight);

function resizeModels(){
    if(laptop && maceta){
        if(section_portafolio.clientWidth >= 600){
            laptop.position.x = -0.75;
            maceta.position.x = 0.75;
        }else{
            laptop.position.x = -0.25;
            maceta.position.x = 0;
        }
    }
}

window.addEventListener('resize', () =>{
    resizeModels();
    modelContainerWidth = modelContainer.clientWidth;
    modelContainerHeight = modelContainer.clientHeight;
    renderer.setSize(modelContainerWidth, modelContainerHeight)
    camera.aspect = modelContainerWidth/modelContainerHeight;
    camera.updateProjectionMatrix();
})
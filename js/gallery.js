document.addEventListener('DOMContentLoaded', function(){
    document.getElementById("gallery_close").addEventListener('click', function(){
        document.getElementById("galeria").style = "display:none;"
    })
    cards_images = document.getElementsByClassName("card_image");

    for(var card of cards_images){
        card.addEventListener('click', showgallery);
    }

})

function changeLD(event){
    let lightdark = document.getElementById("lightdark");
    let current_theme = lightdark.getAttribute("current-theme");
    if(current_theme == "dark"){
        console.log("change to light");
        lightdark.setAttribute("current-theme","light")
        for(propiedad of darkMode) document.documentElement.style.setProperty(propiedad.propiedad, propiedad.valor);
        
        return
    }
    console.log("change to dark");
    for(propiedad of lightMode) document.documentElement.style.setProperty(propiedad.propiedad, propiedad.valor);
    lightdark.setAttribute("current-theme","dark")
}

function showgallery(){

    armarGaleria(this.getAttribute("--data-galleryName"));
    document.getElementById("galeria").style = "display:block;";
}


let bookstrap_img = [
    "img/proyectos/bootstrap4-4/Bootstrap4-4-mockupV2-1.jpg",
    "img/proyectos/bootstrap4-4/Bootstrap4-4-mockupV2-2.jpg",
    "img/proyectos/bootstrap4-4/Bootstrap4-4-mockupV2-3.jpg",
    "img/proyectos/bootstrap4-4/Bootstrap4-4-mockupV2-4.jpg",
    "img/proyectos/bootstrap4-4/Bootstrap4-4-mockupV2-5.jpg",
]

let hotask_img = [
    "img/proyectos/hotask/Hotask_mockup1.jpg",
    "img/proyectos/hotask/Hotask_mockup2.jpg",
    "img/proyectos/hotask/Hotask_mockup3.jpg",
    "img/proyectos/hotask/Hotask_mockup4.jpg",
    "img/proyectos/hotask/Hotask_mockup5.jpg",
    "img/proyectos/hotask/Hotask_mockup6.jpg",
]

let redsocial_img = [
    "img/proyectos/redsocial/Bookmarks_mockup1v2.jpg",
    "img/proyectos/redsocial/Bookmarks_mockup2.jpg",
    "img/proyectos/redsocial/Bookmarks_mockup3.jpg",
    "img/proyectos/redsocial/Bookmarks_mockup4.jpg",
    "img/proyectos/redsocial/Bookmarks_mockup5.jpg",
    "img/proyectos/redsocial/Bookmarks_mockup6.jpg",
]

let snake_img = [
    "img/proyectos/snake/Snake_mockup1.jpg",
    "img/proyectos/snake/Snake_mockup2.jpg",
    "img/proyectos/snake/Snake_mockup3.jpg",
]

let drawme_img = [
    "img/proyectos/drawme/DrawmeMockup1.jpg",
    "img/proyectos/drawme/DrawmeMockup2-1.jpg",
    "img/proyectos/drawme/DrawmeMockup3-1.jpg",
    "img/proyectos/drawme/DrawmeMockup4-1.jpg",
    "img/proyectos/drawme/DrawmeMockup5-1.jpg"
]

let proyectos = [
        {
            "name" : "Bootstrap",
            "datos" : bookstrap_img
        },
        {
            "name" : "Hotask",
            "datos" : hotask_img
        },
        {
            "name" : "Redsocial",
            "datos" : redsocial_img
        },
        {
            "name" : "Snake",
            "datos" : snake_img
        },
        {
            "name" : "Drawme",
            "datos" : drawme_img
        }
    ]


function armarGaleria(proyectName){

    for(var i = 0; i < proyectos.length; i++){
        
        if(proyectos[i].name === proyectName){
            let gal_img_list = document.getElementById("gallery_image_list")
            gal_img_list.innerHTML = ""

            setGalleryMain(proyectos[i].datos[0])

            for(var img_src of proyectos[i].datos){
                new_list_img = document.createElement("img")
                new_list_img.setAttribute("src", img_src)
                new_list_img.setAttribute("alt", img_src.split("/")[3].split(".")[0])
                new_list_img.setAttribute("onclick", "setGalleryMain('"+img_src+"')")
                gal_img_list.appendChild(new_list_img)
                
            }
            break;
        }else{
            
        }
    }

}

function setGalleryMain(image_src){
    let gal_img = document.getElementById("gallery_image")
    let new_gal_img = document.createElement("img")
    new_gal_img.setAttribute("src", image_src)
    new_gal_img.setAttribute("alt", image_src.split("/")[3].split(".")[0])
    gal_img.innerHTML = "";
    gal_img.appendChild(new_gal_img)
}

var darkMode = [
    {
        "propiedad": "--bg-color",
        "valor": "rgb(26, 40, 51)"
    },
    {
        "propiedad": "--bg-color-portfolio",
        "valor": "rgb(231, 231, 231, 0)"
    },
    {
        "propiedad":"--color-principal",
        "valor": "#fff"
    },
    {
        "propiedad": "--color-p",
        "valor": "#ebebeb"
    },
    {
        "propiedad": "--color-nav",
        "valor": "rgba(32, 32, 32, 0.5)"
    },
    {
        "propiedad": "--color-nav-",
        "valor": ":#ffe"
    },
    {
        "propiedad": "--color-nav-bg-a",
        "valor": "rgb(65, 65, 65)"
    },
    {
        "propiedad": "--color-nav-bg-a-hover",
        "valor": "rgb(65, 65, 65)"
    },
    {
        "propiedad": "--resaltado-color",
        "valor": "rgb(236, 145, 60)"
    },
    {
        "propiedad": "--color-miNombre",
        "valor": "rgb(46, 155, 238)"
    },
    {
        "propiedad": "--color-subdate",
        "valor": "rgb(155, 154, 154)"
    },
    {
        "propiedad": "--color-breakline",
        "valor": "rgb(187, 187, 187)"
    },
    {
        "propiedad": "--color-breakline-b",
        "valor": "rgba(70, 70, 70, 0.5)"
    },
    {
        "propiedad": "--color-breakline-c",
        "valor": "rgb(49, 75, 95);"
    },
    {
        "propiedad": "--footer-color:",
        "valor": "cadetblue"
    },
    {
        "propiedad": "--bg-color-card",
        "valor": "rgb(36, 55, 70)"
    },
    {
        "propiedad":"--badge-hover-color",
        "valor": "cyan"
    },
]

var lightMode = [
    {
        "propiedad": "--bg-color",
        "valor": "rgb(164, 198, 214)"
    },
    {
        "propiedad": "--bg-color-portfolio",
        "valor": "rgb(241, 241, 241)"
    },
    {
        "propiedad":"--color-principal",
        "valor": "black"
    },
    {
        "propiedad": "--color-p",
        "valor": "black"
    },
    {
        "propiedad": "--color-nav",
        "valor": "rgba(11, 98, 148, 0.5)"
    },
    {
        "propiedad": "--color-nav-",
        "valor": "#ffe"
    },
    {
        "propiedad": "--color-nav-bg-a",
        "valor": "rgb(36, 106, 134)"
    },
    {
        "propiedad": "--color-nav-bg-a-hover",
        "valor": "rgb(65, 65, 65)"
    },
    {
        "propiedad": "--resaltado-color",
        "valor": "rgb(202, 100, 3)"
    },
    {
        "propiedad": "--color-miNombre",
        "valor": "rgb(1, 105, 185)"
    },
    {
        "propiedad": "--color-subdate",
        "valor": "rgb(72, 78, 82)"
    },
    {
        "propiedad": "--color-breakline",
        "valor": "rgb(109, 163, 194)"
    },
    {
        "propiedad": "--color-breakline-b",
        "valor": "rgba(49, 141, 216, 0.5)"
    },
    {
        "propiedad": "--color-breakline-c",
        "valor": "rgb(36, 145, 228)"
    },
    {
        "propiedad": "--footer-color:",
        "valor": "rgb(1, 117, 121)"
    },
    {
        "propiedad": "--bg-color-card",
        "valor": "rgb(146, 198, 238)"
    },
    {
        "propiedad":"--badge-hover-color",
        "valor": "rgb(0, 175, 175)"
    },
]
document.addEventListener('DOMContentLoaded', function(){
    document.getElementById("gallery_close").addEventListener('click', function(){
        document.getElementById("galeria").style = "display:none;"
    })
    cards_images = document.getElementsByClassName("card_image");

    for(var card of cards_images){
        card.addEventListener('click', showgallery);
    }
})

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
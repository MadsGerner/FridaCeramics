document.addEventListener("DOMContentLoaded", start);

const url = "http://madsgerner.dk/kea_s2/frida_ceramics/frida_wp/wordpress/wp-json/wp/v2/forhandlere";
let forhandlere = [];

const skabelon = document.querySelector("template");
const liste = document.querySelector(".liste");

function start() {

    //changeImg();
    //
    //function changeImg() {
    //    document.querySelector(".images_loop").src = "images/atryk_loop_ig.png";
    //
    //    setTimeout(changeImg1, 2000);
    //}
    //
    //
    //function changeImg1() {
    //    document.querySelector(".images_loop").src = "images/designet_wrapper_bg.png";
    //
    //    setTimeout(changeImg2, 2000);
    //}
    //
    //function changeImg2() {
    //    document.querySelector(".images_loop").src = "images/story_img1.png";
    //
    //    setTimeout(changeImg, 2000);
    //}


    getJson();



}


async function getJson() {
    const response = await fetch(url);
    forhandlere = await response.json();
    vis();

}

function vis() {
    forhandlere.forEach(forhandler => {
        console.log(forhandlere);
        const klon = skabelon.cloneNode(true).content;

        klon.querySelector(".forhandler_navn").textContent = forhandler.forhandler_navn;
        klon.querySelector(".forhandler_adresse").textContent = forhandler.forhandler_addresse;
        liste.appendChild(klon);
    });
}

document.addEventListener("DOMContentLoaded", start);

const url = "http://madsgerner.dk/kea_s2/frida_ceramics/frida_wp/wordpress/wp-json/wp/v2/forhandlere";
let forhandlere = [];

const skabelon = document.querySelector("template");
const liste = document.querySelector(".liste");

const presseUrl = "";

function start() {

    changeImg();
    getJson();
    hentJson();
}

function changeImg() {
    document.querySelector(".story_img1").src = "image/sugeroer2.jpg";

    //    document.querySelector(".story_img1").classList.add(".overgang");
    setTimeout(changeImg1, 1000);
}

function changeImg1() {
    document.querySelector(".story_img1").src = "image/sugeroer5.jpg";

    setTimeout(changeImg2, 1000);
}

function changeImg2() {
    document.querySelector(".story_img1").src = "image/sugeroer4.jpg";

    setTimeout(changeImg3, 1000);
}

function changeImg3() {
    document.querySelector(".story_img1").src = "image/sugeroer3.jpg";

    setTimeout(changeImg4, 1000);
}

function changeImg4() {
    document.querySelector(".story_img1").src = "image/sugeroer1.jpg";

    setTimeout(changeImg, 1000);
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

async function hentJson() {

}

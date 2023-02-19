function moverPosicionRandom(elm) {
    elm.style.position = 'absolute';
    elm.style.top = Math.random() * (window.innerHeight - elm.offsetHeight) + 'px';
    elm.style.left = Math.random() * (window.innerWidth - elm.offsetWidth) + 'px';
}

let btn_si = document.getElementById("btn_si");
let btn_no = document.getElementById("btn_no");
let divModoSexo = document.getElementsByClassName('modo_sexo')[0];

btn_no.addEventListener('mouseenter', function (e) { moverPosicionRandom(e.target) });   
btn_si.addEventListener('click', function(e){
    alert("sabia que aceptarias, hora de reproducirnos uwu");
    divModoSexo.style.display = "block";
    const cancion = new Audio ("");
    cancion.autoplay
})

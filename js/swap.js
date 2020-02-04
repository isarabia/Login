var x = document.getElementById("datos");
var y = document.getElementById("compra");
var z = document.getElementById("btn");
var u = document.getElementById("finalizar");
var v = document.getElementById("social");

function datos() {
    x.style.left = "50px";
    y.style.left = "450px";
    z.style.left = "0";
    u.style.left = "850px";
    v.style.marginTop = "760px";
}
function compra() {
    x.style.left = "-400px";
    y.style.left = "50px";
    z.style.left = "90px";
    u.style.left = "450px";
    v.style.marginTop = "800px";
}
function finalizar() {
    x.style.left = "-800px";
    y.style.left = "-450px";
    z.style.left = "200px";
    u.style.left = "50px";
    v.style.marginTop = "350px";
}
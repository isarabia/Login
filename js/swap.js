var x = document.getElementById("datos");
var y = document.getElementById("compra");
var z = document.getElementById("btn");
var v = document.getElementById("finalizar");
var w = document.getElementById("social");

function datos() {
    x.style.left = "50px";
    y.style.left = "450px";
    z.style.left = "0";
    v.style.left = "850px";
    w.style.marginTop = "300px";
}
function compra() {
    x.style.left = "-400px";
    y.style.left = "50px";
    z.style.left = "90px";
    v.style.left = "450px";
    w.style.marginTop = "600px";
}
function finalizar() {
    x.style.left = "-800px";
    y.style.left = "-450px";
    z.style.left = "200px";
    v.style.left = "50px";
    w.style.marginTop = "300px";
}
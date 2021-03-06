'use strict'
window.onload= iniciar
let contador=1;
let select= document.getElementById('lista')
let contenedor= document.getElementById('parte3')
/**
 * funcion que se ejecuta al abrir la pagina y asigna el evento onchange al select
 */
function iniciar() {
    let select= document.getElementById('lista')
    console.log(select);
    select.setAttribute('onchange','cambio(select.value)')
}
/**
 * 
 * @param {*} valor valor que tiene el select
 */
function cambio(valor) {
    if(valor!=1 && valor!=2){
        crearMalo()
    }else{
        crearBueno()
    }
}
/**
 * si el valor es el de una frase "buena", se crea un emoji positivo
 */
function crearBueno() {
    let comprobar= document.getElementById('emojis')
    let texto= document.createElement('p')
    texto.textContent="BIEN HECHO!!"
    texto.setAttribute('id','textoCrear')
    if (comprobar === null) {
        let img= document.createElement('img')
        img.setAttribute("src","imgs/feliz.png")
        img.setAttribute("id","emojis")
        contenedor.appendChild(img)
        contenedor.appendChild(texto)
    }else{
        let textoModificar= document.getElementById('textoCrear')
        textoModificar.remove()
        comprobar.setAttribute("src","imgs/feliz.png")
        contenedor.appendChild(texto)
    } 
}
/**
 * si el valor es el de una frase "mala", se crea un emoji negativo
 */
function crearMalo() {
    let comprobar= document.getElementById('emojis')
    let texto= document.createElement('p')
    texto.textContent="MUY MAL, NO HAS APRENDIDO NADA"
    texto.setAttribute('id','textoCrear')
    if (comprobar === null) {
        let img= document.createElement('img')
        img.setAttribute("src","imgs/triste.png")
        img.setAttribute("id","emojis")
        contenedor.appendChild(img)
        contenedor.appendChild(texto)
    }else{
        let textoModificar= document.getElementById('textoCrear')
        textoModificar.remove()
        comprobar.setAttribute("src","imgs/triste.png")
        contenedor.appendChild(texto)
    } 
}
/**
 * si el contador llega 10,"lo que significa que le has dado 10 veces a seguro?" la pantalla se pondr?? en negro
 */
function gusto() {
    if(contador>10){
        let body= document.body
        let black= document.createElement('div')
        black.setAttribute('id','black')
        black.style.display='block'
        black.textContent='Si no te gust?? la pagina, disfruta de ella en negro'
        body.appendChild(black)
        console.log(body);  
    }else{
        let li= document.getElementsByClassName('list-inline-item')[5]
        let borrar= document.getElementById('creador')
        borrar.remove()
        let span= document.createElement('span')
        span.setAttribute('onclick','gusto()')
        span.setAttribute('id','creador')
        let interrogacion='?'
        span.textContent="Seguro"+interrogacion.repeat(contador)
        li.appendChild(span)
        contador++
    }
}
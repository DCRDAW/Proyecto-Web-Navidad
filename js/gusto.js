'use strict'
let contador=1;
function gusto() {
    if(contador>10){
        let body= document.body
        let black= document.createElement('div')
        black.setAttribute('id','black')
        black.style.display='block'
        black.textContent='Si no te gustó la pagina, disfruta de ella en negro'
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
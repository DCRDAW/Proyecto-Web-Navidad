'use strict'

function comprobar(moneda) {
    let mon= new Controlador(moneda)
    mon.comprobacion()
}
class Controlador{
    constructor(moneda){
        this.moneda=moneda
        this.modelo=new Modelo()
        this.vista=new Vista()
    }
    comprobacion(){
        let url=this.modelo.comprobar()
        if(this.modelo.resul==this.moneda){
            this.vista.dibujar(url,'hoy hubieses sobrevivido')
        }else{
            this.vista.dibujar(url,'hoy habrias muerto')
        }
    }
    
}
class Modelo{
    aleatorio = Math.floor((Math.random() * 10) +1);
    heads='imgs/heads.gif'
    tails='imgs/tails.gif'
    resul=null
    comprobar(){
        if (this.aleatorio >= 5) {
            this.resul='cara'
            return this.heads

          } else {
            this.resul='cruz'
            return this.tails
          }
         
    }
 
}
class Vista{
    div= document.getElementById('gifM')
    imgD=document.getElementById('default')
    resul=document.getElementById('resultado')
    dibujar(url,string){
        this.resul.innerHTML=string
        console.log(url);
        this.div.removeChild(this.imgD)
        let img=document.createElement('img')
        img.setAttribute("src",url)
        img.setAttribute("id","default")
        this.div.appendChild(img)
    }
}   
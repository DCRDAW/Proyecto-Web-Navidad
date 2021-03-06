'use strict'
/**
 * funcion que llama a la clase controlador
 * @param {*} moneda el valor que ha elegido el usuario
 */
function comprobar(moneda) {
    let mon= new Controlador(moneda)
    mon.comprobacion()
}
/**
 *  @class clase controlador, que llama a los distintos metodos de la clase modelo y vista
 */
class Controlador{
    constructor(moneda){
        this.moneda=moneda
        this.modelo=new Modelo()
        this.vista=new Vista()
    }
    /**
     *  metodo comprobacion, que mira si el usuario ha acertado el cara o cruz, y manda a dibujar el gif que lanza la moneda
     */
    comprobacion(){
        let url=this.modelo.comprobar()
        if(this.modelo.resul==this.moneda){
            this.vista.dibujar(url,'hoy hubieses sobrevivido')
        }else{
            this.vista.dibujar(url,'hoy habrias muerto')
        }
    }
    
}
/**
 * @class clase modelo, que almacena las urls de los gifs y el numero aleatorio que dice si has acertado o no
 */
class Modelo{
    aleatorio = Math.floor((Math.random() * 10) +1);
    heads='imgs/heads.gif'
    tails='imgs/tails.gif'
    resul=null
    /**
     * metodo que comprueba si la moneda es cara o cruz
     * @returns heads o tails, que son las variables que contienen la url del gif
     */
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
/**
 * @class Vista clase que dibuja en la pagina los gifs y el resultado
 */
class Vista{
    div= document.getElementById('gifM')
    imgD=document.getElementById('default')
    resul=document.getElementById('resultado')
    /**
     * metodo que dibuja en la pagina los gifs y el resultado 
     * @param {*} url la url del gif
     * @param {*} string el string que comunica si has acertado
     */
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
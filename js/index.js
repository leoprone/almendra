
/* ********** Menu ********** */

((d) => {
    const $btnMenu = d.querySelector(".menu-btn"),
      $menu = d.querySelector(".menu");
  
  
    $btnMenu.addEventListener('click', (e) => {
      $btnMenu.firstElementChild.classList.toggle("none");
      $btnMenu.lastElementChild.classList.toggle("none");
      $menu.classList.toggle("is-active");
    });
  
  
  
  /*  PARA QUE SE REPLIEGUE EL MENÚ AL TOCAR EN CUALQUIER PARTE AFUERA DEL MISMO
  esconder el menu cuando ya se seleccionó una sección
   (por delegación de eventos, asignando el click a un
    elem. de nivel superior, en este caso, el document)*/ 
  
  d.addEventListener("click", (e) => {
      if (e.target.matches(".menu-btn svg")) return false;/*no pasa nada ahí*/
  
      $btnMenu.firstElementChild.classList.remove("none");
      $btnMenu.lastElementChild.classList.add("none");
      $menu.classList.remove("is-active");
    });
  })(document);
  
  
  
  






//  -----------------movimientos del ÁLBUM---------------------

const $album=document.querySelector(".album"),
$albumcontenedorfondotapa=document.querySelector(".album__contenedorFondoTapa"),
$albumtapa=document.querySelector(".album__tapa"),
$albumbtntapa=document.querySelector(".album__btnTapa"),
$albumcontenedorvinilo=document.querySelector(".album__contenedor-vinilo"),
$listadeslizante=document.querySelector(".lista__deslizante");


///////////////////////////////  fin album ///////////////////////////////////////////////////////



  //-----------------------aparición de TAPA "ANIMADA" -----------------------------

  const $fontsizetapaanimada=document.querySelector(".font-size__tapa-animada"),
  $botonanimacion=document.querySelector(".boton-animacion"),
  $albumtapaprueba=document.querySelector(".album__tapa-prueba"),
  $points=document.getElementsByClassName("point"),
  $proazules=document.getElementsByClassName("pro-azul");


document.addEventListener("click", (e)=>{
  
//arranca TODA la animación del album cuando se hace click en "Animar"
  if(e.target.matches(".boton-animacion")){
   /*    $tapaanimada.classList.remove("display-none"); 
   $tapaanimada.classList.remove("naranja");*/
   Array.prototype.forEach.call($points, function($points) {

     $points.classList.remove("initial"); 
    /* $points.classList.remove("initial2"); */
    
});
         setTimeout(() => {
        //se remueve el estado "inicial" correspondiente a TODOS los puntos (estado en que están fuera del marco)
       /* Array.prototype.forEach.call($points, function($points) {

         $points.classList.remove("initial"); 
          $points.classList.remove("initial2");
      }); */
     /*  $fontsizetapaanimada.classList.remove("naranja"); */
     
    }, 12000); 


    /* setTimeout(() => {
 
    Array.prototype.forEach.call($points, function($points) {

      $points.classList.add("opacity-cero"); 
     
     
 });
  }, 22000);  */



     
    
    //esto es OPCIONAL. Si quiero que el color de cada punto aparezca recién después de cierto tiempo
      /*   setTimeout(() => {
            Array.prototype.forEach.call($proazules, function($proazules) {
              $proazules.classList.add("azul");
              $botonanimacion.classList.add("opacity-cero");
            });
          
        }, 1000); */


      
      setTimeout(() => {
          //el movimiento de apertura-cierre alternado de la tapa comienza recién luego de haberse
          //terminada la aparición "animada" de la tapa
              $albumtapa.classList.add("movimiento-alternado");

        
       

           //se ABRE el álbum después del movimiento alternado de la tapa
          setTimeout(function() {
            $albumbtntapa.classList.remove("movimiento-alternado");
            $albumtapa.classList.add("abrir-tapa");
            $albumbtntapa.classList.add("abrir-tapa");
            $albumcontenedorvinilo.classList.add("disc-animation");
            $albumcontenedorfondotapa.classList.add("visited-disc-2"); 
            $album.classList.add("album-activado"); 
          }, 25000);


          //.......se termina la animación de la LISTA............
             
          setTimeout(function() {
            $listadeslizante.classList.remove("animacion-lista");
          }, 32000);


              /*  document.addEventListener("click", (e)=>{

                  if(e.target.matches(".album__btnTapa")){
                    $albumbtntapa.classList.remove("movimiento-alternado");
                    $albumtapa.classList.add("abrir-tapa");
                    $albumbtntapa.classList.add("abrir-tapa");
                    $albumcontenedorvinilo.classList.add("disc-animation");
                    $albumcontenedorfondotapa.classList.add("visited-disc-2"); 
                    $album.classList.add("album-activado");  
                    

                    // que se detenga la animación de la lista de temas a los 15s de abrir el álbum
                    setTimeout(function() {
                      $listadeslizante.classList.remove("animacion-lista");
                    }, 13000); 
                  }

                });*/



    }, 14000);


}
   
});
    
//----------------------------------------------------

/* 
window.onload=function (){
  setTimeout(() => {
    $tapaanimada.classList.toggle("opacity-cero"); 
    
  }, 6000); 
  
  Array.prototype.forEach.call($puntos, function($puntos) {
    $puntos.classList.remove("inicial");
    
     
      
    
    $puntos.classList.remove("inicial2");
});


setTimeout(() => {
  Array.prototype.forEach.call($proazules, function($proazules) {
    $proazules.classList.add("azul");
  
  });
  
}, 1000);


}
 */


    

//---------------------------------------------------------



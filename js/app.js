document.addEventListener("DOMContentLoaded", function (event) {

    // Seleccionamos los botones con nombre de clase '.btn' 
    let btn = document.querySelectorAll('.btn');
    
    // Creamos nuestra función 
    function detectarMedidaPantalla() { 

        // Obtenemos el Ancho de la pantalla 
        const ancho = window.innerWidth || document.documentElement.clientWidth || 
        document.body.clientWidth;

        // Obtenemos el Alto de la pantalla (Opcional)
        const alto = window.innerHeight|| document.documentElement.clientHeight|| 
        document.body.clientHeight;

        // Imprimimos las medidas obtenidas en la consola 
        console.log(ancho, alto);

        // Si el ancho del dispositivo es menor a 768px le agregamos la clase 'btn-sm' a los botones 
        if(ancho < 768) {

            for(var i = 0; i < btn.length; i++) {
                btn[i].classList.add("btn-sm");
            }

        // Si el ancho del dispositivo es menor a 900px le quitamos la clase 'btn-sm' a los botones 
        } else if(window.innerWidth < 900){
        
            for(var i = 0; i < btn.length; i++) {
                btn[i].classList.remove("btn-sm");
            }

        // Si el ancho del dispositivo es menor a 1200px le agregamos la clase 'btn-lg' a los botones 
        } else if(window.innerWidth < 1200){
        
            for(var i = 0; i < btn.length; i++) {
                btn[i].classList.add("btn-lg");
            }
        
        // Esta sera la medida por defecto, quitamos las clases 'btn-sm' y 'btn-lg' a los botones 
        } else {

            for(var i = 0; i < btn.length; i++) {
                btn[i].classList.remove("btn-sm");
                btn[i].classList.remove("btn-lg");
            }
        }

    }

    // Para un mejor rendimient, este método debe rebotar para que no tenga que ejecutarse
    // en cada evento de cambio de tamaño, solo cuando haya terminado de cambiar el tamaño.
    window.onresize = detectarMedidaPantalla;

});



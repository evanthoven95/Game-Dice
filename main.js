const button= document.getElementById("boton");
const resultados= document.getElementById("resultados")
// const dado=document.getElementById("dado");

button.addEventListener('click',function(){
    resultados.innerHTML=""; //limpieza de imagenes anteriores

    const selectDado= document.querySelector('input[name="dados"]:checked'); //Para saber que dado ha sido seleccionado
    const cantidadDados= parseInt(selectDado.value); //se obtiene el value de los radio buttons y se convierten 
    // a enteros para poder ser iterados

    for(let i=0; i<cantidadDados;i++){ //se itera i para que genere un numero aleatorio por cada dado, en este caso hay dos, indices 0 y 1.
        const numero=Math.floor(Math.random()*6)+1;
        let ruta="";
         
        
        switch(numero){
        case 1:
            ruta="./dado-1.png"
            break;
        case 2:
            ruta="./dado-2.png"
            break;
        case 3:
            ruta="./dado-3.png"
            break;
        case 4:
            ruta="./dado-4.png"
            break;
        case 5:
            ruta="./dado-5.png"
            break;
        case 6:
            ruta="./dado-6.png"
            break;
    }
    
    
    const img = document.createElement("img"); //crea un elemento imagen
    img.src = ruta; //se agregan las rutas de acuerdo al case que corresponda
    img.alt = `Dado ${numero}`; 
    img.style.width = "150px";
    img.style.marginRight = "50px";

    resultados.appendChild(img);
   
    }
    
});


const radios= document.querySelectorAll('input[name="dados"]'); //Para saber que dado ha sido seleccionado
radios.forEach(radio=>{
    radio.addEventListener("change", function(){
        if (radio.checked){
            console.log(`Seleccionaste ${radio.value} dado`);
        }
    });
});
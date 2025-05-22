const button= document.getElementById("boton");
const dado=document.getElementById("dado");

button.addEventListener('click',function(){
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

    dado.src=ruta;
    dado.style.display="block";
});


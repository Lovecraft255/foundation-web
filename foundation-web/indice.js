let btnMostrar = document.getElementById("btn-mostrar");

let desplegable = document.getElementById("referencias");

let desplegableStyle = window.getComputedStyle(desplegable);


console.log( btnMostrar );

btnMostrar.addEventListener( "click" , () => {

    let despelgableDis = desplegableStyle.getPropertyValue( "display" );

    console.log(desplegable );

    if( despelgableDis == "block"){

        desplegable.style.setProperty( 'display' , 'none' );

        btnMostrar.textContent = "Mostrar";

    }
    
    
    if( despelgableDis == "none" ){

        desplegable.style.setProperty( 'display' , 'block' );

        btnMostrar.textContent = "Ocultar";

    }

    


} );

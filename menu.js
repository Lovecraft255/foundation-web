let btnMenu = document.getElementById("menu-desp");

let desp = document.getElementById("desp-menu");

let despStyle = window.getComputedStyle(desp);

btnMenu.addEventListener("click" , () => {

    let despDis = despStyle.getPropertyValue( "display" );

    if( despDis == "block"){

        desp.style.setProperty( 'display' , 'none' );


    }
    
    
    if( despDis == "none" ){

        desp.style.setProperty( 'display' , 'block' );

    }


})
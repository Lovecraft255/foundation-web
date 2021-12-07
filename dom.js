function createComent(){

    let coment = document.getElementById("coment").value;
    return coment;

}

function addComent( coment ){

    const eliminateBtn = document.createElement("button");

    eliminateBtn.classList.add("fa-trash-alt");

    eliminateBtn.classList.add("fas");
    
    eliminateBtn.classList.add("eliminate-size");

    const comentDiv = document.createElement("div");

    comentDiv.classList.add("bordes");

    const descComent = document.createElement("p");

    descComent.textContent = coment;

    comentDiv.append( descComent );

    comentDiv.append(eliminateBtn);
  
    comentsContent.append(comentDiv);

}

let comentsContent = document.getElementById("coments-content");

let btnPost = document.getElementById("btn-public");

console.log(comentsContent);

comentsContent.addEventListener( "click" , (e) => {

    if( e.target.tagName == "BUTTON" ){

        const parent = e.target.parentElement;

        parent.remove();

        alert( "Se eliminaea el comentario" );

    } 
} );


btnPost.addEventListener( "click" , () => {

    const coment = createComent();

    console.log(coment);
                                                            
    addComent( coment );

} );

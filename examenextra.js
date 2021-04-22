function fboton(){
    
    let request = new XMLHttpRequest();
     request.responseType="json";
     request.open("GET","https://pokeapi.co/api/v2/pokemon/moltres");
     request.send();
     request.onload= function (){
        const $button = document.querySelector("#bot").addEventListener("click",function (){
            let datos = request.response;
            console.log(datos);
        const $div= document.querySelector("#p");
             $div.innerHTML += `<p class="peso"> ${datos.weight}</p>`;});

            
    }
     
}
 fboton();

 function aboton(){
    let request = new XMLHttpRequest();
    request.responseType="json";
    request.open("GET","https://pokeapi.co/api/v2/pokemon/moltres");
    request.send();
    request.onload= function (){
       const $button = document.querySelector("#bot").addEventListener("click",function (){
           let alt = request.response;
           console.log(alt);
       const $div= document.querySelector("#a");
            $div.innerHTML += `<p class="altura"> ${alt.height}</p>`;});

    }
}
 aboton();
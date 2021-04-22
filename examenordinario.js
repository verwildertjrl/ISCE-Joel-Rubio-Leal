function fboton(){
    
    let request = new XMLHttpRequest();
     request.responseType="json";
     request.open("GET","https://covid-api.mmediagroup.fr/v1//cases?country=Mexico");
     request.send();
     request.onload= function (){
        const $button = document.querySelector("#bot").addEventListener("click",function (){
            let casos = request.response;
            console.log(casos);
        const $div= document.querySelector("#c");
             $div.innerHTML += `<p class="casos">Confirmados SARS-CoV-2: ${casos.Tamaulipas.confirmed}</p>`;});
     }
 }
 fboton();
 

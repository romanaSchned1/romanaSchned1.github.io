
let fromHTML = document.getElementById("textOutput");

let codeka = ""; 


for(let i = 0; i < seen.length; i++){
    codeka += "<div>"
    for(let j = 0; j < seen[i].length; j++){
        if(j == 0){
            codeka += `<img class="boxPic" src="${seen[i][j]}"></img>`;
        }
        else{
            codeka += `<p class="box" >${seen[i][j]}</p>`;
        }
        
    }  
    codeka += "</div>" 
    //fromHTML.innerHTML += `<p class="between"></p>`
}

fromHTML.innerHTML += codeka;



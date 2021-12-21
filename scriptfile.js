
let fromHTML = document.getElementById("textOutput");

let codeka = ""; 

let seen=[
    ["./img/seen1.jpg"],
    ["./img/seen2.jpg"],
    ["./img/seen3.jpg"],
    ["./img/seen4.jpg"],
    ["./img/seen5.jpg"],
    ["./img/seen6.jpg"],
    ["./img/seen7.jpg"],
    ["./img/seen8.jpg"],
    ["./img/seen9.jpg"],
    ["./img/seen10.jpg"],
];


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
}

fromHTML.innerHTML += codeka;



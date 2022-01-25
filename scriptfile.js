let getPicFromHTML = document.getElementById('content');
let count = 0;




for (let i = 0; i <= 8; i++) {
    if(i%3==0){
        getPicFromHTML.innerHTML += `<br>`;
    }
    getPicFromHTML.innerHTML += `<img class="picturesSettings" src="./img/seen${i+1}.jpg" alt="picture"></img>`;
}

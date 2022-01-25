
document.getElementById('buttonLeft').addEventListener('click', loadLeft);
document.getElementById('buttoRigth').addEventListener('click', loadRight)

const imageURL = [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
let currentPosition = 0;

function changeImg (){
    for (let i = 0; i < 5; i++) {
        if (currentPosition + i >= imageURL.length) {
            console.log(currentPosition + i - imageURL.length);
            document.images[i].src = `./img/seen${imageURL[currentPosition + i - imageURL.length] +1}.jpg`;
        } else {
            console.log(currentPosition + i);
            document.images[i].src = `./img/seen${imageURL[currentPosition + i] +1}.jpg`;
        }
    }
}

function loadLeft() {
    if (currentPosition == 0){
        currentPosition = 9;
    } else {
        currentPosition--;
    }
    changeImg();
}

function loadRight() {
    if (currentPosition == 10){
        currentPosition = 1;
    } else {
        currentPosition++;
    }
    console.log(currentPosition)
    changeImg();
}

function savePic(elm){
    let favouritePic = elm.src;
    console.log(favouritePic);

}










function random(min, max){
    let randomNumber = Math.random() * (max - min) + min;
    return Math.floor(randomNumber);
}

const min = 1;
const max = 100;

let rand = random(min, max);

do {
    rand = random(min, max);
    console.log(rand);
}while(rand !== 10)
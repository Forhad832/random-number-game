let randomNumber = Math.trunc(Math.random() * 25)
console.log(randomNumber);

function RandomNumberGuessGame(num1,num2,num3,num4,num5){
    console.log(num1,num2,num3,num4,num5);
    let random = document.getElementById('random');
    let limit = parseInt(document.getElementById('limit').innerHTML);

    if(limit>0){
        if (randomNumber === num1 || randomNumber === num2 || randomNumber === num3 || randomNumber === num4 || randomNumber === num5) {
            document.getElementById('mainContentText').textContent = 'You win the game !';
            document.body.style.backgroundColor = '#fff';
            random.textContent = randomNumber;
            score.innerHTML = limit;
        } else {
            document.getElementById('mainContentText').textContent = 'Not Match the number';
            limit--;
           
            document.getElementById('limit').innerHTML = limit;
           random.textContent = '?';
        }
    }else{
        alert('your limit is over !')
    }
}


document.getElementById('one-five').addEventListener('click', function () {
    RandomNumberGuessGame(1,2,3,4,5);
})
document.getElementById('six-ten').addEventListener('click', function () {
    RandomNumberGuessGame(6,7,8,9,10);
})
document.getElementById('eleven-fifty').addEventListener('click', function () {
    RandomNumberGuessGame(11,12,13,14,15);
})

document.getElementById('sixty-twenty').addEventListener('click', function () {
    RandomNumberGuessGame(16,17,18,19,20);
})

document.getElementById('twentyone-twentyfive').addEventListener('click', function () {
    RandomNumberGuessGame(21,22,23,24,25);
})
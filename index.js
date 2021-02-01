// Code your solutions in this file
function writeCards(array,event) {
    let thankYouCards = []
    for (let i=0; i < array.length; i++) {
        thankYouCards.push(`Thank you, ${array[i]}, for the wonderful surprise gift!`);
    }
    return thankYouCards
}

function countDown(int) {
    while (int > 0) {
        console.log(int);
        int -= 1;
    }
    console.log(int);
}
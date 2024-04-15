// Code your solutions in this file
const gifts = ["teddy bear", "drone", "doll"];

function wrapGifts(gifts) {
    for (let i = 0; i < gifts.length; i++) {
        console.log(`Wrapped ${gifts[i]} and added a bow!`);
}

return gifts;
}

wrapGifts(gifts);



function writeCards(names, event) {
    const messages = []
    for (let n = 0; n < names.length; n++) {
        messages.push(`Thank you, ${names[n]}, for the wonderful ${event} gift!`)
    }

return messages;
}

function countDown(number) {
    while (number >= 0) {
        console.log(number--);
      }
}
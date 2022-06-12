// Code your solutions in this file

// WRITECARDS
function writeCards(stringNames, eventName) {

    const messages = [];
   
     for (let i = 0; i < stringNames.length; i++) {
   
       const messageX = `Thank you, ${stringNames[i]}, for the wonderful ${eventName} gift!`;
   
       messages.push(messageX);
     }
   
     return messages;
   
}
   
console.log(writeCards(["Guadalupe", "Ollie", "Aki"], 'wedding'));




// COUNTDOWN
function countDown(num) {
    for (let i = num; i >= 0; i--) {
        console.log(i);
    }
}

console.log(countDown(10));

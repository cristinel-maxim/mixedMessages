

const messages = {
    funnyThings: ['laughing all morning', 'crying all afternoon', 'eating all night', 'moaning all day'],
    feelings: ['happy', 'sad', 'over the moon', 'not from this planet'],
    solutions: ['go out of town', 'go home', 'stay around', 'find somebody like you', 'do nothing', 'watch TV'],
    // generate a random number between 0 and the length of the message array
    genNumber(num) {
        return Math.floor(Math.random()*num);
    },
    // create a function that returns an array of random messages from each array
    genMessages(object) {
        let randomMessages = [];
        for (let key in object) {
            let value = object[key]; 
            let randomNum = this.genNumber(value.length);
            randomMessages.push(value[randomNum]);
        }
        return randomMessages
    }
};
// calling the genMessages method on our object
let personalMessages = messages.genMessages(messages);
//console.log(personalMessages);
// the final function that puts together the random messages
const finalMessages = array => {
    const final = `You've been ${array[0]}. \nBecause you are ${array[1]}. \nYou should ${array[2]}.`
    console.log(final);
}

finalMessages(personalMessages);








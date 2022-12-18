var affirmations = [
'I forgive myself and set myself free.', 
'I believe I can be all that I want to be.', 
'I am in the process of becoming the best version of myself.', 
'I have the freedom & power to create the life I desire.', 
'I choose to be kind to myself and love myself unconditionally.', 
'My possibilities are endless.', 
'I am worthy of my dreams.', 
'I am enough.', 
'I deserve to be healthy and feel good.', 
'I am full of energy and vitality and my mind is calm and peaceful.', 
'Every day I am getting healthier and stronger.', 
'I honor my body by trusting the signals that it sends me.', 
'I manifest perfect health by making smart choices.'
];
var mantras = [
    'Breathing in, I send myself love. Breathing out, I send love to someone else who needs it.',
    'Don/t let yesterday take up too much of today.',
    'Every day is a second chance.',
    'Tell the truth and love everyone.',
    'I am free from sadness.',
    'In the beginning it is you, in the middle it is you and in the end it is you.', 
    'I love myself.',
    'I am present now.',
    'Inhale the future, exhale the past.',
    'This too shall pass.', 
    'Yesterday is not today.', 
    'The only constant is change.', 
    'Onward and upward.',
    'I am the sky, the rest is weather.'
];
var affirmationButton = document.querySelector('#affirmation');
var mantraButton = document.querySelector('#mantra');
var receiveMessageButton = document.querySelector('.receive-message-button');
var symbolSection = document.querySelector('#symbol');
var image = document.querySelector('#Buddha');
var usedMessages = [];
var currentMessage;

receiveMessageButton.addEventListener("click", showMessage)

function getRandomMessage(array) {
    return Math.floor(Math.random() * array.length)
}

function showMessage(event) {
    event.preventDefault()
    if (affirmationButton.checked) {
        var message = affirmations[getRandomMessage(affirmations)]
        symbolSection.innerText = affirmations[getRandomMessage(affirmations)] 
    } else if (mantraButton.checked) {
        symbolSection.innerText = mantras[getRandomMessage(mantras)]
    }
    noRepeatMessages();
     }

function noRepeatMessages() {
    currentMessage = symbolSection.innerText
    if (!usedMessages.includes(currentMessage)) {
        usedMessages.push(currentMessage)        
}
    repeatMessage()
}

function repeatMessage() {
var totalMessages = affirmations.length + mantras.length
    if (usedMessages.length === totalMessages) {
        symbolSection.innerText = 'You have seen all of the messages. You will now see repeat messages. But do not worry, they are usually better the second time around.'
        usedMessages = []
    }
}
    
//When a user selects a message option and then clicks the “Receive Message” button, the user sees a random message from the list of possible messages for that category
//When the message appears, the meditation icon disappears from the message area
//select mantra or affirmation, click receive message button, return message, meditation icon hidden
       
  
// User never sees a repeated message until they’ve seen them all.
// After they’ve seen them all they should be notified that they will now start seeing repeat messages.  
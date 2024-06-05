var answers = [
    'Yes - definitely', 
    'It is decidedly so', 
    'Without a doubt', 
    'Reply hazy, try again',
    'Ask again later', 
    'Better not tell you now', 
    'My sources say no', 
    'Outlook not so good',
    'Very doubtful'
];

function getMagicAnswer() {
    var randomIndex = Math.floor(Math.random() * answers.length);
    return answers[randomIndex];
}

console.log(getMagicAnswer());
var allQuotes =
[
    {
        no : 0,
        quote : " “Be yourself; everyone else is already taken.” ",
        publisher : " ― Oscar Wilde "
    },
    {
        no : 1,
        quote : " “I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.” ",
        publisher : " ― Marilyn Monroe "
    },
    {
        no : 2,
        quote : " “So many books, so little time.” ",
        publisher : " ― Frank Zappa "
    },
    {
        no : 3,
        quote : " “A room without books is like a body without a soul.” ",
        publisher : " ― Marcus Tullius Cicero "
    },
    {
        no : 4,
        quote : " “Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.” ",
        publisher : " ― Bernard M. Baruch "
    },
    {
        no : 5,
        quote : " “You've gotta dance like there's nobody watching, Love like you'll never be hurt,Sing like there's nobody listening,And live like it's heaven on earth.” ",
        publisher : " ― William W. Purkey "
    },
    {
        no : 6,
        quote : " “You know you're in love when you can't fall asleep because reality is finally better than your dreams.” ",
        publisher : " ― Dr. Seuss "
    },
    {
        no : 7,
        quote : " “You only live once, but if you do it right, once is enough.” ",
        publisher : " ― Mae West "
    },
    {
        no : 8,
        quote : " “Be the change that you wish to see in the world.” ",
        publisher : " ― Mahatma Gandhi"
    },
    {
        no : 9,
        quote : " “In three words I can sum up everything I've learned about life: it goes on.” ",
        publisher : " ― Robert Frost "
    },
];

var quoteBox = document.getElementById('Quote');
var publisherBox = document.getElementById('Publisher');
var lastIndex

function showQuote() {
    var randomIndex;

    do {
        randomIndex = Math.floor(Math.random() * allQuotes.length);
    } while (randomIndex === lastIndex);

    lastIndex = randomIndex;

    var selectedQuote = allQuotes[randomIndex];
    quoteBox.textContent = selectedQuote.quote;
    publisherBox.textContent = selectedQuote.publisher;
}
const quotes = [{
    quote: '“Im selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you cant handle me at my worst, then you sure as hell dont deserve me at my best.”',
    writer: '- Marilyn Monroe'
}, {
    quote: '“Two things are infinite: the universe and human stupidity; and Im not sure about the universe.”',
    writer: '- Albert Einstein'
}, {
    quote: '“So many books, so little time.”',
    writer: '- Frank Zappa'
}, {
    quote: '“A room without books is like a body without a soul.”',
    writer: '- Marcus Tullius Cicero'
}, {
    quote: '“Be who you are and say what you feel, because those who mind dont matter, and those who matter dont mind.”',
    writer: '- Bernard M. Baruch'
}, {
    quote: '“Youve gotta dance like theres nobody watching, Love like youll never be hurt, Sing like theres nobody listening, And live like its heaven on earth.”',
    writer: '- William W. Purkey'
},
{
    quote: '“You know youre in love when you cant fall asleep because reality is finally better than your dreams.”',
    writer: '- Dr. Seuss'
}, {
    quote: '“You only live once, but if you do it right, once is enough.”',
    writer: '- Mae West'
}, {
    quote: '“Be the change that you wish to see in the world.”',
    writer: '- Mahatma Gandhi'
},]

let btn = document.querySelector("#Qbtn");
let quote = document.querySelector(".quote");
let writer = document.querySelector(".writer");

btn.addEventListener("click", function () {
    let random = Math.floor(Math.random() * quotes.length);

    quote.innerHTML = quotes[random].quote;
    writer.innerHTML = quotes[random].writer;

})


function Random() 
{
    var quotes =
    [
        {
            Qoute: " “Be yourself; everyone else is already taken.” ",
            author: "― Oscar Wilde"
        },
        {
            Qoute: "“Be the change that you wish to see in the world.”",
            author: "― Mahatma Gandhi"
        },
        {
            Qoute: "“A room without books is like a body without a soul.”",
            author: "― Marcus Tullius Cicero"
        },
        {
            Qoute: "“Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.” ",
            author: '― Bernard M. Baruch'
        },
        {
            Qoute: "“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”",
            author: "― Albert Einstein"
        },
    ]
    var randomCalc = [Math.floor(Math.random() * quotes.length)]
    var Qoute1 = quotes[randomCalc].Qoute
    var author1 = quotes[randomCalc].author
    document.getElementById('demo').innerHTML = Qoute1
    document.getElementById('demo2').innerHTML = author1
}
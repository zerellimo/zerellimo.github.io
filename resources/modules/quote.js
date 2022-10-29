// Footer quote

export default function footerQuote() {
    let quotes = [
        {
            quote: "It has become appallingly obvious that our technology has exceeded our humanity",
            author: "Albert Einstein",
        },
        {
            quote: "It's not a faith in technology. It's faith in people",
            author: "Steve Jobs",
        },
        {
            quote: "The advance of technology is based on making it fit in so that you don't really even notice it, so it's part of everyday life",
            author: "Bill Gates",
        },
    
    ];
    
    let randomQuote = Math.floor((Math.random())*quotes.length);
    document.getElementById("quote").innerHTML = [`"${quotes[randomQuote].quote}." &#8212; ${quotes[randomQuote].author}`];
}
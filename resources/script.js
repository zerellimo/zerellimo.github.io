
// Dark mode

const moon = document.getElementById("moon");

moon.onclick = function() {
    document.body.style.backgroundColor = "rgb(33,33,36)";
    document.getElementById("moon").style.display = "none";
    document.getElementById("sun").style.display = "inline-block";
    document.body.style.color = "snow";
    document.getElementsByClassName("title")[0].style.color = "black";
    document.getElementById("quote").style.color = "black";
    document.getElementsByClassName("dm-button")[0].style.color = "black";
    document.getElementsByClassName("dm-button")[0].style.backgroundColor = "darkgoldenrod";
}

const sun = document.getElementById("sun");

sun.onclick = function() {
    document.body.style.backgroundColor = "snow";
    document.getElementById("sun").style.display = "none";
    document.getElementById("moon").style.display = "inline-block";
    document.body.style.color = "black";
    document.getElementsByClassName("title")[0].style.color = "black";
    document.getElementById("quote").style.color = "black";
    document.getElementsByClassName("dm-button")[0].style.color = "darkgoldenrod";
    document.getElementsByClassName("dm-button")[0].style.backgroundColor = "black";
}

// Footer quote

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
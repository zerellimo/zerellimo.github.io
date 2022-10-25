// Dark-Mode / Light-Mode

let r = document.querySelector(':root');
let sun = document.getElementById("sun");
let moon = document.getElementById("moon");

const setDarkMode = function () {
    r.style.setProperty('--main-backgroundColor', "rgb(33,33,36)");
    r.style.setProperty('--main-color', 'white');
    moon.style.display = "none";
    sun.style.display = "inline-block";
}

const setLightMode = function () {
    r.style.setProperty('--main-backgroundColor', 'white');
    r.style.setProperty('--main-color', 'black');
    moon.style.display = "inline-block";
    sun.style.display = "none";
}

// Auto Dark-Mode (device preference)
const darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)'); // matchMedia method returns a MediaQueryList Object
const darkModeSetByUser = darkModeMediaQuery.matches; // matches is one of the MediaQueryList Object properties - true if the document matches the query, otherwise false.
// set mode accordingly (initial page load)
darkModeSetByUser? setDarkMode():setLightMode(); 
// reset mode if device preference changes
darkModeMediaQuery.onchange = (event) => event.matches? setDarkMode():setLightMode(); // event is a MediaQueryListEvent object, it stores information on the changes that have happened to a MediaQueryList object — instances are available as the event object on a function referenced by a change event.

// Manual Dark-Mode (user click on button)
moon.onclick = setDarkMode;
sun.onclick = setLightMode;


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
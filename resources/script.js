// Dark-Mode / Light-Mode 

let r = document.querySelector(':root');
let sun = document.getElementById("sun");
let moon = document.getElementById("moon");

const setDarkMode = function () {
    r.style.setProperty('--main-backgroundColor', "rgb(33,33,36)");
    r.style.setProperty('--main-color', 'snow');
    moon.style.display = "none";
    sun.style.display = "inline-block";
}

const setLightMode = function () {
    r.style.setProperty('--main-backgroundColor', 'snow');
    r.style.setProperty('--main-color', 'black');
    moon.style.display = "inline-block";
    sun.style.display = "none";
}

// Auto Dark-Mode (device preference)

// check preference 
const darkModeSetByUser = window.matchMedia('(prefers-color-scheme: dark)')

// set mode accordingly (initial page load)
if (darkModeSetByUser) {
    setDarkMode();
} else {
    setLightMode();
}

// reset mode if device preference changes
darkModeSetByUser.onchange = (e) => {

    if (e.matches) {
        setDarkMode();
        
    } else {
        setLightMode();
    }

}

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
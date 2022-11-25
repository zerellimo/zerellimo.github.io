// Dark-Mode / Light-Mode

let theme = localStorage.getItem("theme");

export const setDarkMode = function () {
    let r = document.querySelector(':root');
    r.style.setProperty('--main-backgroundColor', "rgb(33,33,36)");
    r.style.setProperty('--main-color', 'lightgray');
    r.style.setProperty('--moon-display', 'none');
    r.style.setProperty('--sun-display', 'inline-block');
    r.style.setProperty('--darkLogo-display', 'inline');
    r.style.setProperty('--lightLogo-display', 'none');
    r.style.setProperty('--article-color', "lightgray");
    r.style.setProperty('--article-backgroundColor', 'rgb(22,22,24)');
    let theme = localStorage.getItem("theme");
    localStorage.setItem("theme", "dark");
}

export const setLightMode = function () {
    let r = document.querySelector(':root');
    r.style.setProperty('--main-backgroundColor', 'white');
    r.style.setProperty('--main-color', 'black');
    r.style.setProperty('--moon-display', 'inline-block');
    r.style.setProperty('--sun-display', 'none');
    r.style.setProperty('--darkLogo-display', 'none');
    r.style.setProperty('--lightLogo-display', 'inline');
    r.style.setProperty('--article-color', "black");
    r.style.setProperty('--article-backgroundColor', 'rgb(232, 232, 232)');
    let theme = localStorage.getItem("theme");
    localStorage.setItem("theme", "light");
}

// Auto Dark-Mode (device preference)
const darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)'); // matchMedia method returns a MediaQueryList Object
const darkModeSetByUser = darkModeMediaQuery.matches; // matches is one of the MediaQueryList Object properties - true if the document matches the query, otherwise false.
// set mode accordingly (initial page load)
if (darkModeSetByUser) {
    localStorage.setItem("theme", "dark");
} else {
    localStorage.setItem("theme", "light");
}

if (theme === "dark") {
    setDarkMode();
} else if (theme ==="light"){
    setLightMode();
};

// reset mode if device preference changes
darkModeMediaQuery.onchange = (event) => { // event is a MediaQueryListEvent object, it stores information on the changes that have happened to a MediaQueryList object — instances are available as the event object on a function referenced by a change event.
    if(event.matches) {
        localStorage.setItem("theme", "dark");
        setDarkMode();
    } else {
        localStorage.setItem("theme", "light");
        setLightMode();
    }
};
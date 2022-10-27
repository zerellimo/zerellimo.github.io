// Dark-Mode / Light-Mode

export const darkMode = () => {
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
}

export default darkMode;
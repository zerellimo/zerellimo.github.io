// Imports
import {setDarkMode, setLightMode} from './modules/dark.js'
import footerQuote from './modules/quote.js';

// dark mode
let sun = document.getElementById("sun");
let moon = document.getElementById("moon");
// Manual Dark-Mode (user click on button)
moon.onclick = setDarkMode;
sun.onclick = setLightMode;

// footer quote
footerQuote();
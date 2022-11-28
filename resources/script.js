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

// color nav element based on current page 
let path = window.location.pathname;
/*let page = path.split('/').pop();
console.log(page);*/
let element = document.querySelector(`[href=".${path}`);
element.style.setProperty('text-decoration', 'underline');
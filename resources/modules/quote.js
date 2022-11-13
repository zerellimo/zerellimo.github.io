// Footer quote

export default function footerQuote() {

    let sampleQuotes = [
        {
            q: "It has become appallingly obvious that our technology has exceeded our humanity.",
            a: "Albert Einstein",
        },
        {
            q: "It's not a faith in technology. It's faith in people.",
            a: "Steve Jobs",
        },
        {
            q: "The advance of technology is based on making it fit in so that you don't really even notice it, so it's part of everyday life.",
            a: "Bill Gates",
        },
    
    ];
    
    const getQuotes = async () => {
        try {
            let response = await fetch("https://zenquotes.io/api/quotes");
            if (response.ok) {
                const res = await response.json();
                let storedQuotes = localStorage.getItem("quotes"); 
            
                if(localStorage.getItem("quotes")!= null) {
                    display1Quote(JSON.parse(storedQuotes))
                } else if (!res) {
                    // console.log('not resolved');
                    display1Quote(sampleQuotes);
                } else if (res[0].a === "zenquotes.io") {
                    // console.log('too many requests, exceeded API limits');
                    display1Quote(sampleQuotes);
                } else {
                    // console.log(res);
                    // saving fetched quotes in localStorage due to API limits 
                    localStorage.setItem("quotes", JSON.stringify(res)); // local storage does not work with js objects -> convert to string then (re)parse
                    storedQuotes = localStorage.getItem("quotes");
                    display1Quote(JSON.parse(storedQuotes));
                }

            }
        } catch (error) {
            console.log(error);
        }

    }

    
    
    const display1Quote = (list) => {

        let quoteElement = document.getElementById("quote");
        let randomNumber = Math.floor(Math.random()*list.length);
        quoteElement.innerHTML = [`"${list[randomNumber].q}" &#8212; ${list[randomNumber].a}`];
        quoteElement.style.display = "inline";
        
    }
    
    getQuotes();

}
// Footer quote

export default function footerQuote() {

    let sampleQuotes = [
        {
            quote: "It has become appallingly obvious that our technology has exceeded our humanity.",
            author: "Albert Einstein",
        },
        {
            quote: "It's not a faith in technology. It's faith in people.",
            author: "Steve Jobs",
        },
        {
            quote: "The advance of technology is based on making it fit in so that you don't really even notice it, so it's part of everyday life.",
            author: "Bill Gates",
        },
    
    ];

    const readOnlyAPIKey = '0AzTKB2z8fr8I8vVDtS3mQ==e2mUIilqydwiojy7';
    const endPoint = 'https://api.api-ninjas.com/v1/quotes'
    const requestParams = '?limit=10';
    const urlToFetch = endPoint + requestParams;

    let storedQuotes = localStorage.getItem("quotes"); 
    
    const getQuotes = async () => {
        try {

            let response = await fetch(urlToFetch, {
                method: 'GET',
                headers: {
                    'X-Api-Key': readOnlyAPIKey,
                    'Content-Type': 'application/json',
                }
            });

            if (response.ok) {

                const res = await response.json();

                if(localStorage.getItem("quotes")!= null) {
                    display1Quote(JSON.parse(storedQuotes))
                } else if (!res) {
                    // console.log('not resolved');
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
            display1Quote(sampleQuotes);
        }

    }

    const display1Quote = (list) => {

        let quoteElement = document.getElementById("quote");
        let randomNumber = Math.floor(Math.random()*list.length);
        quoteElement.innerHTML = [`"${list[randomNumber].quote}" <br> &#8212; ${list[randomNumber].author}`];
        quoteElement.style.display = "inline";
        
    }
    
    getQuotes();

}
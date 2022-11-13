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
    const requestParams = '?category=computers&limit=10';
    const urlToFetch = endPoint + requestParams;
    
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
                
                if (!res) {
                    // console.log('not resolved');
                    display1Quote(sampleQuotes);
                } else {
                    // console.log(res);
                    display1Quote(res);
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
        quoteElement.innerHTML = [`"${list[randomNumber].quote}" <br> <br> &#8212; ${list[randomNumber].author}`];
        quoteElement.style.display = "inline";
        
    }
    
    getQuotes();

}
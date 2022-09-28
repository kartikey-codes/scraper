let events = [{}]
let i = 0;
window.setInterval(function(){
    let button = document.evaluate ('', document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null); // add xpath to the button you wanna click
    events.push(document.getElementById('').innerText); // id of the data you want to scrape
    i++;
    if(i == 10){    //  depends on the number of pages on the website
        window.clearInterval();
    }
},5000);
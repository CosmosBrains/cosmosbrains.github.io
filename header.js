    fetch("header.html")
    .then(response => response.text())
    .then(data => {
    document.getElementById("head").innerHTML = data
    })

    //Ah, crawling between where the lines are drawn. Why are you here?

    //This script fetches the header from header.html for each page, so I don't have to recreate it for every page. Very handy.

    //Still don't know why you're here. If you're looking for something, maybe trying looking around the 404 page.

    //There are many secrets there.
function sendHTTPRequest(metodo, url, data) {
    return fetch(url, {
        method: method,
        body: JSON.stringify(data),
        headers:{
            "Content-type": "aplication/json",
        },
         
    }).then((response) => {
        returnresponse.jons();
    });
}

function fetchPosts () {
    const responseData = await
    sendHTTPRequest("GET", "https://jsonplaceholder.typicode.com/posts");
    console.log(responseData);
    const ListOfPosts = responseData;
    
}

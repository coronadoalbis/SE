function fetchData() {
    fetch("https://rickandmortyapi.com/api/character")
    .then((Response)  => Response.json ())
    .then((Data) => console.log(Data))
    .catch(error) => console.log(error);

}


async function fetchData() {
    try {
     let Response = await fetch("https://rickandmortyapi.com/api/character")
     let Data = await Response.json();
     console.log(Data)
    } catch(error) {
    console.log(error);
    }
}
const urls = [
    "https://rickandmortyapi.com/api/character",
    "https://rickandmortyapi.com/api/character",
    "https://rickandmortyapi.com/api/character",
];

async function fetchNewData() {
    try {
        for await(let url of urls) {
            let Response= await fetch (url);
            let data = await Response.json();
        
        console.log(data)
    } 
 } catch(error) {
        console.log(error);
    }
}


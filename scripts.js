const URL = "https://dummyjson.com/recipes";

async function chamarAPI() {
    const resp = await fetch(URL);
    const data = await resp.json();
    console.log(data);
        })
        .catch(error => {
            console.error('Error:', error);
        });
}
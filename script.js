
const search_input = document.getElementById("search-input");
const search_btn = document.getElementById("search-btn");
const result = document.getElementById("result");

search_btn.addEventListener("click", () => {
    let userInput = search_input.value;

    fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${userInput}`)
        .then((response) => response.json())
        .then((data) => {
            // console.log(data)
            result.innerHTML= `<h1>Word:- ${userInput}</h1>`

            data.forEach(function(word){
                const meanings = word.meanings;
                // console.log(meanings)                
                for (const meaning of meanings) {
                    const partOfSpeech = meaning.partOfSpeech;
                    const definitions = meaning.definitions;

                    result.innerHTML += `<h4>${partOfSpeech}</h4>`;
                    for (const definition of definitions) {
                        result.innerHTML += `<p>${definition.definition}</p>`;
                    }
            }
            });
        })
        .catch((error) => {
            result.innerHTML = `<p>Error fetching data: ${error}</p>`;
        });
});






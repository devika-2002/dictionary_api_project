


const search_input = document.getElementById("search-input");
const search_btn = document.getElementById("search-btn");
const result = document.getElementById("result");

search_btn.addEventListener("click", () => {
    let userInput = search_input.value;
    result.innerHTML = "";

    fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${userInput}`)
        .then((response) => response.json())
        .then((data) => {
            // console.log(data)
            result.innerHTML += `<h1>Word:- ${userInput}</h1>`
            data.map(word => {
                const meanings = word.meanings;
                // console.log(meanings)
                if (meanings) {
                    meanings.forEach(meaning => {
                        const partOfSpeech = meaning.partOfSpeech;
                        result.innerHTML += `<h4>Part of Speech: ${partOfSpeech}</h4>`;
                        meaning.definitions.forEach(definition => {
                            result.innerHTML += `<p>-Definition: ${definition.definition}</p>`;
                        });
                    });
                } else {
                    result.innerHTML += `<p>No meanings found for the word "${userInput}"</p>`;
                }
            });
        })
        .catch((error) => {
            result.innerHTML = `<p>Error fetching data: ${error}</p>`;
        });
});





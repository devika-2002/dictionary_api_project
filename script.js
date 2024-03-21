

const search_input = document.getElementById("search-input");
const search_btn = document.getElementById("search-btn");
const result = document.getElementById("result");

search_btn.addEventListener("click", () => {
    let userInput = search_input.value;
    console.log(userInput);
    fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${userInput}`)
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
            result.innerHTML = `<h3>Word:- ${data[0].word}</h3>
                                <p>-Definitions: ${data[0].meanings[0].definitions[0].definition}</p>`;
        })
        .catch((error) => {
            console.log("Error fetching data ",error);
        });
});
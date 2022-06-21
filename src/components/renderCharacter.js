const body = document.getElementById("body")

const characterContainer = document.createElement("div");
characterContainer.classList.add("characterThumbnail");
characterContainer.id = "characterContainer"
body.appendChild(characterContainer);


function createCharacterThumbnail() {
    document.getElementById("characterContainer")
    let inputVal = document.getElementById("input").value;

    characterContainer.innerHTML = `Hello ${inputVal}`;


    // fetch("https://api.github.com/user")
    //     .then((res) => res.json())
    //     .then((character) => console.log(character));
    // renderCharacterThumbnail(characterContainer, character)
    // );
    inputVal = "";
    return characterContainer;
}

// function renderCharacterThumbnail(characterContainer, character) {
// characterContainer.innerHTML =
//     `<img id = ${character.id} src = ${character.image}>`;
// }
export default createCharacterThumbnail;
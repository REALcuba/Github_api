


function createCharacterThumbnail() {
    const body = document.getElementById("body")

    const characterContainer = document.createElement("div");
    characterContainer.classList.add("characterThumbnail");
    body.appendChild(characterContainer);
    characterContainer.id = "characterContainer"
    let inputVal = document.getElementById("input").value;

    characterContainer.innerHTML = `Hello ${inputVal}`;



    // fetch("https://api.github.com/user/repos")
    //     .then((res) => res.json())
    //     .then((character) => console.log(character));
    // renderCharacterThumbnail(characterContainer, character)
    // );
    return characterContainer;
}

// function renderCharacterThumbnail(characterContainer, character) {
// characterContainer.innerHTML =
//     `<img id = ${character.id} src = ${character.image}>`
// `<h4>${character.name}</h4>` +
// `<h5>${character.species} | ${character.status}</h5>`;
// }
export default createCharacterThumbnail;
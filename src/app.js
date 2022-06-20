import createCharacterThumbnail from "./components/renderCharacter"

const createInputEl = () => {

    const body = document.getElementById("body")
    const inputDiv = document.createElement("div");
    inputDiv.classList.add("inputDiv");
    body.appendChild(inputDiv);

    inputDiv.id = "inputDiv";

    inputDiv.innerHTML = `<input id="input" type="text"/>  ` + ` <button id = "searchButton">Search</button>`;
}


const searchButton = () => {
    const button = document.getElementById("searchButton");
    button.addEventListener("click", () => {
        let inputVal = document.getElementById("input").value;
        createCharacterThumbnail();
        // alert(inputVal);
        console.log(inputVal);
        inputVal = "";
    })
}




createInputEl()
searchButton()
// getuser()
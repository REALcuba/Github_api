import searchButton from "./components/searchButton/searchButton";
const createInputEl = () => {

    const body = document.getElementById("body")
    const inputDiv = document.createElement("div");
    inputDiv.classList.add("inputDiv");
    body.appendChild(inputDiv);

    inputDiv.id = "inputDiv";

    inputDiv.innerHTML = `<input id="input" type="text"/>  ` + ` <button id = "searchButton">Search</button>`;
}







createInputEl()
searchButton()
// getuser()
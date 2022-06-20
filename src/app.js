
const createInputEl = () => {

    const body = document.getElementById("body")
    const inputDiv = document.createElement("div");
    inputDiv.classList.add("inputDiv");
    body.appendChild(inputDiv);

    inputDiv.id = "inputDiv";

    inputDiv.innerHTML = `<input  type="text"/>  ` + ` <button id = "searchButton">Search</button>`;

    let inputVal = document.getElementById("inputDiv").value;
    return inputVal;
}


const searchButton = () => {
    const button = document.getElementById("searchButton");
    button.addEventListener("click", () => {
        alert('Hey, someone clicked me!');
        console.log("tomato");
    })

}




createInputEl()
searchButton()
// getuser()
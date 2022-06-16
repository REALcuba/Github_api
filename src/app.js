const searchButton = () => {
    const inputDiv = document.getElementById("inputDiv");
    const searchButton = document.createElement("button");
    searchButton.classList.add("searchButton");
    searchButton.textContent = `<h1>Search</h1>`;
    inputDiv.appendChild(searchButton);
    return searchButton;
    // searchButton.addEventListener('click', () => {
    //     alert('Hey, someone clicked me!');
    // });
    console.log("tomato");
}

const createInput = () => {
    const body = document.getElementById("body")
    const inputDiv = document.createElement("div");
    inputDiv.classList.add("inputDiv");
    body.appendChild(inputDiv);

    inputDiv.id = "inputDiv";
    inputDiv.innerHTML = `<input type="text"/>` + `${searchButton()}`;

}
// const getuser = () => {

// }




// searchButton()
createInput()
// getuser()
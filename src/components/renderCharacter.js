const body = document.getElementById("body")

const characterContainer = document.createElement("div");
characterContainer.classList.add("characterThumbnail");
characterContainer.id = "characterContainer"
body.appendChild(characterContainer);


function createCharacterThumbnail() {
    document.getElementById("characterContainer")
    let inputVal = document.getElementById("input").value;


    characterContainer.innerHTML = `<div>Hello ${inputVal}</div>`;

    // renderCharacterThumbnail(characterContainer, users)
    // function renderCharacterThumbnail(characterContainer, users) {
    //     // characterContainer.innerHTML =
    //     //     `<div >${users} </div>`;

    getUserList()
    // }
    characterContainer.innerHTML = `<div>Hello ${inputVal}</div>`;
    return characterContainer;
}
const getUserList = () => {
    fetch(`https://api.github.com/users`)
        .then((res) => res.json())
        .then((users) => {
            console.log(users)
        }

        )
};
function Error(error) {
    console.log(error);
}


export default createCharacterThumbnail;
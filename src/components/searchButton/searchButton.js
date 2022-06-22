import createCharacterThumbnail from "../renderCharacter";


const searchButton = () => {
    const button = document.getElementById("searchButton");
    button.addEventListener("click", createCharacterThumbnail)
}
export default searchButton;
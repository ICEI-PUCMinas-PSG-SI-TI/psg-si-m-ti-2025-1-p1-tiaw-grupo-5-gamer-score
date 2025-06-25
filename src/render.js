import { translatePage } from './utils.js';
import { createNewCommentModel } from './models.js';
import { renderPost, renderSideBar, renderGameSelectionBox, renderLanguageSelectionBox, renderCommentBox, makeComment } from './facade.js';

let username = "Henrique";
let password = "Password123"

let language = "English";

renderSideBar(username, language)

renderPost(language, username);

renderLanguageSelectionBox()

renderGameSelectionBox()

translatePage(language)

document.getElementById("language-select").addEventListener("change", function(event) {
        language = event.target.value;
        translatePage(language)

        document.querySelector("main").innerHTML = "";
        renderCommentBox(language)
        renderGameSelectionBox()
        renderPost(language, username);

        document.querySelector(".commentBoxForm").addEventListener("submit", function(event) {
            event.preventDefault(); 
            makeComment(username);
        });
});

let buttonDiv = document.getElementsByClassName("delete-buton-div");

console.log(buttonDiv)

// document.querySelector("#delete-buton").addEventListener("click", (event) => {

// });

document.querySelector(".commentBoxForm").addEventListener("submit", function(event) {
    event.preventDefault(); 
    makeComment(username);
});









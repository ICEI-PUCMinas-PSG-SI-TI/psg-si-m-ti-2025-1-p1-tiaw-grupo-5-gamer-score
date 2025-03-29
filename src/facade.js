import { getAllComments, getGamesNames, getSpecificUserData, updateAvarageScoreOfGame, createCommentFromSpecificGame } from "./endpoints.js";
import { createPost, createGameSelectBox, createSidebarPerfil, createLanguageSelectBox, translationsOptions, createCommentBox } from "./utils.js";

//Renderiza todos os comentários já feitos
export async function renderPost(language, username) {
    const comments = await getAllComments();

    const sessionUser = await getSpecificUserData(username); 

    for (const comment of comments) {
        const user = await getSpecificUserData(comment.user); 
        createPost(comment, user, language, sessionUser);
    }
}

//Renderiza a caixa de comentários 
export async function renderCommentBox(language) {
    createCommentBox(language);
    
}

//Renderiza a sidebar de perfil do usuário
export async function renderSideBar(username, language) {
    const user = await getSpecificUserData(username);

    createSidebarPerfil(user, language)
}

//Renderiza as opções de seleção de jogos dentro da comment box
export async function renderGameSelectionBox() {
    const gamesName = await getGamesNames();

    for (const names of gamesName) {
        createGameSelectBox(names)
    }
}

//Renderiza as opções de seleção de jogos dentro da comment box
export async function renderLanguageSelectionBox() {

    const languages = translationsOptions;

    for (const language of languages) {
        createLanguageSelectBox(language);
    }

}

//Realiza a criação de um novo comentário
export async function makeComment(username) {

     const game = document.getElementById("game-select").value.trim();
     const score = document.getElementById("score-select").value.trim();
     const comment = document.getElementById("commentBox").value.trim();
     const platform = document.getElementById("platform-select").value.trim();

    const user = await getSpecificUserData(username)

    const updateScore = await updateAvarageScoreOfGame(game, score);

    await createCommentFromSpecificGame(game, comment, user, score, platform);
}
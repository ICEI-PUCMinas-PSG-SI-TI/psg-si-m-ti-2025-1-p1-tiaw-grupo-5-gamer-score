import { translations } from '../dictionary/language.js';

//Gera um número aleatório para o Id
export function generateRandomNumber() {
    const randomNumber = Math.floor(Math.random() * 100000) + 1;
    return randomNumber;
}

//Faz o calculo de tempo
export function timeSinceComment(commentDate, language) {

    if (!commentDate || isNaN(new Date(commentDate))) {
        console.error("Data inválida recebida:", commentDate);
        return "Data inválida";
    }

    const now = new Date(); // Data atual
    const commentTime = new Date(commentDate); // Data do comentário
    const diffInMs = now - commentTime; // Diferença em milissegundos

    // Converter milissegundos para unidades maiores
    const seconds = Math.floor(diffInMs / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);
    const months = Math.floor(days / 30);
    const years = Math.floor(days / 365);

    switch (language) {
        case "Português":
            if (years > 0) return `${years} ano${years > 1 ? 's' : ''} atrás`;
            if (months > 0) return `${months} mês${months > 1 ? 'es' : ''} atrás`;
            if (days > 0) return `${days} dia${days > 1 ? 's' : ''} atrás`;
            if (hours > 0) return `${hours} hora${hours > 1 ? 's' : ''} atrás`;
            if (minutes > 0) return `${minutes} minuto${minutes > 1 ? 's' : ''} atrás`;
            return `${seconds} segundo${seconds > 1 ? 's' : ''} atrás`;

        case "English":
            if (years > 0) return `${years} year${years > 1 ? 's' : ''} ago`;
            if (months > 0) return `${months} month${months > 1 ? 's' : ''} ago`;
            if (days > 0) return `${days} day${days > 1 ? 's' : ''} ago`;
            if (hours > 0) return `${hours} hour${hours > 1 ? 's' : ''} ago`;
            if (minutes > 0) return `${minutes} minute${minutes > 1 ? 's' : ''} ago`;
            return `${seconds} second${seconds > 1 ? 's' : ''} ago`;

        case "日本語":
            if (years > 0) return `${years}年前に公開されました`;
            if (months > 0) return `${months}ヶ月前に公開されました`;
            if (days > 0) return `${days}日前に公開されました`;
            if (hours > 0) return `${hours}時間前に公開されました`;
            if (minutes > 0) return `${minutes}分前に公開されました`;
            return `${seconds}秒前に公開されました`;

        default:
            return "Unsupported language"; // Caso a linguagem não seja reconhecida
    }
}

//Traduz a página
export function translatePage(language) {
    const elements = document.querySelectorAll("[data-translate]");

    elements.forEach(element => {
        const key = element.getAttribute("data-translate");
        
        if (translations[language][key]) {
            element.innerText = translations[language][key];
        }
    });

    // Atualiza placeholders
    const placeholders = document.querySelectorAll("[data-translate-placeholder]");

    placeholders.forEach(element => {
        const key = element.getAttribute("data-translate-placeholder");
        if (translations[language][key]) {
            element.placeholder = translations[language][key];
        }
    });
}

export function createPost(comment, user, language, sessionUser) {
    const specs = user.spec;

    let adminExclusion;

    const platformIcon = verifyDeviceIcon(comment.platform);

    const commentTime = timeSinceComment(comment.date, language);

    const score = translations[language]["game-score"];
    const title = translations[language]["popover-title"];
    const processor = translations[language]["popover-processor"];
    const ram = translations[language]["popover-ram"];
    const graphics = translations[language]["popover-graphics"];
    const storage = translations[language]["popover-storage"];
    const os = translations[language]["popover-os"];
    const deleteButton = translations[language]["delete-button"];

    const specsPopover = `
        <strong>${processor}:</strong> ${specs.processor}<br>
        <strong>${ram}:</strong> ${specs.ram}<br>
        <strong>${graphics}:</strong> ${specs.graphic_cards}<br>
        <strong>${storage}:</strong> ${specs.storage}<br>
        <strong>${os}:</strong> ${specs.operating_system}
    `;

    if(sessionUser.role === "Admin") {
        adminExclusion = `<div class = "delete-buton-div"><button id="delete-buton" value = ${comment.comment_id}>${deleteButton}</button></div>`
    } else {
        adminExclusion = ``;
    }

    // Criando um novo elemento <article>
    const post = document.createElement("article");
    post.classList.add("post");

    // Definindo o conteúdo com innerHTML
    post.innerHTML = `
        <header>
            <div class="author">
                <img 
                    class="avatar"
                    src="${user.image}" 
                    alt="Avatar de ${comment.user}"
                    data-bs-toggle="popover"
                    data-bs-html="true"
                    data-bs-trigger="hover focus"
                    data-bs-placement="bottom"
                    title=${title}
                    data-bs-content="${specsPopover}">
                <div class="authorInfo">
                    <strong>${comment.user}</strong>
                    <span>${user.role}</span>
                </div>
            </div>
            <time dateTime="${new Date().toISOString()}" data-translate="post-time">${commentTime}</time>
        </header>

        <dev class="game-name">${platformIcon}<h2>${comment.game_name}</h2></dev>

        <div class="content">
            <p>${comment.comment}</p>
        </div>

        <dev class="game-score"><h3>${score} ${comment.score}</h3></dev>
        ${adminExclusion}
    `;

    // Adicionando o post ao <main>
    document.querySelector("main").appendChild(post);

    const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]');
    const popoverList = [...popoverTriggerList].map(popoverTriggerEl => new bootstrap.Popover(popoverTriggerEl));
}

export function createSidebarPerfil(user, language) {

    const profileText = translations[language]["profile-edit"];

    let role;

    if(user.role == "Admin") {
        role = translations[language]["role-admin"];
    } else {
        role = translations[language]["role-user"];
    }

    const perfil = document.createElement("aside");
    perfil.classList.add("sidebar");

    perfil.innerHTML = `
        <img class="cover" src="${user.cover_image}" alt="background-photo">
        <div class="profile">
            <img class="avatar" src="${user.image}">
            <strong>${user.username}</strong>
            <span>${role}</span>
        </div>
        <footer>
            <a href="#" data-translate = "profile-edit">${profileText}</a>
        </footer>
    `;

    document.querySelector(".wrapper").prepend(perfil);
    
}

export function createGameSelectBox(name) {

    const selection = document.getElementById("game-select");

    const option = document.createElement("option");
    option.classList.add("game-option");
    option.value = name;
    option.textContent = name;

    selection.appendChild(option);
}

export const translationsOptions = ["English", "Português", "日本語"]

export function createLanguageSelectBox(name) {

    const selection = document.getElementById("language-select");

    const option = document.createElement("option");
    option.classList.add("language-option");
    option.value = name;
    option.textContent = name;

    selection.appendChild(option);
}

export function createCommentBox(language) {

    const placeHolder = translations[language]["select-placeholder"];
    const textHolder = translations[language]["comment-placeholder"];
    const buttonHolder = translations[language]["comment-button"];
    const scoreHolder = translations[language]["select-score-placeholder"];
    const platformHolder = translations[language]["select-platform-placeholder"];
    
    const commentBox = document.createElement("article");
    commentBox.classList.add("comment-box");

    commentBox.innerHTML = `
                <select name="game-options" id="game-select">
                    <option id = "game-placeholder" value = "" data-translate = "select-placeholder">${placeHolder}</option>
                </select>
                <select name="game-score" id="score-select">
                    <option id = "score-placeholder" value = "" data-translate = "select-score-placeholder">${scoreHolder}</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                </select>
                <select name="game-platform" id="platform-select">
                    <option id = "platform-placeholder" value = "" data-translate = "select-platform-placeholder">${platformHolder}</option>
                    <option value="pc">PC</option>
                    <option value="switch">Switch</option>
                    <option value="xbox">Xbox</option>
                    <option value="playstation">playstation</option>
                </select>
                <form class="commentBoxForm">
                    <textarea id = "commentBox" placeholder= ${textHolder} data-translate-placeholder = "comment-placeholder"></textarea>
                    <button type="submit" id = "commentButton" data-translate = "comment-button">${buttonHolder}</button>
                </form>
    `;

    document.querySelector("main").appendChild(commentBox);
    
}

export function verifyDeviceIcon(device) {
    switch (device.toLowerCase()) {
        case "playstation":
            return `<svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" fill="currentColor" class="bi bi-playstation" viewBox="0 0 16 16">
                        <path d="M15.858 11.451c-.313.395-1.079.676-1.079.676l-5.696 2.046v-1.509l4.192-1.493c.476-.17.549-.412.162-.538-.386-.127-1.085-.09-1.56.08l-2.794.984v-1.566l.161-.054s.807-.286 1.942-.412c1.135-.125 2.525.017 3.616.43 1.23.39 1.368.962 1.056 1.356M9.625 8.883v-3.86c0-.453-.083-.87-.508-.988-.326-.105-.528.198-.528.65v9.664l-2.606-.827V2c1.108.206 2.722.692 3.59.985 2.207.757 2.955 1.7 2.955 3.825 0 2.071-1.278 2.856-2.903 2.072Zm-8.424 3.625C-.061 12.15-.271 11.41.304 10.984c.532-.394 1.436-.69 1.436-.69l3.737-1.33v1.515l-2.69.963c-.474.17-.547.411-.161.538.386.126 1.085.09 1.56-.08l1.29-.469v1.356l-.257.043a8.45 8.45 0 0 1-4.018-.323Z"/>
                    </svg>`;
        case "xbox":
            return `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-xbox" viewBox="0 0 16 16">
                        <path d="M7.202 15.967a8 8 0 0 1-3.552-1.26c-.898-.585-1.101-.826-1.101-1.306 0-.965 1.062-2.656 2.879-4.583C6.459 7.723 7.897 6.44 8.052 6.475c.302.068 2.718 2.423 3.622 3.531 1.43 1.753 2.088 3.189 1.754 3.829-.254.486-1.83 1.437-2.987 1.802-.954.301-2.207.429-3.239.33m-5.866-3.57C.589 11.253.212 10.127.03 8.497c-.06-.539-.038-.846.137-1.95.218-1.377 1.002-2.97 1.945-3.95.401-.417.437-.427.926-.263.595.2 1.23.638 2.213 1.528l.574.519-.313.385C4.056 6.553 2.52 9.086 1.94 10.653c-.315.852-.442 1.707-.306 2.063.091.24.007.15-.3-.319Zm13.101.195c.074-.36-.019-1.02-.238-1.687-.473-1.443-2.055-4.128-3.508-5.953l-.457-.575.494-.454c.646-.593 1.095-.948 1.58-1.25.381-.237.927-.448 1.161-.448.145 0 .654.528 1.065 1.104a8.4 8.4 0 0 1 1.343 3.102c.153.728.166 2.286.024 3.012a9.5 9.5 0 0 1-.6 1.893c-.179.393-.624 1.156-.82 1.404-.1.128-.1.127-.043-.148ZM7.335 1.952c-.67-.34-1.704-.705-2.276-.803a4 4 0 0 0-.759-.043c-.471.024-.45 0 .306-.358A7.8 7.8 0 0 1 6.47.128c.8-.169 2.306-.17 3.094-.005.85.18 1.853.552 2.418.9l.168.103-.385-.02c-.766-.038-1.88.27-3.078.853-.361.176-.676.316-.699.312a12 12 0 0 1-.654-.319Z"/>
                    </svg>`;
        case "switch":
            return `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-nintendo-switch" viewBox="0 0 16 16">
                        <path d="M9.34 8.005c0-4.38.01-7.972.023-7.982C9.373.01 10.036 0 10.831 0c1.153 0 1.51.01 1.743.05 1.73.298 3.045 1.6 3.373 3.326.046.242.053.809.053 4.61 0 4.06.005 4.537-.123 4.976-.022.076-.048.15-.08.242a4.14 4.14 0 0 1-3.426 2.767c-.317.033-2.889.046-2.978.013-.05-.02-.053-.752-.053-7.979m4.675.269a1.62 1.62 0 0 0-1.113-1.034 1.61 1.61 0 0 0-1.938 1.073 1.9 1.9 0 0 0-.014.935 1.63 1.63 0 0 0 1.952 1.107c.51-.136.908-.504 1.11-1.028.11-.285.113-.742.003-1.053M3.71 3.317c-.208.04-.526.199-.695.348-.348.301-.52.729-.494 1.232.013.262.03.332.136.544.155.321.39.556.712.715.222.11.278.123.567.133.261.01.354 0 .53-.06.719-.242 1.153-.94 1.03-1.656-.142-.852-.95-1.422-1.786-1.256"/>
                        <path d="M3.425.053a4.14 4.14 0 0 0-3.28 3.015C0 3.628-.01 3.956.005 8.3c.01 3.99.014 4.082.08 4.39.368 1.66 1.548 2.844 3.224 3.235.22.05.497.06 2.29.07 1.856.012 2.048.009 2.097-.04.05-.05.053-.69.053-7.94 0-5.374-.01-7.906-.033-7.952-.033-.06-.09-.063-2.03-.06-1.578.004-2.052.014-2.26.05Zm3 14.665-1.35-.016c-1.242-.013-1.375-.02-1.623-.083a2.81 2.81 0 0 1-2.08-2.167c-.074-.335-.074-8.579-.004-8.907a2.85 2.85 0 0 1 1.716-2.05c.438-.176.64-.196 2.058-.2l1.282-.003v13.426Z"/>
                    </svg>`;
        case "pc":
            return `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pc-display" viewBox="0 0 16 16">
                        <path d="M8 1a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1zm1 13.5a.5.5 0 1 0 1 0 .5.5 0 0 0-1 0m2 0a.5.5 0 1 0 1 0 .5.5 0 0 0-1 0M9.5 1a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1zM9 3.5a.5.5 0 0 0 .5.5h5a.5.5 0 0 0 0-1h-5a.5.5 0 0 0-.5.5M1.5 2A1.5 1.5 0 0 0 0 3.5v7A1.5 1.5 0 0 0 1.5 12H6v2h-.5a.5.5 0 0 0 0 1H7v-4H1.5a.5.5 0 0 1-.5-.5v-7a.5.5 0 0 1 .5-.5H7V2z"/>
                    </svg>`;
        default:
            return "❓ Unknown Device";
    }
}

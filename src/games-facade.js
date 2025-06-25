import { getGames } from "./endpoints.js"; 

const recentGames = document.getElementById('games');

export async function renderGames() {
    const registered_games = await getGames();

    console.log(registered_games);

    registered_games.forEach((game, index) => {
        const card = document.createElement('div');
        card.className = 'game-card';

        // Cria um link que envolve todo o conteúdo do card
        card.innerHTML = `
        <a href="detalhes.html?id=${game.id}" style="text-decoration: none; color: inherit;">
            <img src="${game.image}" alt="${game.name}">
            <div class="game-info">
                <h2>${game.name}</h2>
                <div class="genre">${game.genre}</div>
                <div class="score">Nota média: ${game.avarage_score ?? game.average_score}</div>
            </div>
        </a>
        `;

        recentGames.appendChild(card);
    });
}


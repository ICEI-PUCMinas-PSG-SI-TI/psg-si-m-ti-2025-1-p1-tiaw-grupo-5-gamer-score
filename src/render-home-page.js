import { translatePage } from './utils.js';
import { createNewCommentModel } from './models.js';
import { renderPost, renderSideBar, renderGameSelectionBox, renderGameFilterBox, renderLanguageSelectionBox, renderCommentBox, makeComment } from './home-facade.js';

let username = "Henrique";
let password = "Password123"

let language = "English";

renderSideBar(username, language)

renderPost(language, username);

renderLanguageSelectionBox()

renderGameSelectionBox()

createNewComment();

renderGameFilterBox()

translatePage(language)

document.getElementById("language-select").addEventListener("change", function(event) {
        language = event.target.value;
        translatePage(language)

        document.querySelector("main").innerHTML = "";
        renderCommentBox(language)
        renderGameSelectionBox()
        renderGameFilterBox()
        renderPost(language, username);

        createNewComment();
});

function createNewComment() {
    document.querySelector(".commentBoxForm").addEventListener("submit", function(event) {
            event.preventDefault(); 
            makeComment(username);
        });
}

function addDeleteListeners() {
    document.querySelectorAll(".delete-buton").forEach(button => {
        button.addEventListener("click", event => {
            const commentId = parseInt(event.target.getAttribute("data-id"));
            console.log("Botão clicado:", commentId); // Teste
            deleteSpecificComment(commentId);
        });
    });
}

let trilho = document.getElementById('trilho')
let body = document.querySelector('body')

trilho.addEventListener('click', ()=>{
    trilho.classList.toggle('dark')
    body.classList.toggle('dark')
    console.log('abc')
})

//inicio add game

  const addGameBtn = document.querySelector('#add-game-btn'); // botão "+ Add Game"
  const modal = document.querySelector('#addGameModal');
  const form = document.querySelector('#addGameForm');
  const cancelBtn = document.querySelector('#cancelBtn');

  // Mostrar modal
  addGameBtn.addEventListener('click', () => {
    modal.classList.remove('hidden');
  });

  // Cancelar modal
  cancelBtn.addEventListener('click', () => {
    modal.classList.add('hidden');
  });

  // Submeter novo jogo
  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const name = form.name.value.trim();
    const image = form.image.value.trim();
    const genre = form.genre.value.trim();
    const graphicCards = form.graphic_cards.value.split(',').map(card => card.trim());

    const newGame = {
      name,
      image,
      genre,
      avarage_score: 0,
      graphic_cards: graphicCards,
      comments: [],
      id: crypto.randomUUID().slice(0, 4) // ou outra lógica para gerar ID único
    };

    try {
      const response = await fetch('http://localhost:3000/games', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newGame)
      });

      if (!response.ok) throw new Error('Erro ao adicionar jogo');

      alert('Jogo adicionado com sucesso!');
      modal.classList.add('hidden');
      form.reset();
      // Aqui você pode atualizar a UI se necessário
    } catch (error) {
      console.error('Erro ao adicionar jogo:', error);
      alert('Erro ao adicionar o jogo.');
    }
  });


//fim add game


import { login, getGamesByGraphicCard, getCommentsFromSpecificGame, getGames, getSpecificGame, postGames } from "../src/endpoints";
import jest from 'jest-mock';

global.fetch = jest.fn();

  describe('Testando a função getGames', () => {
    it('Deve retornar uma lista de jogos', async () => {

    const mockContent = [{
        "name": "Skyrim",
        "image": "https://upload.wikimedia.org/wikipedia/pt/thumb/a/aa/The_Elder_Scrolls_5_Skyrim_capa.png/270px-The_Elder_Scrolls_5_Skyrim_capa.png",
        "genre": "RPG",
        "avarage_score": 8,
        "graphic_cards": [
          "GTX 660",
          "GTX 1050 Ti",
          "GTX 1650",
          "RTX 3060",
          "RX 6400"
        ],
        "comments": [],
        "id": "8f06"
      },
      {
        "name": "CS2",
        "image": "https://www.google.com/url?sa=i&url=https%3A%2F%2Fbr.ign.com%2Fcounter-strike-2&psig=AOvVaw1tyZ_RlzIKNMBEsGUxiapx&ust=1741378248105000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCPju69Ch9osDFQAAAAAdAAAAABAJ",
        "genre": "FPS",
        "avarage_score": 0,
        "graphic_cards": [
          "GTX 1650",
          "RX 6400",
          "Intel Arc A380",
          "GTX 1050 Ti",
          "RTX 3060"
        ],
        "comments": [
          {
            "id": 1,
            "user": "Henrique",
            "score": 7,
            "comment": "Melhor FPS do mercado"
          }
        ],
        "id": "8f04"
      },
      {
        "name": "Final Fantasy 13",
        "image": "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.square-enix-games.com%2Fpt_BR%2Fgames%2Ffinal-fantasy-xiii&psig=AOvVaw3qSgei2UOpNUUopKu5nTZk&ust=1741377646490000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCODOi7Wf9osDFQAAAAAdAAAAABAS",
        "genre": "RPG",
        "avarage_score": 0,
        "graphic_cards": [
          "GTX 660",
          "GTX 1050 Ti",
          "GTX 1650",
          "RTX 3060",
          "RX 6400"
        ],
        "comments": [],
        "id": "8f05"

    }]

      fetch.mockResolvedValueOnce({
          ok: true,
          json: () => Promise.resolve(mockContent),
      });

      const result = await getGames();

      expect(result).toEqual(
          expect.arrayContaining([
              expect.objectContaining({ name: "CS2" }),
              expect.objectContaining({ name: "Skyrim" })
          ])
      ); 
    })
  })

  describe('Testando a função getSpecificGame', () => {
    it('Deve retorna um jogo específico dentro da lista', async () => {
      
      const findGame = "CS2"

      fetch.mockResolvedValueOnce({
        ok: true,
        json: () => Promise.resolve([{
            "name": "Skyrim",
            "image": "https://upload.wikimedia.org/wikipedia/pt/thumb/a/aa/The_Elder_Scrolls_5_Skyrim_capa.png/270px-The_Elder_Scrolls_5_Skyrim_capa.png",
            "genre": "RPG",
            "avarage_score": 8,
            "graphic_cards": [
              "GTX 660",
              "GTX 1050 Ti",
              "GTX 1650",
              "RTX 3060",
              "RX 6400"
            ],
            "comments": [],
            "id": "8f06"
          },
          {
            "name": "CS2",
            "image": "https://www.google.com/url?sa=i&url=https%3A%2F%2Fbr.ign.com%2Fcounter-strike-2&psig=AOvVaw1tyZ_RlzIKNMBEsGUxiapx&ust=1741378248105000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCPju69Ch9osDFQAAAAAdAAAAABAJ",
            "genre": "FPS",
            "avarage_score": 0,
            "graphic_cards": [
              "GTX 1650",
              "RX 6400",
              "Intel Arc A380",
              "GTX 1050 Ti",
              "RTX 3060"
            ],
            "comments": [
              {
                "id": 1,
                "user": "Henrique",
                "score": 7,
                "comment": "Melhor FPS do mercado"
              }
            ],
            "id": "8f04"
          },
          {
            "name": "Final Fantasy 13",
            "image": "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.square-enix-games.com%2Fpt_BR%2Fgames%2Ffinal-fantasy-xiii&psig=AOvVaw3qSgei2UOpNUUopKu5nTZk&ust=1741377646490000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCODOi7Wf9osDFQAAAAAdAAAAABAS",
            "genre": "RPG",
            "avarage_score": 0,
            "graphic_cards": [
              "GTX 660",
              "GTX 1050 Ti",
              "GTX 1650",
              "RTX 3060",
              "RX 6400"
            ],
            "comments": [],
            "id": "8f05"

        }]),
      });

      const result = await getSpecificGame(findGame);
      
      expect(result).toHaveProperty("name", "CS2");
    });
  })

  describe('Testando a função getCommentsFromSpecificGame', () => {
    it('Deve retorna comentários de um jogo especifico', async () => {
      
      const findGame = "CS2"

      fetch.mockResolvedValueOnce({
        ok: true,
        json: () => Promise.resolve([{
            "name": "Skyrim",
            "image": "https://upload.wikimedia.org/wikipedia/pt/thumb/a/aa/The_Elder_Scrolls_5_Skyrim_capa.png/270px-The_Elder_Scrolls_5_Skyrim_capa.png",
            "genre": "RPG",
            "avarage_score": 8,
            "graphic_cards": [
              "GTX 660",
              "GTX 1050 Ti",
              "GTX 1650",
              "RTX 3060",
              "RX 6400"
            ],
            "comments": [],
            "id": "8f06"
          },
          {
            "name": "CS2",
            "image": "https://www.google.com/url?sa=i&url=https%3A%2F%2Fbr.ign.com%2Fcounter-strike-2&psig=AOvVaw1tyZ_RlzIKNMBEsGUxiapx&ust=1741378248105000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCPju69Ch9osDFQAAAAAdAAAAABAJ",
            "genre": "FPS",
            "avarage_score": 0,
            "graphic_cards": [
              "GTX 1650",
              "RX 6400",
              "Intel Arc A380",
              "GTX 1050 Ti",
              "RTX 3060"
            ],
            "comments": [
              {
                "id": 1,
                "user": "Henrique",
                "score": 7,
                "comment": "Melhor FPS do mercado"
              }
            ],
            "id": "8f04"
          },
          {
            "name": "Final Fantasy 13",
            "image": "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.square-enix-games.com%2Fpt_BR%2Fgames%2Ffinal-fantasy-xiii&psig=AOvVaw3qSgei2UOpNUUopKu5nTZk&ust=1741377646490000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCODOi7Wf9osDFQAAAAAdAAAAABAS",
            "genre": "RPG",
            "avarage_score": 0,
            "graphic_cards": [
              "GTX 660",
              "GTX 1050 Ti",
              "GTX 1650",
              "RTX 3060",
              "RX 6400"
            ],
            "comments": [],
            "id": "8f05"

        }]),
      });

      const result = await getCommentsFromSpecificGame(findGame);
      
      expect(Array.isArray(result)).toBe(true);
      expect(result.length).toBeGreaterThan(0);
    });
  })

  describe('Testando a função getGamesByGraphicCard', () => {
    it('Deve retorna uma lista de jogos com base na placa de video RTX 3060', async () => {
      
      const chosenGraphic = "RTX 3060"

      fetch.mockResolvedValueOnce({
        ok: true,
        json: () => Promise.resolve([{
            "name": "Skyrim",
            "image": "https://upload.wikimedia.org/wikipedia/pt/thumb/a/aa/The_Elder_Scrolls_5_Skyrim_capa.png/270px-The_Elder_Scrolls_5_Skyrim_capa.png",
            "genre": "RPG",
            "avarage_score": 8,
            "graphic_cards": [
              "GTX 660",
              "GTX 1050 Ti",
              "GTX 1650",
              "RTX 3060",
              "RX 6400"
            ],
            "comments": [],
            "id": "8f06"
          },
          {
            "name": "CS2",
            "image": "https://www.google.com/url?sa=i&url=https%3A%2F%2Fbr.ign.com%2Fcounter-strike-2&psig=AOvVaw1tyZ_RlzIKNMBEsGUxiapx&ust=1741378248105000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCPju69Ch9osDFQAAAAAdAAAAABAJ",
            "genre": "FPS",
            "avarage_score": 0,
            "graphic_cards": [
              "GTX 1650",
              "RX 6400",
              "Intel Arc A380",
              "GTX 1050 Ti",
              "RTX 3060"
            ],
            "comments": [
              {
                "id": 1,
                "user": "Henrique",
                "score": 7,
                "comment": "Melhor FPS do mercado"
              }
            ],
            "id": "8f04"
          },
          {
            "name": "Final Fantasy 13",
            "image": "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.square-enix-games.com%2Fpt_BR%2Fgames%2Ffinal-fantasy-xiii&psig=AOvVaw3qSgei2UOpNUUopKu5nTZk&ust=1741377646490000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCODOi7Wf9osDFQAAAAAdAAAAABAS",
            "genre": "RPG",
            "avarage_score": 0,
            "graphic_cards": [
              "GTX 660",
              "GTX 1050 Ti",
              "GTX 1650",
              "RTX 3060",
              "RX 6400"
            ],
            "comments": [],
            "id": "8f05"

        }]),
      });

      const result = await getGamesByGraphicCard(chosenGraphic);
      
      expect(Array.isArray(result)).toBe(true);
      expect(result.length).toBeGreaterThan(0);
    });

    it('Não deve encontrar jogos com essa placa de video', async () => {
      
      const chosenGraphic = "R 4290"

      fetch.mockResolvedValueOnce({
        ok: true,
        json: () => Promise.resolve([{
            "name": "Skyrim",
            "image": "https://upload.wikimedia.org/wikipedia/pt/thumb/a/aa/The_Elder_Scrolls_5_Skyrim_capa.png/270px-The_Elder_Scrolls_5_Skyrim_capa.png",
            "genre": "RPG",
            "avarage_score": 8,
            "graphic_cards": [
              "GTX 660",
              "GTX 1050 Ti",
              "GTX 1650",
              "RTX 3060",
              "RX 6400"
            ],
            "comments": [],
            "id": "8f06"
          },
          {
            "name": "CS2",
            "image": "https://www.google.com/url?sa=i&url=https%3A%2F%2Fbr.ign.com%2Fcounter-strike-2&psig=AOvVaw1tyZ_RlzIKNMBEsGUxiapx&ust=1741378248105000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCPju69Ch9osDFQAAAAAdAAAAABAJ",
            "genre": "FPS",
            "avarage_score": 0,
            "graphic_cards": [
              "GTX 1650",
              "RX 6400",
              "Intel Arc A380",
              "GTX 1050 Ti",
              "RTX 3060"
            ],
            "comments": [
              {
                "id": 1,
                "user": "Henrique",
                "score": 7,
                "comment": "Melhor FPS do mercado"
              }
            ],
            "id": "8f04"
          },
          {
            "name": "Final Fantasy 13",
            "image": "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.square-enix-games.com%2Fpt_BR%2Fgames%2Ffinal-fantasy-xiii&psig=AOvVaw3qSgei2UOpNUUopKu5nTZk&ust=1741377646490000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCODOi7Wf9osDFQAAAAAdAAAAABAS",
            "genre": "RPG",
            "avarage_score": 0,
            "graphic_cards": [
              "GTX 660",
              "GTX 1050 Ti",
              "GTX 1650",
              "RTX 3060",
              "RX 6400"
            ],
            "comments": [],
            "id": "8f05"

        }]),
      });

      const result = await getGamesByGraphicCard(chosenGraphic);
      
      expect(Array.isArray(result)).toBe(true);
      expect(result.length).toBe(0);
    });
  })

  describe('Testando a função postGames', () => {
    it('Deve criar um novo registro de jogo', async () => {
      
      const newGame = {
        "name": "The Witcher 3",
        "image": "https://upload.wikimedia.org/wikipedia/pt/0/06/TW3_Wild_Hunt.png",
        "genre": "RPG",
        "avarage_score": 0,
        "graphic_cards": [
          "GTX 660",
          "GTX 1050 Ti",
          "GTX 1650",
          "RTX 3060",
          "RX 6400"
        ],
        "comments": [],
        "id": "8f07"
      }
      

      fetch.mockResolvedValue({
        ok: true,
        json: () => Promise.resolve({ id: 1, ...newGame }),
      });

      const result = await postGames(newGame);
      
      expect(result).toBe("Novo jogo adicionado: The Witcher 3");
    });
  })

  describe('Testando a função de login', () => {
    it('Deve verificar se o usuário conseguiu fazer login', async () => {
      
      let username = "Henrique"
      let password = "Password123"

      const usersMock = {
        "users": [
          {
              "id": 1,
              "username": "Henrique",
              "password": "Password123",
              "image": "",
              "favorite_genres":["RPG"],
              "favorite_games":[],
              "spec": {
                  "processor": "Intel(R) Core(TM) i7-10700KF CPU @ 3.80GHz",
                  "ram": "16GB DDR4",
                  "graphic_cards": "NVIDIA GeForce RTX 3070",
                  "storage": "1TB SSD",
                  "operating_system": "Windows 11"
              }
          }
        ]
      }
      

      fetch.mockResolvedValue({
        ok: true,
        json: () => Promise.resolve(usersMock.users),
      });

      const result = await login(username, password);
      
      expect(result).toBe(true);
    });

    it('Deve verificar se o usuário não conseguiu fazer login', async () => {
      
      let username = "Henrique"
      let password = "Password"

      const usersMock = {
        "users": [
          {
              "id": 1,
              "username": "Henrique",
              "password": "Password123",
              "image": "",
              "favorite_genres":["RPG"],
              "favorite_games":[],
              "spec": {
                  "processor": "Intel(R) Core(TM) i7-10700KF CPU @ 3.80GHz",
                  "ram": "16GB DDR4",
                  "graphic_cards": "NVIDIA GeForce RTX 3070",
                  "storage": "1TB SSD",
                  "operating_system": "Windows 11"
              }
          }
        ]
      }
      

      fetch.mockResolvedValue({
        ok: true,
        json: () => Promise.resolve(usersMock.users),
      });

      const result = await login(username, password);
      
      expect(result).toBe(false);
    });
  })

  
  
  